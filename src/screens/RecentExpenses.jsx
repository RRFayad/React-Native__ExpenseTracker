import { useContext } from "react";

import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import ExpensesContext from "../shared/Context/ExpensesContext";
import { getDateMinusDays } from "../util/date";

function RecentExpenses() {
  const { expenses } = useContext(ExpensesContext);

  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo;
  });
  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod={"Last 7 Days"} />
  );
}

export default RecentExpenses;
