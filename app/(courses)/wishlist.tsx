import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { useNavigation } from "expo-router";

export default function WishlistScreen() {
  const navigation = useNavigation<any>();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "My Wishlist",
      headerLeft: () => <DrawerToggleButton />,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.empty}>Your wishlist is empty.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, alignItems: "center", justifyContent: "center" },
  empty: { fontSize: 16 },
});
