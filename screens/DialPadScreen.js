import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Linking, useColorScheme } from "react-native";

const DialPadScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const handlePress = (num) => {
    setPhoneNumber((prev) => prev + num);
  };

  const handleDelete = () => {
    setPhoneNumber(phoneNumber.slice(0, -1));
  };

  const handleCall = () => {
    if (phoneNumber.length > 0) {
      Linking.openURL(`tel:${phoneNumber}`);
    }
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.phoneNumber, isDarkMode && styles.darkText]}>{phoneNumber || "Enter Number"}</Text>

      <View style={styles.dialPad}>
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"].map((num) => (
          <TouchableOpacity key={num} style={[styles.button, isDarkMode && styles.darkButton]} onPress={() => handlePress(num)}>
            <Text style={[styles.buttonText, isDarkMode && styles.darkText]}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={[styles.callButton, isDarkMode && styles.darkCallButton]} onPress={handleCall}>
          <Text style={styles.buttonText}>📞 Call</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.deleteButton, isDarkMode && styles.darkDeleteButton]} onPress={handleDelete}>
          <Text style={styles.buttonText}>❌ Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f5f5f5" },
  darkContainer: { backgroundColor: "#121212" },
  phoneNumber: { fontSize: 28, marginBottom: 20, color: "#000" },
  darkText: { color: "#fff" },
  dialPad: { flexDirection: "row", flexWrap: "wrap", width: 270, justifyContent: "center" },
  button: { width: 80, height: 80, justifyContent: "center", alignItems: "center", margin: 5, backgroundColor: "#ddd", borderRadius: 40 },
  darkButton: { backgroundColor: "#333" },
  buttonText: { fontSize: 24, color: "#000" },
  actions: { flexDirection: "row", marginTop: 20 },
  callButton: { backgroundColor: "green", padding: 10, margin: 5, borderRadius: 5 },
  darkCallButton: { backgroundColor: "#0f0" },
  deleteButton: { backgroundColor: "red", padding: 10, margin: 5, borderRadius: 5 },
  darkDeleteButton: { backgroundColor: "#f00" },
});

export default DialPadScreen;
