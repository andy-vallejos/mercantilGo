import React, { useState } from "react";
import { Link } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [showDetails, setShowDetails] = useState(false);
  const [showAhorrar, setShowAhorrar] = useState(false);
  const [showTransferir, setShowTransferir] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [amount, setAmount] = useState("200");

  if (showQR) {
    return (
      <SafeAreaView style={[styles.safeArea, { backgroundColor: "#F5F6F2" }]}>
        <View style={styles.transferHeaderContainer}>
          <View style={styles.transferHeaderTopRow}>
            <Pressable
              onPress={() => setShowQR(false)}
              style={styles.transferBackButton}
            >
              <Text style={styles.transferBackArrow}>←</Text>
            </Pressable>
            <View style={styles.transferMenuIcon}>
              <View style={styles.menuLine} />
              <View style={styles.menuLine} />
              <View style={styles.menuLine} />
            </View>
          </View>
          <Text style={styles.transferHeaderTitle}>QR</Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.container, styles.containerAhorrar]}
        >
          <Text style={styles.qrSectionLabel}>Cobrar QR</Text>
          <Pressable
            style={styles.transferSecondaryCard}
            android_ripple={{ color: "#00000010" }}
          >
            <View style={styles.transferIconCircleGray}>
              <Text style={styles.transferIconText}>㗊</Text>
            </View>
            <Text style={styles.transferCardText}>Solicitud de cobro QR</Text>
          </Pressable>

          <Text style={styles.qrSectionLabel}>Pagar QR</Text>
          <Pressable
            style={styles.transferMainCard}
            android_ripple={{ color: "#00000010" }}
          >
            <View style={styles.transferIconCircleGreen}>
              <Text style={styles.transferIconText}>🖼️</Text>
            </View>
            <Text style={styles.transferCardText}>
              Importar desde la galería
            </Text>
          </Pressable>

          <Pressable
            style={styles.transferSecondaryCard}
            android_ripple={{ color: "#00000010" }}
          >
            <View style={styles.transferIconCircleGray}>
              <Text style={styles.transferIconText}>📷</Text>
            </View>
            <Text style={styles.transferCardText}>Escanear con la cámara</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (showTransferir) {
    return (
      <SafeAreaView style={[styles.safeArea, { backgroundColor: "#F5F6F2" }]}>
        <View style={styles.transferHeaderContainer}>
          <View style={styles.transferHeaderTopRow}>
            <Pressable
              onPress={() => setShowTransferir(false)}
              style={styles.transferBackButton}
            >
              <Text style={styles.transferBackArrow}>←</Text>
            </Pressable>
            <View style={styles.transferMenuIcon}>
              <View style={styles.menuLine} />
              <View style={styles.menuLine} />
              <View style={styles.menuLine} />
            </View>
          </View>
          <Text style={styles.transferHeaderTitle}>Transferencias</Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.container, styles.containerAhorrar]}
        >
          <Pressable
            style={styles.transferMainCard}
            android_ripple={{ color: "#00000010" }}
          >
            <View style={styles.transferIconCircleGreen}>
              <Text style={styles.transferIconText}>⇄</Text>
            </View>
            <Text style={styles.transferCardText}>
              A cuentas propias o registradas
            </Text>
          </Pressable>

          <Pressable
            style={styles.transferSecondaryCard}
            android_ripple={{ color: "#00000010" }}
          >
            <View style={styles.transferIconCircleGray}>
              <Text style={styles.transferIconText}>＋</Text>
            </View>
            <Text style={styles.transferCardText}>A nuevo destinatario</Text>
          </Pressable>

          <View style={styles.transferLinkList}>
            <Pressable
              style={styles.transferLinkItem}
              android_ripple={{ color: "#00000005" }}
            >
              <Text style={styles.transferLinkText}>
                Transferencias recientes
              </Text>
              <View style={styles.transferArrowCircle}>
                <Text style={styles.transferArrowText}>›</Text>
              </View>
            </Pressable>

            <Pressable
              style={styles.transferLinkItem}
              android_ripple={{ color: "#00000005" }}
            >
              <Text style={styles.transferLinkText}>
                Transferencias agendadas
              </Text>
              <View style={styles.transferArrowCircle}>
                <Text style={styles.transferArrowText}>›</Text>
              </View>
            </Pressable>

            <Pressable
              style={styles.transferLinkItem}
              android_ripple={{ color: "#00000005" }}
            >
              <Text style={styles.transferLinkText}>
                Gestionar destinatarios
              </Text>
              <View style={styles.transferArrowCircle}>
                <Text style={styles.transferArrowText}>›</Text>
              </View>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (showAhorrar) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.detailHeader}>
          <Pressable
            onPress={() => setShowAhorrar(false)}
            style={styles.backButton}
            android_ripple={{ color: "#00000010" }}
          >
            <Text style={styles.backArrow}>←</Text>
          </Pressable>
          <Text style={styles.detailHeaderTitle}>Destinar Fondos</Text>
          <View
            style={[
              styles.avatar,
              { width: 32, height: 32, borderRadius: 16, marginLeft: "auto" },
            ]}
          />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.container, styles.containerAhorrar]}
        >
          <View style={styles.bubbleCardAhorrar}>
            <Text style={styles.mascotPlaceholderAhorrar}>🤖</Text>
            <Text style={styles.bubbleTextAhorrar}>
              "¡Casi lo logras! Destinar un poco más hoy te acercará 3 días
              antes a tu meta."
            </Text>
          </View>

          <View style={styles.goalCardActive}>
            <View style={styles.goalHeaderActive}>
              <View>
                <Text style={styles.goalLabelActive}>META ACTIVA</Text>
                <Text style={styles.goalTitleActive}>Play Station 5</Text>
              </View>
              <Text style={styles.gameIconActive}>🎮</Text>
            </View>
            <View style={styles.balanceRowActive}>
              <Text style={styles.balanceAmountActive}>3.750</Text>
              <Text style={styles.currencyActive}>Bs</Text>
              <Text style={styles.percentageActive}>75%</Text>
            </View>
            <View style={styles.progressBarBackgroundActive}>
              <View style={styles.progressBarFillActive} />
            </View>
            <Text style={styles.remainingTextActive}>
              Faltan 1.250 Bs para completar el objetivo.
            </Text>
          </View>

          <Text style={styles.inputLabelAhorrar}>
            ¿CUÁNTO QUIERES AHORRAR HOY?
          </Text>
          <View style={styles.inputBoxAhorrar}>
            <Text style={styles.inputCurrencyAhorrar}>Bs</Text>
            <TextInput
              style={styles.inputAhorrar}
              value={amount}
              onChangeText={setAmount}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.chipsRowAhorrar}>
            <Pressable
              style={[
                styles.chipAhorrar,
                amount === "50" && styles.chipActiveAhorrar,
              ]}
              onPress={() => setAmount("50")}
            >
              <Text
                style={[
                  styles.chipTextAhorrar,
                  amount === "50" && styles.chipTextActiveAhorrar,
                ]}
              >
                50 Bs
              </Text>
            </Pressable>
            <Pressable
              style={[
                styles.chipAhorrar,
                amount === "100" && styles.chipActiveAhorrar,
              ]}
              onPress={() => setAmount("100")}
            >
              <Text
                style={[
                  styles.chipTextAhorrar,
                  amount === "100" && styles.chipTextActiveAhorrar,
                ]}
              >
                100 Bs
              </Text>
            </Pressable>
            <Pressable
              style={[
                styles.chipAhorrar,
                amount === "200" && styles.chipActiveAhorrar,
              ]}
              onPress={() => setAmount("200")}
            >
              <Text
                style={[
                  styles.chipTextAhorrar,
                  amount === "200" && styles.chipTextActiveAhorrar,
                ]}
              >
                200 Bs
              </Text>
            </Pressable>
          </View>

          <Pressable style={styles.walletRowAhorrar}>
            <View style={styles.walletIconCircleAhorrar}>
              <Text>💼</Text>
            </View>
            <View>
              <Text style={styles.walletLabelAhorrar}>DEBITAR DESDE</Text>
              <Text style={styles.walletTitleAhorrar}>
                Mi Billetera Principal
              </Text>
            </View>
            <Text style={styles.walletArrowAhorrar}>›</Text>
          </Pressable>

          <Pressable
            style={styles.mainSaveButtonAhorrar}
            android_ripple={{ color: "#00000010" }}
          >
            <Text style={styles.mainSaveButtonTextAhorrar}>＋ Ahorrar</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    );
  }

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
            <Pressable
              style={styles.primaryButton}
              onPress={() => setShowAhorrar(true)}
            >
              <Text style={styles.primaryButtonText}>＋ Ahorrar</Text>
            </Pressable>
            <Pressable
              style={styles.secondaryButton}
              onPress={() => setShowTransferir(true)}
            >
              <Text style={styles.secondaryButtonText}>💵 Transferir</Text>
            </Pressable>
            <Pressable style={styles.qrButton} onPress={() => setShowQR(true)}>
              <Text style={styles.qrButtonText}>㗊 QR</Text>
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
            ¡Vas por buen camino, Carlos! Tu meta del PS5 está cada vez más
            cerca.
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
  containerAhorrar: {
    paddingBottom: 110,
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
    gap: 8,
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
    fontSize: 14,
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
    fontSize: 14,
  },
  qrButton: {
    flex: 1,
    backgroundColor: "#32563F",
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: "center",
  },
  qrButtonText: {
    color: "#D7E7DA",
    fontWeight: "600",
    fontSize: 14,
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
  bubbleCardAhorrar: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    borderWidth: 1,
    borderColor: "#EAECE6",
    marginBottom: 20,
  },
  mascotPlaceholderAhorrar: {
    fontSize: 28,
  },
  bubbleTextAhorrar: {
    flex: 1,
    color: "#7B7B7B",
    fontSize: 14,
    fontStyle: "italic",
    lineHeight: 18,
  },
  goalCardActive: {
    backgroundColor: "#0B3B22",
    borderRadius: 32,
    padding: 24,
    marginBottom: 24,
  },
  goalHeaderActive: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  goalLabelActive: {
    color: "#B8D8BF",
    fontSize: 11,
    fontWeight: "700",
  },
  goalTitleActive: {
    color: "white",
    fontSize: 28,
    fontWeight: "800",
    marginTop: 4,
  },
  gameIconActive: {
    fontSize: 26,
  },
  balanceRowActive: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 14,
    marginBottom: 12,
  },
  balanceAmountActive: {
    color: "white",
    fontSize: 44,
    fontWeight: "900",
  },
  currencyActive: {
    color: "white",
    fontSize: 24,
    marginLeft: 6,
    marginBottom: 4,
    fontWeight: "700",
  },
  percentageActive: {
    color: "#B8D8BF",
    fontSize: 14,
    marginLeft: "auto",
    marginBottom: 6,
    fontWeight: "600",
  },
  progressBarBackgroundActive: {
    height: 12,
    borderRadius: 999,
    backgroundColor: "#44614D",
    overflow: "hidden",
    marginBottom: 14,
  },
  progressBarFillActive: {
    width: "75%",
    height: "100%",
    backgroundColor: "#9AFF45",
    borderRadius: 999,
  },
  remainingTextActive: {
    color: "#B8D8BF",
    fontSize: 13,
    fontWeight: "500",
  },
  inputLabelAhorrar: {
    fontSize: 12,
    fontWeight: "700",
    color: "#4A6D3B",
    textAlign: "center",
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  inputBoxAhorrar: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#EAECE6",
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  inputCurrencyAhorrar: {
    fontSize: 32,
    fontWeight: "800",
    color: "#0A2A1A",
    marginRight: 8,
  },
  inputAhorrar: {
    fontSize: 32,
    fontWeight: "800",
    color: "#0A2A1A",
    minWidth: 80,
  },
  chipsRowAhorrar: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 24,
  },
  chipAhorrar: {
    backgroundColor: "#EAECE6",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 999,
  },
  chipActiveAhorrar: {
    backgroundColor: "#9AFF45",
    borderWidth: 1,
    borderColor: "#0A2A1A",
  },
  chipTextAhorrar: {
    fontSize: 15,
    fontWeight: "700",
    color: "#7B7B7B",
  },
  chipTextActiveAhorrar: {
    color: "#0A2A1A",
  },
  walletRowAhorrar: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#EAECE6",
    marginBottom: 28,
  },
  walletIconCircleAhorrar: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#F5F6F2",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  walletLabelAhorrar: {
    fontSize: 10,
    fontWeight: "700",
    color: "#8A8A8A",
  },
  walletTitleAhorrar: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0A2A1A",
    marginTop: 2,
  },
  walletArrowAhorrar: {
    fontSize: 22,
    color: "#7B7B7B",
    marginLeft: "auto",
  },
  mainSaveButtonAhorrar: {
    backgroundColor: "#9AFF45",
    borderRadius: 24,
    paddingVertical: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  mainSaveButtonTextAhorrar: {
    color: "#0A2A1A",
    fontSize: 18,
    fontWeight: "800",
  },
  transferHeaderContainer: {
    backgroundColor: "#0B3B22",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 30,
  },
  transferHeaderTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  transferBackButton: {
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 22,
  },
  transferBackArrow: {
    fontSize: 28,
    color: "white",
    fontWeight: "700",
  },
  transferMenuIcon: {
    width: 24,
    height: 18,
    justifyContent: "space-between",
  },
  menuLine: {
    height: 3,
    backgroundColor: "white",
    borderRadius: 2,
    width: "100%",
  },
  transferHeaderTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "white",
    marginLeft: 4,
  },
  transferMainCard: {
    backgroundColor: "#DDF4C8",
    borderRadius: 24,
    padding: 22,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    gap: 16,
    marginTop: 10,
  },
  transferSecondaryCard: {
    backgroundColor: "#EAECE6",
    borderRadius: 24,
    padding: 22,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    gap: 16,
  },
  transferIconCircleGreen: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#32563F",
    justifyContent: "center",
    alignItems: "center",
  },
  transferIconCircleGray: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#32563F",
    justifyContent: "center",
    alignItems: "center",
  },
  transferIconText: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
  transferCardText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0A2A1A",
    flex: 1,
  },
  transferLinkList: {
    marginTop: 8,
  },
  transferLinkItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E4DE",
  },
  transferLinkText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0A2A1A",
  },
  transferArrowCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#0A2A1A",
    justifyContent: "center",
    alignItems: "center",
  },
  transferArrowText: {
    fontSize: 20,
    color: "#0A2A1A",
    fontWeight: "600",
    marginTop: -2,
  },
  qrSectionLabel: {
    fontSize: 18,
    fontWeight: "800",
    color: "#0A2A1A",
    marginTop: 14,
    marginBottom: 10,
  },
});
