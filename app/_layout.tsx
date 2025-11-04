import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import ProductListScreen, { ShopStackParamList } from "./screens/ProductListScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import CartScreen from "./screens/CartScreen";

type RootTabParamList = {
  Shop: undefined;
  Cart: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();
const ShopStack = createNativeStackNavigator<ShopStackParamList>();

function ShopStackNavigator() {
  return (
    <ShopStack.Navigator initialRouteName="ProductList">
      <ShopStack.Screen
        name="ProductList"
        component={ProductListScreen}
        options={{ title: "Products" }}
      />
      <ShopStack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
    </ShopStack.Navigator>
  );
}

export default function RootLayout() {
  return (
    <Tab.Navigator
      initialRouteName="Shop"
      screenOptions={({ route }) => ({
        headerTitleAlign: "left",
        tabBarIcon: ({ focused, color, size }) => {
          const icon =
            route.name === "Shop"
              ? focused ? "bag" : "bag-outline"
              : focused ? "cart" : "cart-outline";
          return <Ionicons name={icon as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#2563eb",
        tabBarInactiveTintColor: "#6b7280",
      })}
    >
      {/* Hide the tab header here so the Shop stack controls its own headers */}
      <Tab.Screen
        name="Shop"
        component={ShopStackNavigator}
        options={{ title: "Shop", headerShown: false }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{ title: "My Cart" }}
      />
    </Tab.Navigator>
  );
}
