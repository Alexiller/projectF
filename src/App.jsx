import { BudgetsProvider } from "./Context/BudgetContext";
import MainLayout from "./Layout/MainLayout";

function App() {
  return (
    <>
      <BudgetsProvider>
        <MainLayout />
      </BudgetsProvider>
    </>
  );
}

export default App;
