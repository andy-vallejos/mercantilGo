import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Modal,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChallengesScreen() {
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [selectedType, setSelectedType] = useState("ahorro");

  const handleLaunchChallenge = () => {
    setCreateModalVisible(false);
    setTimeout(() => {
      setSuccessModalVisible(true);
    }, 400);
  };

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
            onPress={() => setCreateModalVisible(true)}
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

      {/* ==================== MODAL 1: CREAR DESAFÍO (SCROLLABLE) ==================== */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={createModalVisible}
        onRequestClose={() => setCreateModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalIndicatorRow}>
              <View style={styles.modalIndicator} />
            </View>

            <View style={styles.modalHeaderRow}>
              <Text style={styles.modalMainTitle}>Crear Nuevo Desafío</Text>
              <Pressable
                style={styles.closeButtonCircle}
                onPress={() => setCreateModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>✕</Text>
              </Pressable>
            </View>

            <Text style={styles.modalSubtitle}>
              Configura tu próximo reto financiero.
            </Text>

            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.modalScrollContent}
            >
              <Text style={styles.fieldLabel}>Buscar Amigo</Text>
              <View style={styles.searchBarBox}>
                <Text style={styles.searchIcon}>🔍</Text>
                <TextInput
                  placeholder="Nombre o @usuario"
                  placeholderTextColor="#A3A3A3"
                  style={styles.searchInput}
                />
              </View>

              <Text style={styles.fieldLabel}>Seleccionar Tipo de Desafío</Text>

              <View style={styles.gridContainer}>
                <Pressable
                  style={[
                    styles.gridCard,
                    selectedType === "ahorro" && styles.gridCardActiveGreen,
                  ]}
                  onPress={() => setSelectedType("ahorro")}
                >
                  <Text style={styles.gridCardIcon}>🐷</Text>
                  <Text style={styles.gridCardTitle}>DUELO DE AHORRO</Text>
                </Pressable>

                <Pressable
                  style={[
                    styles.gridCard,
                    selectedType === "racha" && styles.gridCardActiveGreen,
                  ]}
                  onPress={() => setSelectedType("racha")}
                >
                  <Text style={styles.gridCardIcon}>🔥</Text>
                  <Text style={styles.gridCardTitle}>DUELO DE RACHA</Text>
                </Pressable>
              </View>

              <View style={styles.gridContainer}>
                <Pressable
                  style={[
                    styles.gridCard,
                    selectedType === "meta" && styles.gridCardActiveGreen,
                  ]}
                  onPress={() => setSelectedType("meta")}
                >
                  <Text style={styles.gridCardIcon}>🏳️</Text>
                  <Text style={styles.gridCardTitle}>DUELO DE META</Text>
                </Pressable>

                <Pressable
                  style={[
                    styles.gridCard,
                    selectedType === "cooperativo" &&
                      styles.gridCardActiveGreen,
                  ]}
                  onPress={() => setSelectedType("cooperativo")}
                >
                  <Text style={styles.gridCardIcon}>👥</Text>
                  <Text style={styles.gridCardTitle}>DUELO COOPERATIVO</Text>
                </Pressable>
              </View>

              <Text style={styles.fieldLabel}>Duración</Text>
              <Pressable style={styles.durationCard}>
                <Text style={styles.durationIcon}>📅</Text>
                <View style={{ flex: 1 }}>
                  <Text style={styles.durationTitle}>Duración</Text>
                  <Text style={styles.durationSubtitle}>
                    7 días (recomendado)
                  </Text>
                </View>
                <Text style={styles.durationArrow}>›</Text>
              </Pressable>

              <Pressable
                style={styles.launchButton}
                onPress={handleLaunchChallenge}
                android_ripple={{ color: "#ffffff20" }}
              >
                <Text style={styles.launchButtonText}>Lanzar Desafío</Text>
              </Pressable>
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* ==================== MODAL 2: NOTIFICACIÓN / RECONOCIMIENTO ==================== */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={successModalVisible}
        onRequestClose={() => setSuccessModalVisible(false)}
      >
        <View style={styles.successOverlay}>
          <View style={styles.successCard}>
            <View style={styles.successRobotCircle}>
              <Text style={styles.successRobotIcon}>🤖</Text>
            </View>
            <Text style={styles.successStatusText}>reto enviado</Text>
            <View style={styles.successDivider} />
            <Text style={styles.successWaitingText}>Esperando respuesta</Text>

            <Pressable
              style={styles.successCloseButton}
              onPress={() => setSuccessModalVisible(false)}
              android_ripple={{ color: "#00000010" }}
            >
              <Text style={styles.successCloseButtonText}>Entendido</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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

  /* ==================== ESTILOS MODAL CREAR DESAFÍO ==================== */
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "flex-end",
  },
  modalContainer: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    maxHeight: "85%",
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  modalIndicatorRow: {
    alignItems: "center",
    paddingVertical: 12,
  },
  modalIndicator: {
    width: 40,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: "#C4C4C4",
  },
  modalHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },
  modalMainTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#0B3B22",
  },
  closeButtonCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#EAECE6",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButtonText: {
    fontSize: 14,
    color: "#72776E",
    fontWeight: "700",
  },
  modalSubtitle: {
    fontSize: 14,
    color: "#72776E",
    marginTop: 4,
    marginBottom: 16,
    fontWeight: "500",
  },
  modalScrollContent: {
    paddingBottom: 32,
  },
  fieldLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: "#13241C",
    marginTop: 16,
    marginBottom: 10,
    textTransform: "capitalize",
  },
  searchBarBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F9F6",
    borderRadius: 16,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#EAECE6",
    height: 52,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: "#13241C",
    fontWeight: "500",
  },
  gridContainer: {
    flexDirection: "row",
    gap: 14,
    marginBottom: 14,
  },
  gridCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#EAECE6",
    minHeight: 110,
  },
  gridCardActiveGreen: {
    borderColor: "#406B17",
    backgroundColor: "#F1F9EC",
    borderWidth: 2,
  },
  gridCardIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  gridCardTitle: {
    fontSize: 11,
    fontWeight: "700",
    color: "#4A534E",
    textAlign: "center",
    letterSpacing: 0.3,
  },
  durationCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#EAECE6",
    gap: 14,
    marginBottom: 28,
  },
  durationIcon: {
    fontSize: 20,
  },
  durationTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#13241C",
  },
  durationSubtitle: {
    fontSize: 13,
    color: "#72776E",
    marginTop: 2,
    fontWeight: "500",
  },
  durationArrow: {
    fontSize: 22,
    color: "#72776E",
  },
  launchButton: {
    backgroundColor: "#1D3D2A",
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  launchButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },

  /* ==================== ESTILOS MODAL ÉXITO (NOTIFICACIÓN) ==================== */
  successOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 36,
  },
  successCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    padding: 24,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
  },
  successRobotCircle: {
    width: 70,
    height: 70,
    borderRadius: 24,
    backgroundColor: "#EAECE6",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#D2D5CD",
  },
  successRobotIcon: {
    fontSize: 36,
  },
  successStatusText: {
    fontSize: 20,
    fontWeight: "800",
    color: "#406B17",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  successDivider: {
    height: 1,
    backgroundColor: "#EAECE6",
    width: "60%",
    marginVertical: 12,
  },
  successWaitingText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#72776E",
    marginBottom: 24,
  },
  successCloseButton: {
    backgroundColor: "#EAECE6",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 999,
    width: "100%",
    alignItems: "center",
  },
  successCloseButtonText: {
    color: "#13241C",
    fontSize: 14,
    fontWeight: "700",
  },
});
