import { useContext, useLayoutEffect } from "react";
import { Text, View, TextInput } from "react-native";

import IconButton from "../components/UI/IconButton";
import CustomButton from "../components/UI/CustomButton";
import { GlobalStyles } from "../shared/constants";
import ExpensesContext from "../shared/Context/ExpensesContext";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

function ManageExpense({ route, navigation }) {
  const expenseId = route.params?.id; // This will no throw an error, it will return undifined if there's no params
  const isEditing = !!expenseId;

  const { addExpense, deleteExpense, updateExpense } =
    useContext(ExpensesContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = (id) => {
    deleteExpense(id);
    navigation.goBack();
  };
  const cancelHandler = () => {
    navigation.goBack();
  };
  const confirmHandler = (expenseData) => {
    isEditing ? updateExpense(expenseId, expenseData) : addExpense(expenseData);
    navigation.goBack();
  };

  return (
    <View className="flex-1 bg-primary-800 p-6">
      <ExpenseForm
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
      />

      {isEditing && (
        <View className="mt-4 items-center border-t-2 border-t-primary-200 pt-2">
          <IconButton
            icon={"trash"}
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={() => deleteExpenseHandler(expenseId)}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;
