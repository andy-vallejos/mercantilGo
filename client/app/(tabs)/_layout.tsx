import { Tabs } from "expo-router";
import React from "react";

import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: "#2D4F3C",
        tabBarActiveBackgroundColor: "#A3FF62",
        tabBarInactiveTintColor: "#777",

        tabBarShowLabel: true,

        tabBarStyle: {
          position: "absolute",

          bottom: 0,
          left: 0,
          right: 0,

          height: 90,

          borderTopLeftRadius: 28,
          borderTopRightRadius: 28,

          overflow: "hidden",

          backgroundColor: "white",

          borderTopWidth: 0,

          elevation: 0,

          paddingTop: 10,
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          marginBottom: 2,
        },

        tabBarItemStyle: {
          borderRadius: 20,

          marginVertical: 10,
          marginHorizontal: 6,

          justifyContent: "center",
          alignItems: "center",
        },

        tabBarIconStyle: {
          marginTop: 4,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="goals"
        options={{
          title: "Goals",

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="flag" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="stats"
        options={{
          title: "Stats",

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bar-chart" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="challenges"
        options={{
          title: "Challenges",

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="trophy" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
