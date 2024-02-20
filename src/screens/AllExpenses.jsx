import { useContext } from "react";
import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

import ExpensesContext from "../shared/Context/ExpensesContext";

function AllExpenses() {
  const { expenses } = useContext(ExpensesContext);
  return <ExpensesOutput expenses={expenses} expensesPeriod="Total" />;
}

export default AllExpenses;
