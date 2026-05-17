import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Switch,
  ScrollView,
  Dimensions,
  Alert,
  ActivityIndicator,
} from "react-native";

import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const { width } = Dimensions.get("window");

export default function LoginScreen() {
  const router = useRouter();

  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      if (!email.trim() || !password.trim()) {
        Alert.alert("Campos vacíos", "Completa todos los campos");
        return;
      }

      setLoading(true);

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // 🔐 guardar sesión (token recomendado)
      const token = await user.getIdToken();
      await AsyncStorage.setItem("userToken", token);

      // opcional: recordar email
      if (rememberMe) {
        await AsyncStorage.setItem("userEmail", email);
      }

      Alert.alert("Bienvenido", user.email || "Usuario");

      router.replace("/(tabs)");
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Credenciales incorrectas o problema de login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView
      style={styles.container}
      bounces={false}
      showsVerticalScrollIndicator={false}
    >
      {/* HEADER */}
      <View style={styles.headerCard}>
        <Pressable style={styles.menuButton}>
          <Text style={styles.menuIcon}>≡</Text>
        </Pressable>

        <View style={styles.avatarBorder}>
          <View style={styles.avatarMock}>
            <Text style={styles.avatarEmoji}>🧑‍💻</Text>
          </View>
        </View>

        <Text style={styles.userName}>Bienvenido</Text>
      </View>

      {/* FORM */}
      <View style={styles.formContainer}>
        {/* REGISTER */}
        <Pressable style={styles.registerPill}>
          <Text style={styles.registerIcon}>˃</Text>
          <Text style={styles.registerText}>REGÍSTRATE</Text>
        </Pressable>

        {/* EMAIL */}
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Usuario o Correo"
            placeholderTextColor="#A1A59C"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
          <Text style={styles.inputIcon}>👤</Text>
        </View>

        {/* PASSWORD */}
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="#A1A59C"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Text style={styles.inputIcon}>👁️</Text>
        </View>

        {/* REMEMBER */}
        <View style={styles.rememberRow}>
          <Switch
            trackColor={{ false: "#EAECE6", true: "#9BFF42" }}
            thumbColor={rememberMe ? "#133C24" : "#FFFFFF"}
            onValueChange={setRememberMe}
            value={rememberMe}
          />
          <Text style={styles.rememberText}>Recuérdame</Text>
        </View>

        {/* FORGOT */}
        <Pressable style={styles.forgotButton}>
          <Text style={styles.forgotText}>
            Recupera tu contraseña de acceso
          </Text>
        </Pressable>

        {/* LOGIN BUTTON */}
        <Pressable
          style={[styles.loginButton, loading && { opacity: 0.7 }]}
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.loginButtonText}>Acceder</Text>
          )}
        </Pressable>

        {/* FACE ID */}
        <Pressable style={styles.faceIdButton}>
          <Text style={styles.faceIdIcon}>👤</Text>
          <Text style={styles.faceIdText}>Accede con Face ID</Text>
        </Pressable>
      </View>

      {/* BADGE */}
      <View style={styles.floatingBadge}>
        <Text style={styles.badgeLabel}>PUNTO</Text>
        <Text style={styles.badgeIcon}>💬</Text>
        <Text style={styles.badgeLabel}>RECLAMO</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  headerCard: {
    backgroundColor: "#1D3D2A",
    height: 340,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: width * 0.45,
    borderBottomRightRadius: width * 0.45,
    paddingTop: 40,
    position: "relative",
  },

  menuButton: {
    position: "absolute",
    top: 50,
    left: 24,
    width: 40,
    height: 40,
  },
  menuIcon: {
    color: "#FFFFFF",
    fontSize: 32,
  },

  avatarBorder: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },

  avatarMock: {
    width: 124,
    height: 124,
    borderRadius: 62,
    backgroundColor: "#2E543A",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarEmoji: {
    fontSize: 50,
  },

  userName: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
  },

  formContainer: {
    paddingHorizontal: 32,
    alignItems: "center",
    transform: [{ translateY: -30 }],
  },

  registerPill: {
    backgroundColor: "#EBF1EC",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    width: "100%",
    borderRadius: 30,
    marginBottom: 24,
  },

  registerIcon: {
    fontSize: 16,
    fontWeight: "700",
  },

  registerText: {
    fontSize: 14,
    fontWeight: "700",
  },

  inputWrapper: {
    width: "100%",
    marginBottom: 16,
  },

  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#DCE1DA",
    borderRadius: 20,
    paddingVertical: 16,
    paddingLeft: 20,
    paddingRight: 50,
    fontSize: 15,
  },

  inputIcon: {
    position: "absolute",
    right: 20,
    top: 18,
    fontSize: 18,
  },

  rememberRow: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginBottom: 24,
  },

  rememberText: {
    fontSize: 14,
    marginLeft: 10,
  },

  forgotButton: {
    marginBottom: 32,
  },

  forgotText: {
    textDecorationLine: "underline",
    fontWeight: "700",
  },

  loginButton: {
    backgroundColor: "#0A2A1A",
    width: "100%",
    paddingVertical: 18,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 24,
  },

  loginButtonText: {
    color: "#fff",
    fontWeight: "700",
  },

  faceIdButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
  },

  faceIdIcon: {
    fontSize: 18,
  },

  faceIdText: {
    marginLeft: 8,
    fontWeight: "700",
  },

  floatingBadge: {
    position: "absolute",
    bottom: 16,
    right: 16,
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#9BFF42",
    justifyContent: "center",
    alignItems: "center",
  },

  badgeLabel: {
    fontSize: 8,
    fontWeight: "800",
  },

  badgeIcon: {
    fontSize: 14,
  },
});