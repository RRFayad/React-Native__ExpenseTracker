import { FlatList, Text } from "react-native";
import ExpenseItem from "./ExpenseItem";

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={(itemData) => {
        return <ExpenseItem {...itemData.item} />;
      }}
      keyExtractor={(item, index) => item.id}
    />
  );
}

export default ExpensesList;
