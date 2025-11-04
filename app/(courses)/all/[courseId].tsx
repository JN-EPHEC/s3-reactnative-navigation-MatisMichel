import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function CourseDetailScreen() {
  const { courseId, title, description } = useLocalSearchParams<{ courseId: string; title?: string; description?: string }>();
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>{title ?? courseId}</Text>
      <Text style={styles.body}>{description ?? "No description provided."}</Text>
      <Text style={styles.meta}>ID: {courseId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 10 },
  h1: { fontSize: 22, fontWeight: "700" },
  body: { fontSize: 16 },
  meta: { color: "#555", marginTop: 12 },
});
