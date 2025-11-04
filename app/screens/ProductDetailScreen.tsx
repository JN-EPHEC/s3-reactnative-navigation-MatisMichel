import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ShopStackParamList } from "./ProductListScreen";

type Props = NativeStackScreenProps<ShopStackParamList, "ProductDetail">;

export default function ProductDetailScreen({ route }: Props) {
  const { name, price, desc, id } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>{name}</Text>
      <Text>ID: {id}</Text>
      <Text style={styles.price}>Price: ${price}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  h1: { fontSize: 22, fontWeight: "700", marginBottom: 8 },
  price: { marginTop: 6, fontWeight: "600" },
  desc: { marginTop: 10, lineHeight: 20 },
});
