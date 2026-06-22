export const PLACEHOLDER_IMAGE = '/images/placeholder-product.jpg';

function addCacheBust(url) {
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}cacheBust=${Date.now()}`;
}

export function toCsvUrl(url) {
  if (!url || url === 'COLOCAR_LINK_AQUI') {
    return '';
  }

  if (url.includes('output=csv') || url.includes('/pub?')) {
    return url;
  }

  const idMatch = url.match(/\/spreadsheets\/d\/([^/]+)/);
  const gidMatch = url.match(/[?#&]gid=(\d+)/);

  if (!idMatch) {
    return url;
  }

  const sheetId = idMatch[1];
  const gid = gidMatch?.[1] || '0';

  return `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;
}

export function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let insideQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const nextChar = text[index + 1];

    if (char === '"' && insideQuotes && nextChar === '"') {
      field += '"';
      index += 1;
      continue;
    }

    if (char === '"') {
      insideQuotes = !insideQuotes;
      continue;
    }

    if (char === ',' && !insideQuotes) {
      row.push(field);
      field = '';
      continue;
    }

    if ((char === '\n' || char === '\r') && !insideQuotes) {
      if (char === '\r' && nextChar === '\n') {
        index += 1;
      }
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
      continue;
    }

    field += char;
  }

  row.push(field);
  rows.push(row);

  return rows.filter((currentRow) => currentRow.some((cell) => cell.trim()));
}

export function normalizeHeader(header) {
  return header.replace(/^\uFEFF/, '').trim().toLowerCase();
}

export function getCell(row, headers, name) {
  const index = headers.indexOf(name.toLowerCase());
  return index >= 0 ? row[index]?.trim() || '' : '';
}

function getGoogleDriveFileId(url) {
  const fileMatch = url.match(/drive\.google\.com\/file\/d\/([^/]+)/i);
  const idMatch = url.match(/[?&]id=([^&]+)/i);

  return fileMatch?.[1] || idMatch?.[1] || '';
}

export function extractImageUrl(value) {
  const image = value.trim();
  const formulaMatch = image.match(/IMAGE\(["']([^"']+)["']/i);
  const candidate = formulaMatch?.[1] || image;
  const driveFileId = getGoogleDriveFileId(candidate);

  if (driveFileId) {
    return `https://drive.google.com/thumbnail?id=${driveFileId}&sz=w1000`;
  }

  if (/^https?:\/\//i.test(candidate) || candidate.startsWith('/')) {
    return candidate;
  }

  return PLACEHOLDER_IMAGE;
}

export async function fetchCsvRows(url) {
  const csvUrl = toCsvUrl(url);

  if (!csvUrl) {
    throw new Error('Sheet URL is missing.');
  }

  const response = await fetch(addCacheBust(csvUrl), { cache: 'no-store' });

  if (!response.ok) {
    throw new Error(`Sheet request failed with status ${response.status}`);
  }

  const csvText = await response.text();
  const rows = parseCsv(csvText);
  const [headerRow, ...dataRows] = rows;

  if (!headerRow) {
    return { headers: [], dataRows: [] };
  }

  return {
    headers: headerRow.map(normalizeHeader),
    dataRows,
  };
}
