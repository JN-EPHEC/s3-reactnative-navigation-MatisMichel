import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <Drawer screenOptions={{ headerTitle: "Course Finder" }}>
      <Drawer.Screen name="(courses)" options={{ drawerLabel: "Courses", title: "Courses" }} />
      <Drawer.Screen name="Profile" options={{ drawerLabel: "My Profile", title: "My Profile" }} />
    </Drawer>
  );
}
