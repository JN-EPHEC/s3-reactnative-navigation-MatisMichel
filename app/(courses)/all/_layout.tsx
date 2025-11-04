import { Stack } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function AllStack() {
  return (
    <Stack screenOptions={{ headerLeft: () => <DrawerToggleButton /> }}>
      <Stack.Screen name="index" options={{ title: "All Courses" }} />
      <Stack.Screen name="[courseId]" options={{ title: "Course Details" }} />
    </Stack>
  );
}
