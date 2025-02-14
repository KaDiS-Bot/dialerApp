import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeContext";

const SettingsScreen = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <View style={[styles.container, darkMode && styles.darkContainer]}>
      <Text style={[styles.text, darkMode && styles.darkText]}>Dark Mode</Text>
      <Switch value={darkMode} onValueChange={setDarkMode} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  darkContainer: { backgroundColor: "#121212" },
  text: { fontSize: 18, color: "#000" },
  darkText: { color: "#fff" },
});

export default SettingsScreen;
