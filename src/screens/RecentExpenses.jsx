import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function RecenteExpense() {
  return <ExpensesOutput expensesPeriod={"Last 7 Days"} />;
}

export default RecenteExpense;
