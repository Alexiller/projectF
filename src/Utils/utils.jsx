export const currencyFormatter = new Intl.NumberFormat(undefined, {
  currency: "EUR",
  style: "currency",
  minimumFractionDigits: 0,
});

export function getMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date
    .toLocaleString("fr-fr", {
      month: "long",
    })
    .toUpperCase();
}

export const CATEGORY_LIST = [
  { value: "alimentation", label: "Alimentation" },
  { value: "habillement", label: "Habillement" },
  { value: "cadeaux", label: "Cadeaux" },
  { value: "internetTvTelephone", label: "Internet / TV / Téléphone" },
  { value: "sports", label: "Sports" },
  { value: "loisir", label: "Loisir" },
  { value: "formation", label: "Formation" },
  { value: "enfants", label: "Enfants" },
  { value: "impots", label: "Impôts" },
  { value: "transports", label: "Transports" },
  { value: "RestaurationHotel", label: "Restauration / Hotel" },
  { value: "service", label: "Service" },
  { value: "autres", label: "Autres" },
];
