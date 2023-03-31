export const currencyFormatter = new Intl.NumberFormat(undefined, {
  currency: "EUR",
  style: "currency",
  minimumFractionDigits: 0,
});

export function getProgressBarVariant(currentAmount, max) {
  const ratio = currentAmount / max;
  if (ratio < 0.5) return "green";
  if (ratio < 0.75) return "yellow";
  return "red";
}
