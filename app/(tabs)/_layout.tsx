import { Tabs } from "expo-router";
import React from "react";

import Icons from "@/components/ui/icons";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { THEME } from "@/lib/theme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: THEME[colorScheme ?? "light"].secondaryForeground,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Icons name="House" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <Icons name="Search" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
