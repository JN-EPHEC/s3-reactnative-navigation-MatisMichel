import { Link } from "expo-router";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";

type Course = { id: string; title: string; description: string };
const COURSES: Course[] = [
  { id: "react-intro", title: "Intro to React Native", description: "Build native apps with JS." },
  { id: "advanced-js", title: "Advanced JavaScript", description: "Scopes, closures, patterns." },
  { id: "uiux-devs", title: "UI/UX for Developers", description: "Design systems and flows." },
];

export default function CourseListScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={COURSES}
        keyExtractor={(i) => i.id}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        renderItem={({ item }) => (
          <Link
            href={{ pathname: "/(courses)/all/[courseId]", params: { courseId: item.id, title: item.title, description: item.description } }}
            asChild
          >
            <Pressable style={styles.card}>
              <Text style={styles.title}>{item.title}</Text>
              <Text numberOfLines={2} style={styles.desc}>{item.description}</Text>
              <Text style={styles.cta}>View details</Text>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  card: { padding: 16, borderRadius: 12, borderWidth: 1, borderColor: "#ddd", gap: 6 },
  title: { fontSize: 18, fontWeight: "600" },
  desc: { fontSize: 14 },
  cta: { marginTop: 8, fontSize: 13, fontWeight: "500" },
});
