import { Tabs } from "expo-router";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2D4F3C",
        tabBarInactiveTintColor: "#777",
        tabBarShowLabel: true,

        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 85,
          borderTopLeftRadius: 28,
          borderTopRightRadius: 28,
          overflow: "hidden",
          backgroundColor: "white",
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: "#000",
          shadowOpacity: 0.06,
          shadowRadius: 10,
        },

        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "700",
          marginBottom: 4,
        },

        tabBarItemStyle: ({ focused }) => ({
          borderRadius: 16, 
          backgroundColor: focused ? "#A3FF62" : "transparent", 

          height: 55,
          maxWidth: 75,
          
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 8,
        }),

        tabBarIconStyle: {
          marginTop: 2,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size - 2} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="goals"
        options={{
          title: "Metas",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="flag" size={size - 2} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="stats"
        options={{
          title: "Estadísticas",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bar-chart" size={size - 2} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="challenges"
        options={{
          title: "Retos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="trophy" size={size - 2} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}