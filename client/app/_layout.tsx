import { Stack, useRouter, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { View, ActivityIndicator } from "react-native";

export default function RootLayout() {
  const router = useRouter();
  const segments = useSegments();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔐 escuchar sesión Firebase
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });

    return unsub;
  }, []);

  // 🔒 control de rutas (PROTECCIÓN REAL)
  useEffect(() => {
    if (loading) return;

    const inAuthGroup = segments[0] === "(auth)";

    // ❌ no logueado → solo login
    if (!user && !inAuthGroup) {
      router.replace("/(auth)/login");
    }

    // ❌ logueado → no puede volver a login
    if (user && inAuthGroup) {
      router.replace("/(tabs)");
    }
  }, [user, segments, loading]);

  // ⏳ loading inicial
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="modal" />
        <Stack.Screen name="user-info" />
      </Stack>

      <StatusBar style="auto" />
    </>
  );
}