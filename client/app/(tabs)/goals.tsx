import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CONFIG = {
  colors: {
    primary: "#133C24",
    primaryLight: "#9BFF42",
    background: "#F8F9F6",
    white: "#FFFFFF",
    text: "#13241C",
    textLight: "#72776E",
    success: "#588B25",
    border: "#EAECE6",
  },
};

export default function GoalsScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <View style={styles.header}>
        <View style={styles.logoRow}>
          <Text style={styles.logoIcon}>📱</Text>
          <Text style={styles.logoText}>AhorroGo</Text>
        </View>
        <Text style={styles.notificationIcon}>🔔</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.mainTitle}>Tus Metas</Text>
          <Text style={styles.subtitle}>
            Estás ahorrando para lo que importa.
          </Text>
        </View>

        <View style={styles.mainCard}>
          <View style={styles.mainCardHeaderRow}>
            <Text style={styles.mainCardTagText}>META PRINCIPAL</Text>
            <View style={styles.mainCardPercentBadge}>
              <Text style={styles.mainCardPercentText}>75%</Text>
            </View>
          </View>

          <Text style={styles.mainCardTitle}>PLAY STATION 5</Text>

          <View style={styles.mainCardAmountRow}>
            <Text style={styles.mainCardAmount}>1.500</Text>
            <Text style={styles.mainCardCurrency}>Bs</Text>
            <Text style={styles.mainCardObjective}>Objetivo: 2.000 Bs</Text>
          </View>

          <View style={styles.mainCardProgressBg}>
            <View style={[styles.mainCardProgressFill, { width: "75%" }]} />
          </View>
        </View>

        <Text style={styles.sectionTitle}>Otras metas</Text>

        <View style={styles.subCard}>
          <View style={styles.subCardHeaderRow}>
            <View style={styles.subCardTitleRow}>
              <Text style={styles.subCardIcon}>✈️</Text>
              <Text style={styles.subCardTitle}>Viaje a la Playa</Text>
            </View>
            <Text style={styles.subCardPercentText}>40%</Text>
          </View>
          <View style={styles.subCardProgressBg}>
            <View style={[styles.subCardProgressFill, { width: "40%" }]} />
          </View>
          <View style={styles.subCardFooterRow}>
            <Text style={styles.subCardAmounts}>
              4.000 /{" "}
              <Text style={{ color: CONFIG.colors.textLight }}>10.000 Bs</Text>
            </Text>
            <Text style={styles.subCardRemaining}>Faltan 6.000 Bs</Text>
          </View>
        </View>

        <View style={styles.subCard}>
          <View style={styles.subCardHeaderRow}>
            <View style={styles.subCardTitleRow}>
              <Text style={styles.subCardIcon}>🛡️</Text>
              <Text style={styles.subCardTitle}>Fondo de Emergencia</Text>
            </View>
            <Text style={styles.subCardPercentText}>15%</Text>
          </View>
          <View style={styles.subCardProgressBg}>
            <View style={[styles.subCardProgressFill, { width: "15%" }]} />
          </View>
          <View style={styles.subCardFooterRow}>
            <Text style={styles.subCardAmounts}>
              750 /{" "}
              <Text style={{ color: CONFIG.colors.textLight }}>5.000 Bs</Text>
            </Text>
            <Text style={styles.subCardRemaining}>Faltan 4.250 Bs</Text>
          </View>
        </View>

        <View style={styles.gridContainer}>
          <View style={[styles.gridCard, { backgroundColor: "#E9F5DB" }]}>
            <Text style={styles.gridIcon}>📈</Text>
            <Text style={styles.gridTitle}>Proyección</Text>
            <Text style={styles.gridSubtitle}>Meta PS5 en 2 meses</Text>
          </View>

          <Pressable
            style={[
              styles.gridCard,
              { backgroundColor: CONFIG.colors.primary },
            ]}
            android_ripple={{ color: "#ffffff10" }}
          >
            <Text
              style={[styles.gridIcon, { color: CONFIG.colors.primaryLight }]}
            >
              ＋
            </Text>
            <Text style={[styles.gridTitle, { color: "white" }]}>
              Agregar Meta
            </Text>
            <Text
              style={[styles.gridSubtitle, { color: "rgba(255,255,255,0.6)" }]}
            >
              Crea un nuevo ahorro
            </Text>
          </Pressable>
        </View>

        <View style={styles.coachContainer}>
          <View style={styles.coachAvatarContainer}>
            <Text style={styles.coachAvatar}>🤖</Text>
          </View>
          <View style={styles.coachBubble}>
            <Text style={styles.coachMessageText}>
              "¡Vas por buen camino! Destinar solo 50 Bs extra esta semana te
              acercará un 2.5% más a tu PS5."
            </Text>
            <View style={styles.coachArrow} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: CONFIG.colors.background,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  logoIcon: {
    fontSize: 20,
  },
  logoText: {
    fontSize: 20,
    fontWeight: "800",
    color: CONFIG.colors.text,
  },
  notificationIcon: {
    fontSize: 20,
    color: CONFIG.colors.text,
  },
  scrollContainer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  titleContainer: {
    marginBottom: 20,
    marginTop: 8,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: CONFIG.colors.text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: CONFIG.colors.textLight,
    fontWeight: "500",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: CONFIG.colors.text,
    marginBottom: 14,
    marginTop: 8,
  },
  mainCard: {
    backgroundColor: CONFIG.colors.primary,
    borderRadius: 28,
    padding: 24,
    marginBottom: 24,
  },
  mainCardHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  mainCardTagText: {
    color: CONFIG.colors.primaryLight,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  mainCardPercentBadge: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  mainCardPercentText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
  mainCardTitle: {
    color: "white",
    fontSize: 26,
    fontWeight: "800",
    marginBottom: 14,
  },
  mainCardAmountRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 16,
  },
  mainCardAmount: {
    color: "white",
    fontSize: 36,
    fontWeight: "900",
  },
  mainCardCurrency: {
    color: "white",
    fontSize: 18,
    marginLeft: 4,
    marginRight: "auto",
    fontWeight: "600",
    bottom: 4,
  },
  mainCardObjective: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: 13,
    fontWeight: "500",
    bottom: 4,
  },
  mainCardProgressBg: {
    height: 12,
    borderRadius: 6,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    marginBottom: 0,
  },
  mainCardProgressFill: {
    height: "100%",
    backgroundColor: CONFIG.colors.primaryLight,
    borderRadius: 6,
  },
  subCard: {
    backgroundColor: CONFIG.colors.white,
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: CONFIG.colors.border,
    marginBottom: 12,
  },
  subCardHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  subCardTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  subCardIcon: {
    fontSize: 18,
  },
  subCardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: CONFIG.colors.text,
  },
  subCardPercentText: {
    fontSize: 13,
    fontWeight: "700",
    color: CONFIG.colors.success,
  },
  subCardProgressBg: {
    height: 8,
    borderRadius: 4,
    backgroundColor: CONFIG.colors.border,
    marginBottom: 10,
  },
  subCardProgressFill: {
    height: "100%",
    backgroundColor: CONFIG.colors.primary,
    borderRadius: 4,
  },
  subCardFooterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subCardAmounts: {
    fontSize: 13,
    fontWeight: "600",
    color: CONFIG.colors.text,
  },
  subCardRemaining: {
    fontSize: 13,
    color: CONFIG.colors.textLight,
    fontWeight: "500",
  },
  gridContainer: {
    flexDirection: "row",
    gap: 16,
    marginVertical: 12,
  },
  gridCard: {
    flex: 1,
    borderRadius: 24,
    padding: 16,
    minHeight: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  gridIcon: {
    fontSize: 22,
    marginBottom: 6,
    fontWeight: "700",
  },
  gridTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: CONFIG.colors.text,
    marginBottom: 2,
  },
  gridSubtitle: {
    fontSize: 12,
    color: CONFIG.colors.textLight,
    textAlign: "center",
    fontWeight: "500",
  },
  coachContainer: {
    alignItems: "center",
    marginTop: 16,
    marginBottom: 32,
    paddingHorizontal: 12,
  },
  coachAvatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: CONFIG.colors.border,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#D2D5CD",
  },
  coachAvatar: {
    fontSize: 32,
  },
  coachBubble: {
    backgroundColor: CONFIG.colors.border,
    borderRadius: 20,
    padding: 16,
    position: "relative",
  },
  coachMessageText: {
    color: CONFIG.colors.text,
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
    fontWeight: "500",
  },
  coachArrow: {
    position: "absolute",
    top: -8,
    left: "50%",
    marginLeft: -8,
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderLeftColor: "transparent",
    borderRightWidth: 8,
    borderRightColor: "transparent",
    borderBottomWidth: 8,
    borderBottomColor: CONFIG.colors.border,
  },
});
