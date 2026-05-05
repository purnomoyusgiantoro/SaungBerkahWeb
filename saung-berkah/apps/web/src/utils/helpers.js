/**
 * Format price to Indonesian Rupiah
 */
export function formatPrice(price) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}

/**
 * Get emoji icon for menu category
 */
export function getCategoryEmoji(category) {
  const map = {
    makanan: '🍽️',
    camilan: '🍟',
    minuman: '🥤',
  }
  return map[category] || '🍴'
}

/**
 * Get gradient color for menu category
 */
export function getCategoryColor(category) {
  const map = {
    makanan: 'linear-gradient(135deg, #3B1F0A 0%, #7B3F1A 100%)',
    camilan: 'linear-gradient(135deg, #1A3B0A 0%, #3A7B1A 100%)',
    minuman: 'linear-gradient(135deg, #0A1A3B 0%, #1A3A7B 100%)',
  }
  return map[category] || 'linear-gradient(135deg, #3B1F0A 0%, #5C3015 100%)'
}

/**
 * Truncate text to given length
 */
export function truncate(text, maxLength = 80) {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}
