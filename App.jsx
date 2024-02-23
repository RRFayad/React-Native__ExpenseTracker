import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import RecentExpenses from "./src/screens/RecentExpenses";
import AllExpenses from "./src/screens/AllExpenses";
import ManageExpense from "./src/screens/ManageExpense";
import { GlobalStyles } from "./src/shared/constants";
import IconButton from "./src/components/UI/IconButton";
import { ExpensesContextProvider } from "./src/shared/Context/ExpensesContext";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

// Nested Navigator
const ExpensesOverView = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => navigation.navigate("ManageExpense")}
          />
        ),
      })}
    >
      <BottomTab.Screen
        name="RecentExpenses"
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass-outline" color={color} size={size} />
          ),
        }}
        component={RecentExpenses}
      />
      <BottomTab.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: "white",
            }}
          >
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverView} // This is the component created above, which uses BottomTab navigator
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpense}
              options={{ presentation: "modal" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}
