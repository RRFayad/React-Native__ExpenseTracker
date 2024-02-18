import { useLayoutEffect } from "react";
import { Text, View } from "react-native";

import IconButton from "../components/ExpensesOutput/UI/IconButton";
import { GlobalStyles } from "../shared/constants";

function ManageExpense({ route, navigation }) {
  const expenseId = route.params?.id; // This will no throw an error, it will return undifined if there's no params
  const isEditing = !!expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return (
    <View className="flex-1 bg-primary-800 p-6">
      {isEditing && (
        <View className="mt-4 items-center border-t-2 border-t-primary-200 pt-2">
          <IconButton
            icon={"trash"}
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={() => {}}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;
