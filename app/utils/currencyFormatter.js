// utils/currencyFormatter.js
export function formatCurrency(value) {
    return new Intl.NumberFormat('pt-PT', {
      style: 'currency',
      currency: 'EUR',
    }).format(value);
  }
  