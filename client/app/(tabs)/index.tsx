import React, { useState } from "react";
import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [showDetails, setShowDetails] = useState(false);

  if (showDetails) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.detailHeader}>
          <Pressable
            onPress={() => setShowDetails(false)}
            style={styles.backButton}
            android_ripple={{ color: "#00000010" }}
          >
            <Text style={styles.backArrow}>←</Text>
          </Pressable>
          <Text style={styles.detailHeaderTitle}>Detalles de Ingresos</Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}
        >
          <View style={styles.transactionCard}>
            <View style={styles.transactionIcon}>
              <Text>💵</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.transactionTitle}>Depósito Mensual</Text>
              <Text style={styles.transactionDate}>12 Feb, 2026</Text>
            </View>
            <Text style={styles.transactionAmount}>+1.000 Bs</Text>
          </View>

          <View style={styles.transactionCard}>
            <View style={styles.transactionIcon}>
              <Text>🎁</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.transactionTitle}>Bono AhorroGo</Text>
              <Text style={styles.transactionDate}>10 Feb, 2026</Text>
            </View>
            <Text style={styles.transactionAmount}>+200 Bs</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <View style={styles.avatar} />
            <Text style={styles.logoText}>MercantilGo</Text>
          </View>

          {/* 🔔 + LINK PERFIL */}
          <View style={{ flexDirection: "row", alignItems: "center", gap: 14 }}>
            <Text style={styles.notification}>🔔</Text>

            <Link href="/user-info" asChild>
              <Pressable android_ripple={{ color: "#00000010" }}>
                <Text style={styles.profileLink}>Perfil</Text>
              </Pressable>
            </Link>
          </View>
        </View>

        {/* WELCOME */}
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Hola, Carlos 👋</Text>
          <Text style={styles.title}>Tu resumen diario</Text>
        </View>

        {/* BALANCE */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>SALDO DISPONIBLE</Text>
          <View style={styles.balanceRow}>
            <Text style={styles.balanceAmount}>5.420,00</Text>
            <Text style={styles.currency}>Bs</Text>
          </View>

          <View style={styles.actionsRow}>
            <Pressable style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>＋ Ahorrar</Text>
            </Pressable>
            <Pressable style={styles.secondaryButton}>
              <Text style={styles.secondaryButtonText}>💵 Transferir</Text>
            </Pressable>
          </View>
        </View>

        {/* SALDO BLOQUEADO */}
        <View style={styles.blockedCard}>
          <View style={styles.lockCircle}>
            <Text>🔒</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.blockedLabel}>SALDO BLOQUEADO</Text>
            <Text style={styles.blockedAmount}>2.000,00 Bs</Text>
          </View>
          <View style={styles.infoCircle}>
            <Text>i</Text>
          </View>
        </View>

        {/* META */}
        <View style={styles.goalCard}>
          <View style={styles.goalHeader}>
            <View>
              <Text style={styles.goalLabel}>META ACTUAL</Text>
              <Text style={styles.goalTitle}>PlayStation 5</Text>
            </View>
            <View>
              <Text style={styles.goalLabel}>PROGRESO</Text>
              <Text style={styles.goalProgress}>75%</Text>
            </View>
          </View>

          <View style={styles.progressBarBackground}>
            <View style={styles.progressBarFill} />
          </View>

          <View style={styles.progressValues}>
            <Text style={styles.progressMin}>0 Bs</Text>
            <Text style={styles.progressMax}>2.000 Bs</Text>
          </View>
        </View>

        {/* INGRESOS */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Ingresos Recientes</Text>

          <Pressable onPress={() => setShowDetails(true)}>
            <Text style={styles.seeAll}>Ver todos</Text>
          </Pressable>
        </View>

        <View style={styles.transactionCard}>
          <View style={styles.transactionIcon}>
            <Text>💵</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.transactionTitle}>Depósito Mensual</Text>
            <Text style={styles.transactionDate}>12 Feb, 2026</Text>
          </View>
          <Text style={styles.transactionAmount}>+1.000 Bs</Text>
        </View>

        <View style={styles.transactionCard}>
          <View style={styles.transactionIcon}>
            <Text>🎁</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.transactionTitle}>Bono AhorroGo</Text>
            <Text style={styles.transactionDate}>10 Feb, 2026</Text>
          </View>
          <Text style={styles.transactionAmount}>+200 Bs</Text>
        </View>

        {/* MENSAJE */}
        <View style={styles.messageCard}>
          <Text style={styles.messageText}>
            ¡Vas por buen camino, Carlos! Tu meta del PS5 está cada vez más cerca.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F6F2",
  },

  container: {
    padding: 20,
    paddingBottom: 40,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },

  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#A6F750",
  },

  logoText: {
    fontSize: 28,
    fontWeight: "800",
    color: "#0A2A1A",
  },

  notification: {
    fontSize: 22,
  },

  profileLink: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0A2A1A",
  },

  welcomeContainer: {
    marginBottom: 24,
  },

  welcomeText: {
    fontSize: 16,
    color: "#7B7B7B",
    marginBottom: 6,
  },

  title: {
    fontSize: 34,
    fontWeight: "800",
    color: "#0A2A1A",
  },

  balanceCard: {
    backgroundColor: "#0B3B22",
    borderRadius: 32,
    padding: 24,
    marginBottom: 20,
  },

  balanceLabel: {
    color: "#C7E6CF",
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 10,
  },

  balanceRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 24,
  },

  balanceAmount: {
    color: "white",
    fontSize: 52,
    fontWeight: "900",
  },

  currency: {
    color: "white",
    fontSize: 26,
    marginLeft: 8,
    marginBottom: 6,
  },

  actionsRow: {
    flexDirection: "row",
    gap: 12,
  },

  primaryButton: {
    flex: 1,
    backgroundColor: "#9AFF45",
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: "center",
  },

  primaryButtonText: {
    color: "#0A2A1A",
    fontWeight: "700",
    fontSize: 16,
  },

  secondaryButton: {
    flex: 1,
    backgroundColor: "#32563F",
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: "center",
  },

  secondaryButtonText: {
    color: "#D7E7DA",
    fontWeight: "600",
    fontSize: 16,
  },

  blockedCard: {
    backgroundColor: "#DDF4C8",
    borderRadius: 28,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 14,
  },

  lockCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#B5E97B",
    justifyContent: "center",
    alignItems: "center",
  },

  blockedLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: "#4A6D3B",
  },

  blockedAmount: {
    fontSize: 28,
    fontWeight: "800",
    color: "#0A2A1A",
  },

  infoCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#6B8E5E",
    justifyContent: "center",
    alignItems: "center",
  },

  goalCard: {
    backgroundColor: "#0B3B22",
    borderRadius: 32,
    padding: 24,
    marginBottom: 28,
  },

  goalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },

  goalLabel: {
    color: "#B8D8BF",
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 6,
  },

  goalTitle: {
    color: "white",
    fontSize: 30,
    fontWeight: "800",
  },

  goalProgress: {
    color: "white",
    fontSize: 30,
    fontWeight: "800",
    textAlign: "right",
  },

  progressBarBackground: {
    height: 14,
    borderRadius: 999,
    backgroundColor: "#44614D",
    overflow: "hidden",
    marginBottom: 12,
  },

  progressBarFill: {
    width: "75%",
    height: "100%",
    backgroundColor: "#9AFF45",
    borderRadius: 999,
  },

  progressValues: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  progressMin: {
    color: "#B8D8BF",
    fontWeight: "600",
  },

  progressMax: {
    color: "#B8D8BF",
    fontWeight: "600",
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  sectionTitle: {
    fontSize: 26,
    fontWeight: "800",
    color: "#0A2A1A",
  },

  seeAll: {
    color: "#7EA849",
    fontWeight: "700",
  },

  transactionCard: {
    backgroundColor: "white",
    borderRadius: 24,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
    gap: 14,
  },

  transactionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#EEF7E1",
    justifyContent: "center",
    alignItems: "center",
  },

  transactionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0A2A1A",
  },

  transactionDate: {
    color: "#8A8A8A",
    marginTop: 4,
  },

  transactionAmount: {
    fontSize: 22,
    fontWeight: "800",
    color: "#79BE2F",
  },

  messageCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 22,
    marginTop: 8,
    marginBottom: 28,
  },

  messageText: {
    textAlign: "center",
    color: "#777",
    fontStyle: "italic",
    lineHeight: 22,
  },

  detailHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#F5F6F2",
  },

  backButton: {
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 22,
    marginRight: 8,
  },

  backArrow: {
    fontSize: 28,
    color: "#0A2A1A",
    fontWeight: "700",
  },

  detailHeaderTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#0A2A1A",
  },
});