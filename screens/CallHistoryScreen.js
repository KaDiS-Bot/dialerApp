import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, PermissionsAndroid } from "react-native";
import CallLog from "react-native-call-log";

const CallHistoryScreen = () => {
  const [callLogs, setCallLogs] = useState([]);

  useEffect(() => {
    const requestCallLogPermission = async () => {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CALL_LOG);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        CallLog.loadAll().then((logs) => setCallLogs(logs));
      }
    };
    requestCallLogPermission();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Recent Calls</Text>
      <FlatList
        data={callLogs}
        keyExtractor={(item) => item.timestamp.toString()}
        renderItem={({ item }) => <Text style={styles.callItem}>{item.name || item.phoneNumber} - {item.type}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  heading: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  callItem: { fontSize: 16, marginVertical: 5 },
});

export default CallHistoryScreen;
