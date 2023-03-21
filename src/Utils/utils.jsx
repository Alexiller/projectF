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

export function getProgressBarVariant(currentAmount, max) {
  const ratio = currentAmount / max;
  if (ratio < 0.5) return "green";
  if (ratio < 0.75) return "yellow";
  return "red";
}

export const EXPENSE_CATEGORY_LIST = [
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
  { value: "restaurationHotel", label: "Restauration / Hotel" },
  { value: "service", label: "Service" },
  { value: "sante", label: "Santé" },
  { value: "autres", label: "Autres" },
];

export const BUDGET_CATEGORYS = [
  {
    budgetCategory: "Global",
    currentAmount: 400,
    max: 1000,
    displayCurrentAmount: false,
    displayProgressBar: true,
    bgColor: "purple.200",
    colSpan: "4",
    colStart: "2",
    colEnd: "8",
  },
  {
    budgetCategory: "Investissement",
    currentAmount: 400,
    max: 1000,
    displayCurrentAmount: false,
    displayProgressBar: true,
    bgColor: "blue.200",
    colSpan: "2",
    colStart: "2",
    colEnd: "",
  },
  {
    budgetCategory: "Obligatoire",
    expenses: ["factures", "sante"],
    currentAmount: 200,
    max: 1000,
    displayCurrentAmount: false,
    displayProgressBar: true,
    bgColor: "orange.200",
    colSpan: "2",
    colStart: "",
    colEnd: "",
  },
  {
    budgetCategory: "Loisir",
    currentAmount: 800,
    max: 1000,
    displayCurrentAmount: false,
    displayProgressBar: true,
    bgColor: "green.200",
    colSpan: "2",
    colStart: "",
    colEnd: "",
  },
];
