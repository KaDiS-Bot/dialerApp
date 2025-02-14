import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet, useColorScheme } from "react-native";

const ContactsScreen = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [search, setSearch] = useState("");
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const addContact = () => {
    if (name && number) {
      setContacts([...contacts, { id: Date.now().toString(), name, number }]);
      setName("");
      setNumber("");
    }
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase()) || contact.number.includes(search)
  );

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.title, isDarkMode && styles.darkText]}>Save Contact</Text>
      <TextInput
        style={[styles.input, isDarkMode && styles.darkInput]}
        placeholder="Name"
        placeholderTextColor={isDarkMode ? "#bbb" : "#666"}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={[styles.input, isDarkMode && styles.darkInput]}
        placeholder="Phone Number"
        placeholderTextColor={isDarkMode ? "#bbb" : "#666"}
        keyboardType="phone-pad"
        value={number}
        onChangeText={setNumber}
      />
      <Button title="Save Contact" onPress={addContact} />

      <TextInput
        style={[styles.input, isDarkMode && styles.darkInput]}
        placeholder="Search Contacts"
        placeholderTextColor={isDarkMode ? "#bbb" : "#666"}
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredContacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.contactItem, isDarkMode && styles.darkContactItem]}>
            <Text style={[styles.contactText, isDarkMode && styles.darkText]}>{item.name} - {item.number}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  darkContainer: { backgroundColor: "#121212" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10, color: "#000" },
  darkText: { color: "#fff" },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderColor: "#aaa", borderRadius: 5 },
  darkInput: { borderColor: "#444", color: "#fff", backgroundColor: "#333" },
  contactItem: { padding: 10, borderBottomWidth: 1, borderBottomColor: "#ddd" },
  darkContactItem: { borderBottomColor: "#555" },
  contactText: { fontSize: 16 },
});

export default ContactsScreen;
