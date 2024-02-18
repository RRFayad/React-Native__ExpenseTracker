import { useLayoutEffect } from "react";
import { Text } from "react-native";

function ManageExpense({ route, navigation }) {
  const expenseId = route.params?.id; // This will no throw an error, it will return undifined if there's no params
  const isEditing = !!expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return <Text>This is the Manage Expense Screen!</Text>;
}

export default ManageExpense;
