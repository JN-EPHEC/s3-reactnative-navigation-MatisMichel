import { View, FlatList, Text, Pressable, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type ShopStackParamList = {
  ProductList: undefined;
  ProductDetail: { id: string; name: string; price: number; desc: string };
};

type Props = NativeStackScreenProps<ShopStackParamList, "ProductList">;

const PRODUCTS = [
  { id: "1", name: "Laptop",   price: 999, desc: "Slim, fast, reliable." },
  { id: "2", name: "Mouse",    price: 29,  desc: "Wireless ergonomic." },
  { id: "3", name: "Keyboard", price: 69,  desc: "Mechanical, backlit." },
];

export default function ProductListScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.sep} />}
        renderItem={({ item }) => (
          <Pressable
            style={styles.row}
            onPress={() => navigation.navigate("ProductDetail", item)}
          >
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  row: { paddingVertical: 12 },
  title: { fontSize: 16, fontWeight: "600" },
  price: { opacity: 0.7 },
  sep: { height: 1, backgroundColor: "#000", opacity: 0.08 },
});
