import { View, Text, FlatList } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 49.99,
    date: new Date("2022-01-05"),
  },
  {
    id: "e3",
    description: "A book",
    amount: 89.99,
    date: new Date("2021-12-01"),
  },
  {
    id: "e4",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2022-02-19"),
  },
  {
    id: "e5",
    description: "Another book",
    amount: 32.99,
    date: new Date("2022-02-04"),
  },
  {
    id: "e6",
    description: "A pair of trousers",
    amount: 49.99,
    date: new Date("2022-01-05"),
  },
  {
    id: "e7",
    description: "A book",
    amount: 89.99,
    date: new Date("2021-12-01"),
  },
  {
    id: "e8",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2022-02-19"),
  },
  {
    id: "e9",
    description: "Another book",
    amount: 32.99,
    date: new Date("2022-02-04"),
  },
  {
    id: "e10",
    description: "Another book",
    amount: 32.99,
    date: new Date("2022-02-04"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <>
      <View className="flex-1 bg-primary-700 px-6 pb-0 pt-6">
        <ExpensesSummary
          expenses={DUMMY_EXPENSES}
          periodName={expensesPeriod}
        />
        <ExpensesList expenses={DUMMY_EXPENSES} />
      </View>
    </>
  );
}

export default ExpensesOutput;
