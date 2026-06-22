import { outfits as fallbackOutfits } from '../data/outfits.js';
import { extractImageUrl, fetchCsvRows, getCell } from './sheetUtils.js';

export const GOOGLE_OUTFITS_CSV_URL =
  import.meta.env.VITE_OUTFITS_SHEET_URL || 'COLOCAR_LINK_AQUI';

function stripAccents(value) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function normalizeKey(value) {
  return stripAccents(value).trim().toLowerCase();
}

function normalizeGender(value) {
  const original = value.trim();
  const normalized = normalizeKey(original);

  if (['male', 'men', 'man'].includes(normalized)) {
    return 'Male';
  }

  if (['female', 'women', 'woman'].includes(normalized)) {
    return 'Female';
  }

  return original;
}

function createId(outfit, index) {
  const base = `outfit-${outfit.gender || 'all'}-${index + 1}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  return base || `outfit-${index + 1}`;
}

function getPieces(row, headers) {
  const labels = ['Top', 'Bottom', 'Accessory'];

  return [1, 2, 3]
    .map((number) => ({
      label: labels[number - 1],
      url: getCell(row, headers, `link ${number}`),
      code: getCell(row, headers, `code ${number}`),
    }))
    .filter((piece) => piece.url || piece.code);
}

function normalizeOutfitsFromRows(headers, dataRows) {
  return dataRows
    .map((row, index) => {
      const outfit = {
        name: `Outfit ${index + 1}`,
        gender: normalizeGender(getCell(row, headers, 'gender')),
        image: extractImageUrl(getCell(row, headers, 'image')),
        pieces: getPieces(row, headers),
      };

      return {
        id: createId(outfit, index),
        ...outfit,
      };
    })
    .filter((outfit) => outfit.gender && outfit.pieces.length);
}

export async function getOutfits() {
  try {
    const { headers, dataRows } = await fetchCsvRows(GOOGLE_OUTFITS_CSV_URL);
    const sheetOutfits = normalizeOutfitsFromRows(headers, dataRows);

    if (!sheetOutfits.length) {
      throw new Error('No valid outfits found in the Google Sheet.');
    }

    return {
      outfits: sheetOutfits,
      source: 'sheet',
      error: '',
    };
  } catch (error) {
    console.warn('Using fallback outfits:', error);
    return {
      outfits: fallbackOutfits,
      source: 'fallback',
      error: '',
    };
  }
}
