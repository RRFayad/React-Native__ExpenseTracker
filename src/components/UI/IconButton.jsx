import { Ionicons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";

function IconButton({ icon, size, color, onPress: pressHandler }) {
  return (
    <Pressable className="active:opacity-75" onPress={pressHandler}>
      <View className="mx-2 my-[2px] rounded-3xl p-[6px]">
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
}

export default IconButton;
