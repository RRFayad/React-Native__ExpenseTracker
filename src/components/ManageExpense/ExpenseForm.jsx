import { useState } from "react";
import { View, TextInput, Text, Alert } from "react-native";

import CustomInput from "./CustomInput";
import CustomButton from "../UI/CustomButton";
import { getFormattedDate } from "../../util/date";

function ExpenseForm({
  onCancel: cancelHandler,
  // onSubmit: submitHandler,
  submitButtonLabel,
  onSubmit,
  defaultValues,
}) {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true, // It's just a hack, as we didn't want to set if the form is touched
    },
    date: {
      value: defaultValues ? getFormattedDate(defaultValues.date) : "",
      isValid: true, // It's just a hack, as we didn't want to set if the form is touched
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true, // It's just a hack, as we didn't want to set if the form is touched
    },
  });

  const submitHandler = () => {
    const expenseData = {
      amount: +inputs.amount.value, // + converts the string into a number
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      console.log(expenseData.amount);
      setInputs((curInputs) => {
        return {
          amount: { value: curInputs.amount.value, isValid: amountIsValid },
          date: { value: curInputs.date.value, isValid: dateIsValid },
          description: {
            value: curInputs.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }

    onSubmit(expenseData);
  };

  const inputChangeHandler = (inputIdentifier, enteredText) => {
    setInputs((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: { value: enteredText, isValid: true },
      };
    });
  };

  const formIsValid =
    inputs.amount.isValid && inputs.date.isValid && inputs.description.isValid;

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
            value: inputs.amount.value,
          }}
          containerClassName={"flex-1"}
          invalid={!inputs.amount.isValid}
        />
        <CustomInput
          label={"Date"}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: (enteredText) =>
              inputChangeHandler("date", enteredText), // onChangeText gives the text as the arg for the handler fn (so we don't need to pass it)
            value: inputs.date.value,
          }}
          containerClassName={"flex-1"}
          invalid={!inputs.date.isValid}
        />
      </View>
      <CustomInput
        label={"Description"}
        textInputConfig={{
          multiline: true,
          onChangeText: (enteredText) =>
            inputChangeHandler("description", enteredText), // onChangeText gives the text as the arg for the handler fn (so we don't need to pass it)
          value: inputs.description.value,
        }}
        invalid={!inputs.description.isValid}
      />
      {!formIsValid && (
        <Text className="my-4 text-center  font-bold text-error-500">
          Invalid Inputs Values
        </Text>
      )}
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
