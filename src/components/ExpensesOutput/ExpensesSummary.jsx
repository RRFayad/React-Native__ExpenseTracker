import { View, Text, FlatList } from "react-native";

function ExpensesSummary({ expenses, periodName }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return expense.amount + sum;
  }, 0);

  return (
    <View className="flex-row items-center justify-between rounded-md bg-primary-50 p-2">
      <Text className="text-xs text-primary-400">{periodName}</Text>
      <Text className="text-base font-bold text-primary-500">
        ${expensesSum.toFixed(2)}
      </Text>
    </View>
  );
}

export default ExpensesSummary;
