import React from "react";
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChallengesScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.headerAvatar}>
              <Text style={styles.headerAvatarIcon}>🤖</Text>
            </View>
            <Text style={styles.headerTitle}>Desafíos</Text>
          </View>
          <View style={styles.fireCircle}>
            <Text style={styles.fireIcon}>🔥</Text>
          </View>
        </View>

        <View style={styles.progressSection}>
          <View style={styles.circularProgressContainer}>
            <View style={styles.outerCircle}>
              <View style={styles.innerCircle}>
                <Text style={styles.streakNumber}>84</Text>
                <Text style={styles.streakLabel}>DÍAS DE RACHA</Text>
                <View style={styles.pointsBadge}>
                  <Text style={styles.pointsText}>👥 1,240</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.levelBadge}>
            <Text style={styles.levelText}>Nivel: Oro</Text>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Desafíos Pendientes</Text>
          <View style={styles.newBadge}>
            <Text style={styles.newBadgeText}>Ver todos</Text>
          </View>
        </View>

        <View style={styles.pendingCard}>
          <View style={styles.gameIconContainer}>
            <Text style={styles.gameIcon}>🎮</Text>
          </View>
          <View style={styles.pendingInfo}>
            <Text style={styles.pendingTitle}>Juanito te está desafiando</Text>
            <Text style={styles.pendingSubtitle}>Premio: 500 puntos</Text>
          </View>
          <Pressable
            style={styles.detailsButton}
            android_ripple={{ color: "#ffffff20" }}
          >
            <Text style={styles.detailsButtonText}>Ver detalles</Text>
          </Pressable>
        </View>

        <View style={styles.modeHeader}>
          <Text style={styles.modeZap}>⚡</Text>
          <Text style={styles.modeTitle}>MODO DESAFÍO</Text>
        </View>

        <View style={styles.challengeBox}>
          <Text style={styles.challengeBoxText}>
            ¿Listo para un nuevo reto? Invita a tus amigos y compite por el
            ahorro.
          </Text>
          <Pressable
            style={styles.createButton}
            android_ripple={{ color: "#ffffff20" }}
          >
            <Text style={styles.createButtonText}>⊕ Crear Desafío</Text>
          </Pressable>
        </View>

        <View style={styles.bubbleSection}>
          <View style={styles.chatBubble}>
            <Text style={styles.chatBubbleText}>
              ¡Hola! Dale clic a 'Crear Desafío' para invitar a un amigo y ver
              quién ahorra más esta semana.
            </Text>
            <View style={styles.bubbleTail} />
          </View>
          <View style={styles.mascotPlaceholder}>
            <Text style={styles.mascotEmoji}>🤖</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8F9F6",
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#1D3D2A",
    justifyContent: "center",
    alignItems: "center",
  },
  headerAvatarIcon: {
    fontSize: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#13241C",
  },
  fireCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#EAECE6",
  },
  fireIcon: {
    fontSize: 16,
  },
  progressSection: {
    alignItems: "center",
    marginBottom: 30,
  },
  circularProgressContainer: {
    width: 190,
    height: 190,
    justifyContent: "center",
    alignItems: "center",
  },
  outerCircle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 12,
    borderColor: "#1D3D2A",
    borderTopColor: "#EAECE6",
    justifyContent: "center",
    alignItems: "center",
    transform: [{ rotate: "45deg" }],
  },
  innerCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#F8F9F6",
    justifyContent: "center",
    alignItems: "center",
    transform: [{ rotate: "-45deg" }],
  },
  streakNumber: {
    fontSize: 40,
    fontWeight: "800",
    color: "#13241C",
  },
  streakLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: "#72776E",
    letterSpacing: 0.5,
    marginVertical: 2,
  },
  pointsBadge: {
    backgroundColor: "#9BFF42",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginTop: 4,
  },
  pointsText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#13241C",
  },
  levelBadge: {
    backgroundColor: "#EAECE6",
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderRadius: 15,
    marginTop: 16,
  },
  levelText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#4A534E",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#13241C",
  },
  newBadge: {
    backgroundColor: "#9BFF42",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  newBadgeText: {
    fontSize: 9,
    fontWeight: "800",
    color: "#13241C",
  },
  pendingCard: {
    backgroundColor: "#F1F3EE",
    borderRadius: 20,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E2E5DE",
    marginBottom: 28,
  },
  gameIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#9BFF42",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  gameIcon: {
    fontSize: 20,
  },
  pendingInfo: {
    flex: 1,
  },
  pendingTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#13241C",
  },
  pendingSubtitle: {
    fontSize: 12,
    color: "#72776E",
    marginTop: 2,
  },
  detailsButton: {
    backgroundColor: "#406B17",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
  },
  detailsButtonText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
  },
  modeHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 14,
  },
  modeZap: {
    fontSize: 18,
    color: "#406B17",
  },
  modeTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#13241C",
    letterSpacing: 0.5,
  },
  challengeBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: "#EAECE6",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 20,
  },
  challengeBoxText: {
    fontSize: 14,
    color: "#4A534E",
    lineHeight: 20,
    textAlign: "left",
    marginBottom: 20,
  },
  createButton: {
    backgroundColor: "#406B17",
    width: "100%",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  createButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  bubbleSection: {
    alignItems: "flex-end",
    paddingRight: 20,
    marginTop: 10,
    position: "relative",
  },
  chatBubble: {
    backgroundColor: "#EAECE6",
    borderRadius: 16,
    padding: 14,
    maxWidth: "80%",
    marginRight: 60,
    position: "relative",
  },
  chatBubbleText: {
    fontSize: 12,
    color: "#4A534E",
    lineHeight: 16,
  },
  bubbleTail: {
    position: "absolute",
    bottom: 12,
    right: -8,
    width: 0,
    height: 0,
    borderTopWidth: 6,
    borderTopColor: "transparent",
    borderLeftWidth: 10,
    borderLeftColor: "#EAECE6",
    borderBottomWidth: 6,
    borderBottomColor: "transparent",
  },
  mascotPlaceholder: {
    position: "absolute",
    right: 0,
    bottom: -10,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  mascotEmoji: {
    fontSize: 40,
  },
});
