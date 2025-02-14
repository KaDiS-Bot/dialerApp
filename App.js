import React from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DialPadScreen from "./screens/DialPadScreen";
import CallHistoryScreen from "./screens/CallHistoryScreen";
import ContactsScreen from "./screens/ContactsScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const AppContent = () => {
  const { darkMode } = useTheme();
  
  return (
    <NavigationContainer theme={darkMode ? DarkTheme : DefaultTheme}>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Dial Pad" component={DialPadScreen} options={{ tabBarIcon: ({ color }) => <Ionicons name="call" size={24} color={color} /> }} />
        <Tab.Screen name="Call History" component={CallHistoryScreen} options={{ tabBarIcon: ({ color }) => <Ionicons name="time" size={24} color={color} /> }} />
        <Tab.Screen name="Contacts" component={ContactsScreen} options={{ tabBarIcon: ({ color }) => <Ionicons name="people" size={24} color={color} /> }} />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarIcon: ({ color }) => <Ionicons name="settings" size={24} color={color} /> }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
