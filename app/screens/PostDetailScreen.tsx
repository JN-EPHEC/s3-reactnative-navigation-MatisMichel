import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../_layout";

type Props = NativeStackScreenProps<RootStackParamList, "PostDetail">;

export default function PostDetailScreen({ route }: Props) {
  const { postId, title, content } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>{title}</Text>
      <Text>ID: {postId}</Text>
      <Text style={styles.body}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  h1: { fontSize: 20, fontWeight: "600", marginBottom: 8 },
  body: { marginTop: 12 },
});
