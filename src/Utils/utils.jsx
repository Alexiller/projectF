export const currencyFormatter = new Intl.NumberFormat(undefined, {
    currency: "EUR",
    style: "currency",
    minimumFractionDigits: 0
})

export function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
  
    return date.toLocaleString('fr-fr', {
      month: 'long',
    }).toUpperCase();
  }
