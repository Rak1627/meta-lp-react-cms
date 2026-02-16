export function normalizeText(value) {
  if (typeof value !== 'string') return value

  return value
    .replaceAll('Ã¢â‚¬â„¢', "'")
    .replaceAll('Ã¢â‚¬Å“', '"')
    .replaceAll('Ã¢â‚¬\u009D', '"')
    .replaceAll('Ã¢â‚¬Â¦', '...')
    .replaceAll('Ã¢â‚¬â€œ', '–')
    .replaceAll('Ã¢â€ â€™', '→')
    .replaceAll('â€™', "'")
    .replaceAll('â€œ', '"')
    .replaceAll('â€\u009D', '"')
    .replaceAll('â€¦', '...')
    .replaceAll('â€“', '–')
    .replaceAll('â†’', '→')
}

