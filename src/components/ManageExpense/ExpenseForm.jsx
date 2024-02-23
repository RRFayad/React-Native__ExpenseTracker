import { useState } from "react";
import { View, TextInput, Text } from "react-native";

import CustomInput from "./CustomInput";
import CustomButton from "../UI/CustomButton";

function ExpenseForm({
  onCancel: cancelHandler,
  // onSubmit: submitHandler,
  submitButtonLabel,
  onSubmit,
}) {
  const [inputValues, setInputValues] = useState({
    amount: "",
    date: "",
    description: "",
  });

  const submitHandler = () => {
    const expenseData = {
      amount: +inputValues.amount, // + converts the string into a number
      date: new Date(inputValues.date),
      description: inputValues.description,
    };

    onSubmit(expenseData);
  };

  const inputChangeHandler = (inputIdentifier, enteredText) => {
    setInputValues((prevState) => {
      return { ...prevState, [inputIdentifier]: enteredText };
    });
  };

  return (
    <View className="mt-4">
      <Text className="my-4 text-center text-2xl font-bold text-white">
        Your Expense
      </Text>
      <View className="flex-row justify-between">
        <CustomInput
          label={"Amount"}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: (enteredText) =>
              inputChangeHandler("amount", enteredText), // onChangeText gives the text as the arg for the handler fn (so we don't need to pass it)
            value: inputValues.amount,
          }}
          containerClassName={"flex-1"}
        />
        <CustomInput
          label={"Date"}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: (enteredText) =>
              inputChangeHandler("date", enteredText), // onChangeText gives the text as the arg for the handler fn (so we don't need to pass it)
            value: inputValues.date,
          }}
          containerClassName={"flex-1"}
        />
      </View>
      <CustomInput
        label={"Description"}
        textInputConfig={{
          multiline: true,
          onChangeText: (enteredText) =>
            inputChangeHandler("description", enteredText), // onChangeText gives the text as the arg for the handler fn (so we don't need to pass it)
          value: inputValues.description,
        }}
      />
      <View className="flex-row items-center justify-center">
        <CustomButton
          mode={"flat"}
          onPress={cancelHandler}
          ViewClassName="min-w-[120px] mx-2"
        >
          Cancel
        </CustomButton>
        <CustomButton
          onPress={submitHandler}
          ViewClassName="min-w-[120px] mx-2"
        >
          {submitButtonLabel}
        </CustomButton>
      </View>
    </View>
  );
}

export default ExpenseForm;
