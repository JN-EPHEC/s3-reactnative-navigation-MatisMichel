import { Tabs } from "expo-router";

export default function CoursesTabs() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="all" options={{ title: "All Courses" }} />
      <Tabs.Screen name="wishlist" options={{ title: "My Wishlist" }} />
    </Tabs>
  );
}
