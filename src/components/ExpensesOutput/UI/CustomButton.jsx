import { View, Pressable, Text } from "react-native";

function CustomButton({
  children,
  onPress: pressHandler,
  mode,
  ViewClassName,
}) {
  return (
    <View className={`${ViewClassName}`}>
      <Pressable
        onPress={pressHandler}
        className={`rounded bg-purple-600 p-2 active:bg-primary-100 active:opacity-75 ${mode === "flat" && "bg-transparent"}`}
      >
        <View>
          <Text
            className={`text-center text-white ${mode === "flat" && "text-primary-200"}`}
          >
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CustomButton;
