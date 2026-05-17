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
} from "react-native";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export default function LoginScreen() {
  const router = useRouter();
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Redirección directa al flujo principal (tabs) sin validar credenciales por ahora
    router.replace("/(tabs)");
  };

  return (
    <ScrollView
      style={styles.container}
      bounces={false}
      showsVerticalScrollIndicator={false}
    >
      {/* ==================== CONTENEDOR SUPERIOR VERDE ==================== */}
      <View style={styles.headerCard}>
        {/* Botón de Menú Hamburguesa */}
        <Pressable style={styles.menuButton}>
          <Text style={styles.menuIcon}>≡</Text>
        </Pressable>

        {/* Contenedor del Avatar / Foto de Perfil */}
        <View style={styles.avatarBorder}>
          <View style={styles.avatarMock}>
            {/* Reemplazar por un <Image> real cuando tengas el asset */}
            <Text style={styles.avatarEmoji}>🧑‍💻</Text>
          </View>
        </View>

        {/* Nombre de Usuario */}
        <Text style={styles.userName}>Juan Lopez</Text>
      </View>

      {/* ==================== CONTENEDOR DEL FORMULARIO ==================== */}
      <View style={styles.formContainer}>
        {/* Botón Superior "REGÍSTRATE" */}
        <Pressable
          style={styles.registerPill}
          android_ripple={{ color: "#00000005" }}
        >
          <Text style={styles.registerIcon}>˃</Text>
          <Text style={styles.registerText}>REGÍSTRATE</Text>
        </Pressable>

        {/* Input: Usuario o Correo */}
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Usuario o Correo"
            placeholderTextColor="#A1A59C"
          />
          <Text style={styles.inputIcon}>👤</Text>
        </View>

        {/* Input: Contraseña */}
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="#A1A59C"
            secureTextEntry
          />
          <Text style={styles.inputIcon}>👁️</Text>
        </View>

        {/* Fila: Recuérdame (Switch) */}
        <View style={styles.rememberRow}>
          <Switch
            trackColor={{ false: "#EAECE6", true: "#9BFF42" }}
            thumbColor={rememberMe ? "#133C24" : "#FFFFFF"}
            ios_backgroundColor="#EAECE6"
            onValueChange={setRememberMe}
            value={rememberMe}
          />
          <Text style={styles.rememberText}>Recuérdame</Text>
        </View>

        {/* Enlace: Recuperar Contraseña */}
        <Pressable style={styles.forgotButton}>
          <Text style={styles.forgotText}>
            Recupera tu contraseña de acceso
          </Text>
        </Pressable>

        {/* Botón Principal: Acceder */}
        <Pressable
          style={styles.loginButton}
          onPress={handleLogin}
          android_ripple={{ color: "#ffffff20" }}
        >
          <Text style={styles.loginButtonText}>Acceder</Text>
        </Pressable>

        {/* Enlace Inferior: Face ID */}
        <Pressable style={styles.faceIdButton}>
          <Text style={styles.faceIdIcon}>👤</Text>
          <Text style={styles.faceIdText}>Accede con Face ID</Text>
        </Pressable>
      </View>

      {/* Floating Badge Inferior Derecho: Punto de Reclamo */}
      <View style={styles.floatingBadge}>
        <Text style={styles.badgeLabel}>PUNTO</Text>
        <Text style={styles.badgeIcon}>💬</Text>
        <Text style={styles.badgeLabel}>RECLAMO</Text>
      </View>
    </ScrollView>
  );
}

/* ==================== HOJA DE ESTILOS LOCALES ==================== */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  // Cabecera curva verde oscuro
  headerCard: {
    backgroundColor: "#1D3D2A", // Tu verde oscuro profundo exacto
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
    fontWeight: "300",
  },
  avatarBorder: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.2)",
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
    overflow: "hidden",
  },
  avatarEmoji: {
    fontSize: 50,
  },
  userName: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "700",
  },

  // Cuerpo del Formulario
  formContainer: {
    paddingHorizontal: 32,
    alignItems: "center",
    transform: [{ translateY: -30 }], // Sube un poco los elementos sobre la curva verde
  },
  registerPill: {
    backgroundColor: "#EBF1EC",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 14,
    width: "100%",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#D3DDD5",
    marginBottom: 24,
    // Sombra sutil para el efecto elevado
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  registerIcon: {
    fontSize: 16,
    color: "#1D3D2A",
    fontWeight: "700",
    transform: [{ scale: 1.3 }],
  },
  registerText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#4A534E",
    letterSpacing: 0.8,
  },

  // Campos de texto de entrada
  inputWrapper: {
    width: "100%",
    position: "relative",
    marginBottom: 16,
  },
  input: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DCE1DA",
    borderRadius: 20,
    paddingVertical: 16,
    paddingLeft: 20,
    paddingRight: 50,
    fontSize: 15,
    color: "#13241C",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 3,
    elevation: 1,
  },
  inputIcon: {
    position: "absolute",
    right: 20,
    top: 18,
    fontSize: 18,
    color: "#A1A59C",
  },

  // Fila Recuérdame
  rememberRow: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 10,
    marginTop: 4,
    marginBottom: 24,
  },
  rememberText: {
    fontSize: 14,
    color: "#4A534E",
    fontWeight: "600",
  },

  // Links de recuperación
  forgotButton: {
    marginBottom: 32,
  },
  forgotText: {
    fontSize: 14,
    color: "#1D3D2A",
    fontWeight: "700",
    textDecorationLine: "underline",
  },

  // Botón Principal Acceder (Gris/Verde Oscuro del diseño deshabilitado/habilitado)
  loginButton: {
    backgroundColor: "#0A2A1A", // Color grisáceo/verde apagado de tu botón de acción
    width: "100%",
    paddingVertical: 18,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  // Botón Face ID
  faceIdButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 40,
  },
  faceIdIcon: {
    fontSize: 18,
    color: "#7EA849",
  },
  faceIdText: {
    fontSize: 15,
    color: "#4A534E",
    fontWeight: "700",
  },

  // Sello flotante de reclamos inferior derecho
  floatingBadge: {
    position: "absolute",
    bottom: 16,
    right: 16,
    backgroundColor: "#FFFFFF",
    width: 68,
    height: 68,
    borderRadius: 34,
    borderWidth: 2,
    borderColor: "#9BFF42", // Tu verde lima brillante característico
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  badgeLabel: {
    fontSize: 8,
    fontWeight: "800",
    color: "#1D3D2A",
    textAlign: "center",
    lineHeight: 9,
  },
  badgeIcon: {
    fontSize: 14,
    marginVertical: -1,
  },
});
