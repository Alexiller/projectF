export const currencyFormatter = new Intl.NumberFormat(undefined, {
  currency: "EUR",
  style: "currency",
  minimumFractionDigits: 0,
});

export function getMonthName(monthNumber) {
  console.log(date);
  const date = new Date();
  date.setMonth(monthNumber - 1);

  console.log(date);

  return date
    .toLocaleString("fr-fr", {
      month: "long",
    })
    .toUpperCase();
}

export function getProgressBarVariant(currentAmount, max) {
  const ratio = currentAmount / max;
  if (ratio < 0.5) return "green";
  if (ratio < 0.75) return "yellow";
  return "red";
}
