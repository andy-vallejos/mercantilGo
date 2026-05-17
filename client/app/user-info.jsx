import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function UserInfo() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.replace("/(auth)/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Text style={styles.backText}>←</Text>
        </Pressable>

        <Text style={styles.title}>Mi Perfil</Text>
      </View>

      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>CP</Text>
        </View>

        <Text style={styles.name}>Carlos Pérez</Text>
        <Text style={styles.email}>carlos@email.com</Text>
      </View>
      <View style={styles.infoCard}>
        <Text style={styles.label}>Teléfono</Text>
        <Text style={styles.value}>+591 70000000</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.label}>Ciudad</Text>
        <Text style={styles.value}>Cochabamba</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.label}>Tipo de cuenta</Text>
        <Text style={styles.value}>Premium</Text>
      </View>
      
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutText}>Cerrar sesión</Text>
        </Pressable>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6F2",
    padding: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8F5E9",
    marginRight: 10,
  },

  backText: {
    fontSize: 24,
    fontWeight: "800",
    color: "#0A2A1A",
  },

  title: {
    fontSize: 26,
    fontWeight: "900",
    color: "#0A2A1A",
  },

  profileCard: {
    backgroundColor: "#0B3B22",
    borderRadius: 28,
    padding: 24,
    alignItems: "center",
    marginBottom: 20,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#9AFF45",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  avatarText: {
    fontSize: 26,
    fontWeight: "900",
    color: "#0A2A1A",
  },

  name: {
    fontSize: 22,
    fontWeight: "800",
    color: "white",
  },

  email: {
    fontSize: 14,
    color: "#C7E6CF",
    marginTop: 4,
  },

  infoCard: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 18,
    marginBottom: 10,
  },

  label: {
    fontSize: 12,
    color: "#777",
    marginBottom: 4,
  },

  value: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0A2A1A",
  },

  buttonsContainer: {
    marginTop: 20,
  },

  logoutBtn: {
    backgroundColor: "#FFEBEE",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
  },

  logoutText: {
    color: "#C62828",
    fontWeight: "800",
    fontSize: 16,
  },
});