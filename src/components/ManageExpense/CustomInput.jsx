import { View, Text, TextInput, Platform } from "react-native";

const OS = Platform.OS;

function CustomInput({ label, textInputConfig, containerClassName, invalid }) {
  return (
    <View className={`mx-1 my-2 ${containerClassName}`}>
      <Text
        className={`mb-1 text-center text-xs text-primary-100 ${invalid && "text-error-500"}`}
      >
        {label}
      </Text>
      <TextInput
        className={` rounded-md bg-primary-100 p-2 text-lg text-primary-700 ${textInputConfig.multiline && "min-h-[100px]"} ${OS === "ios" && "pb-5"} ${invalid && "bg-error-50 text-error-500"}`}
        style={textInputConfig.multiline && { textAlignVertical: "top" }}
        {...textInputConfig}
      />
    </View>
  );
}

export default CustomInput;
