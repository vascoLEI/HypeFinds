import { products as fallbackProducts } from '../data/products.js';
import { extractImageUrl, fetchCsvRows, getCell } from './sheetUtils.js';

export const GOOGLE_SHEET_CSV_URL =
  import.meta.env.VITE_PRODUCTS_SHEET_URL ||
  import.meta.env.VITE_GOOGLE_SHEET_CSV_URL ||
  'COLOCAR_LINK_AQUI';

function stripAccents(value) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function normalizeKey(value) {
  return stripAccents(value).trim().toLowerCase();
}

function normalizeTextValue(value) {
  return value.trim();
}

function normalizeGender(value) {
  const original = normalizeTextValue(value);
  const normalized = normalizeKey(original);

  if (['male', 'men', 'man'].includes(normalized)) {
    return 'Male';
  }

  if (['female', 'women', 'woman'].includes(normalized)) {
    return 'Female';
  }

  return original;
}

function normalizePrice(value) {
  const price = value.trim();

  if (!price) {
    return '';
  }

  if (price.includes('\u20ac')) {
    return price;
  }

  return `\u20ac${price}`;
}

function createId(product, index) {
  const base = `${product.name}-${product.category}-${index + 1}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  return base || `product-${index + 1}`;
}

function normalizeProductsFromRows(headers, dataRows) {
  return dataRows
    .map((row, index) => {
      const product = {
        name: normalizeTextValue(getCell(row, headers, 'name')),
        category: normalizeTextValue(getCell(row, headers, 'category')),
        gender: normalizeGender(getCell(row, headers, 'gender')),
        price: normalizePrice(getCell(row, headers, 'price')),
        image: extractImageUrl(getCell(row, headers, 'image')),
        sheinUrl: getCell(row, headers, 'url'),
        code: getCell(row, headers, 'code'),
      };

      return {
        id: createId(product, index),
        ...product,
      };
    })
    .filter((product) => product.name && product.sheinUrl);
}

export async function getProducts() {
  try {
    const { headers, dataRows } = await fetchCsvRows(GOOGLE_SHEET_CSV_URL);
    const sheetProducts = normalizeProductsFromRows(headers, dataRows);

    if (!sheetProducts.length) {
      throw new Error('No valid products found in the Google Sheet.');
    }

    return {
      products: sheetProducts,
      source: 'sheet',
      error: '',
    };
  } catch (error) {
    console.warn('Using fallback products:', error);
    return {
      products: fallbackProducts,
      source: 'fallback',
      error: '',
    };
  }
}
