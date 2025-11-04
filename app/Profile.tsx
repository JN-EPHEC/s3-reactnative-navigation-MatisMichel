import { View, Text, StyleSheet } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>User Profile</Text>
      <Text>Name: Jane Doe</Text>
      <Text>Email: jane@example.com</Text>
      <Text>Member since: 2024</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 8 },
  h1: { fontSize: 22, fontWeight: "600", marginBottom: 12 },
});
