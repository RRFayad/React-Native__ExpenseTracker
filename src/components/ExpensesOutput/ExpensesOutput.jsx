import { View, Text, FlatList } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <>
      <View className="flex-1 bg-primary-700 px-6 pb-0 pt-6">
        <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />

        {expenses.length === 0 && (
          <Text className="mt-8 text-center text-base text-white">
            No expenses registered!
          </Text>
        )}
        {expenses.length > 0 && <ExpensesList expenses={expenses} />}
      </View>
    </>
  );
}

export default ExpensesOutput;
