import { createContext, useContext, useState } from "react";

export const BudgetsContext = createContext();

export function useBudgets() {
  return useContext(BudgetsContext);
}

export const BudgetsProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  function getBudgetsExpenses(budgetId) {
    return expenses.filter((expense) => expense.budgetId === budgetId);
  }
  function addExpense({ description, amount, budgetId }) {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, { id: "", description, amount, budgetId }];
    });
  }
  function deleteExpense(id) {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((expense) => expense.id !== id);
    });
  }
  return (
    <BudgetsContext.Provider
      value={{
        expenses,
        getBudgetsExpenses,
        addExpense,
        deleteExpense,
      }}
    >
      {children}
    </BudgetsContext.Provider>
  );
};
