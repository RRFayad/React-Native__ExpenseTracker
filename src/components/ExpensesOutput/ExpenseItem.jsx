import { Pressable, View, Text } from "react-native";
import { getFormattedDate } from "../../util/date";

function ExpenseItem({ expense }) {
  return (
    <Pressable>
      <View
        className="my-2 flex-row justify-between rounded-md bg-primary-500 p-3 shadow-md shadow-gray-500"
        style={{ elevation: 3 }}
      >
        <View className="">
          <Text className="mb-1 text-base font-bold text-primary-50">
            {expense.description}
          </Text>
          <Text className="text-primary-50">
            {getFormattedDate(expense.date)}
          </Text>
        </View>
        <View className="min-w-[80px] items-center justify-center rounded bg-white p-3 py-1">
          <Text className="font-bold text-primary-500">
            {expense.amount.toFixed(2)}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;
