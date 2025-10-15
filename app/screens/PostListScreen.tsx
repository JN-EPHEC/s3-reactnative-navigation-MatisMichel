import { View, FlatList, Text, Pressable, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../_layout";

type Props = NativeStackScreenProps<RootStackParamList, "PostList">;

const DATA = [
  { postId: "1", title: "React Native is Awesome", content: "Lorem ipsum..." },
  { postId: "2", title: "State Management Tips", content: "Dolor sit amet..." },
  { postId: "3", title: "UI Design Principles", content: "Consectetur..." },
];

export default function PostListScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.postId}
        renderItem={({ item }) => (
          <Pressable
            accessibilityRole="button"
            onPress={() => navigation.navigate("PostDetail", item)}
            style={styles.row}
          >
            <Text style={styles.title}>{item.title}</Text>
          </Pressable>
        )}
        ItemSeparatorComponent={() => <View style={styles.sep} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  row: { paddingVertical: 12 },
  title: { fontSize: 16 },
  sep: { height: 1, opacity: 0.15, backgroundColor: "#000" },
});
