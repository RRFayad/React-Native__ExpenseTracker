import { View, Text, TextInput } from "react-native";

function CustomInput({ label, textInputConfig }) {
  return (
    <View className="mx-1 my-2">
      <Text className="mb-1 text-xs text-primary-100">{label}</Text>
      <TextInput
        className={`rounded-md bg-primary-100 p-2 text-lg text-primary-700 ${textInputConfig.multiline && "min-h-[100px] align-text-top"}`}
        style={textInputConfig.multiline && { textAlignVertical: "top" }}
        {...textInputConfig}
      />
    </View>
  );
}

export default CustomInput;
