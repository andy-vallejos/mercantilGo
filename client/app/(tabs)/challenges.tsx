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
  const [currentScreen, setCurrentScreen] = useState("challenges");
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [allChallengesVisible, setAllChallengesVisible] = useState(false);
  const [detailsModalVisible, setDetailsModalVisible] = useState(false);
  const [selectedType, setSelectedType] = useState("ahorro");
  const [selectedCategory, setSelectedCategory] = useState("Populares");

  const currentChallenger = {
    name: "Juanito",
    points: 500,
    type: "Duelo de Ahorro 🐷",
  };

  const handleLaunchChallenge = () => {
    setCreateModalVisible(false);
    setTimeout(() => {
      setSuccessModalVisible(true);
    }, 400);
  };

  if (currentScreen === "benefits") {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.benefitsHeaderNav}>
          <Pressable
            style={styles.backButtonCircle}
            onPress={() => setCurrentScreen("challenges")}
          >
            <Text style={styles.backButtonText}>←</Text>
          </Pressable>
          <Text style={styles.benefitsHeaderTitle}>Recompensas - AhorroGo</Text>
          <View style={{ width: 36 }} />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.benefitsContainer}
        >
          <View style={styles.userHeaderRow}>
            <View style={styles.userProfileBox}>
             
              <Text style={styles.userProfileName}>MercantilanGO</Text>
            </View>
            <Pressable style={styles.notificationButton}>
              <Text style={styles.notificationIcon}>🔔</Text>
            </Pressable>
          </View>

          <View style={styles.pointsDashboardCard}>
            <View style={styles.pointsLeftContent}>
              <Text style={styles.pointsCardLabel}>Mis Ahorros</Text>
              <Text style={styles.pointsCardValue}>1,240</Text>
              <Text style={styles.pointsCardSubtext}>Puntos Acumulados</Text>
            </View>
            <View style={styles.levelBadgeContainer}>
              <Text style={styles.levelBadgeIcon}>★</Text>
              <Text style={styles.levelBadgeText}>Nivel Oro</Text>
            </View>
          </View>

          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoriesScroll}
            >
              {["Populares", "Finanzas", "Estilo de Vida", "Tecnología"].map(
                (cat) => (
                  <Pressable
                    key={cat}
                    style={[
                      styles.categoryChip,
                      selectedCategory === cat && styles.categoryChipActive,
                    ]}
                    onPress={() => setSelectedCategory(cat)}
                  >
                    <Text
                      style={[
                        styles.categoryChipText,
                        selectedCategory === cat &&
                          styles.categoryChipTextActive,
                      ]}
                    >
                      {cat}
                    </Text>
                  </Pressable>
                ),
              )}
            </ScrollView>
          </View>

          <View style={styles.featuredRewardCard}>
            <View style={styles.featuredRewardLeft}>
              <View style={styles.featuredIconBox}>
                <Text style={styles.featuredIcon}>🚀</Text>
              </View>
              <View style={styles.featuredInfo}>
                <View style={styles.limitedBadge}>
                  <Text style={styles.limitedBadgeText}>LIMITADO</Text>
                </View>
                <Text style={styles.featuredTitle}>Doble de interés</Text>
                <Text style={styles.featuredSubtitle}>
                  Próximo mes en Meta 1
                </Text>
                <Text style={styles.featuredCost}>2,500 pts</Text>
              </View>
            </View>
            <Pressable style={styles.claimButtonDark}>
              <Text style={styles.claimButtonDarkText}>Canjear</Text>
            </Pressable>
          </View>

          <View style={styles.exploreHeaderRow}>
            <Text style={styles.exploreTitle}>Explorar Recompensas</Text>
            <Pressable style={styles.filterButton}>
              <Text style={styles.filterIcon}>🎛️</Text>
            </Pressable>
          </View>

          <View style={styles.rewardListItem}>
            <View style={styles.rewardListIconBox}>
              <Text style={styles.rewardListEmoji}>🛒</Text>
            </View>
            <View style={styles.rewardListInfo}>
              <Text style={styles.rewardListTitle}>Cupón de Descuento</Text>
              <Text style={styles.rewardListSubtitle}>
                15% en Supermercados
              </Text>
              <Text style={styles.rewardListCost}>800 pts</Text>
            </View>
            <Pressable style={styles.claimButtonLight}>
              <Text style={styles.claimButtonLightText}>Canjear</Text>
            </Pressable>
          </View>

          <View style={styles.rewardListItem}>
            <View style={styles.rewardListIconBox}>
              <Text style={styles.rewardListEmoji}>🎬</Text>
            </View>
            <View style={styles.rewardListInfo}>
              <Text style={styles.rewardListTitle}>Cine Center 2x1</Text>
              <Text style={styles.rewardListSubtitle}>50% de descuento</Text>
              <Text style={styles.rewardListCost}>1,200 pts</Text>
            </View>
            <Pressable style={styles.claimButtonLight}>
              <Text style={styles.claimButtonLightText}>Canjear</Text>
            </Pressable>
          </View>

          <View style={styles.rewardListItem}>
            <View style={styles.rewardListIconBox}>
              <Text style={styles.rewardListEmoji}>📱</Text>
            </View>
            <View style={styles.rewardListInfo}>
              <Text style={styles.rewardListTitle}>Datos Móviles</Text>
              <Text style={styles.rewardListSubtitle}>200 MB</Text>
              <Text style={styles.rewardListCost}>500 pts</Text>
            </View>
            <Pressable style={styles.claimButtonLight}>
              <Text style={styles.claimButtonLightText}>Canjear</Text>
            </Pressable>
          </View>

          <View style={styles.rewardListItem}>
            <View style={styles.rewardListIconBox}>
              <Text style={styles.rewardListEmoji}>🎵</Text>
            </View>
            <View style={styles.rewardListInfo}>
              <Text style={styles.rewardListTitle}>Spotify</Text>
              <Text style={styles.rewardListSubtitle}>20% de descuento</Text>
              <Text style={styles.rewardListCost}>2,000 pts</Text>
            </View>
            <Pressable style={styles.claimButtonLight}>
              <Text style={styles.claimButtonLightText}>Canjear</Text>
            </Pressable>
          </View>

          <View style={styles.mascotSpeechSection}>
            <View style={styles.mascotSpeechBubble}>
              <Text style={styles.mascotSpeechText}>
                ¡Sigue ahorrando para canjear más premios!
              </Text>
            </View>
            <View style={styles.mascotCircularContainer}>
              <Text style={styles.mascotFloatingEmoji}>🤖</Text>
            </View>
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
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.headerTitle}>Desafíos</Text>
          </View>
          <Pressable
            style={styles.benefitsButton}
            onPress={() => setCurrentScreen("benefits")}
            android_ripple={{ color: "#406B1720" }}
          >
            <Text style={styles.benefitsButtonText}>Beneficios 🌟</Text>
          </Pressable>
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
          <Pressable
            style={styles.newBadge}
            onPress={() => setAllChallengesVisible(true)}
          >
            <Text style={styles.newBadgeText}>Ver todos</Text>
          </Pressable>
        </View>

        <View style={styles.pendingCard}>
          <View style={styles.gameIconContainer}>
            <Text style={styles.gameIcon}>🎮</Text>
          </View>
          <View style={styles.pendingInfo}>
            <Text style={styles.pendingTitle}>
              {currentChallenger.name} te está desafiando
            </Text>
            <Text style={styles.pendingSubtitle}>
              Premio: {currentChallenger.points} puntos
            </Text>
          </View>
          <Pressable
            style={styles.detailsButton}
            onPress={() => setDetailsModalVisible(true)}
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={allChallengesVisible}
        onRequestClose={() => setAllChallengesVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalIndicatorRow}>
              <View style={styles.modalIndicator} />
            </View>

            <View style={styles.modalHeaderRow}>
              <Text style={styles.modalMainTitle}>Todos los Desafíos</Text>
              <Pressable
                style={styles.closeButtonCircle}
                onPress={() => setAllChallengesVisible(false)}
              >
                <Text style={styles.closeButtonText}>✕</Text>
              </Pressable>
            </View>
            <Text style={styles.modalSubtitle}>
              Tienes retos acumulados esperando tu acción.
            </Text>

            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.modalScrollContent}
            >
              <View style={styles.listChallengeRow}>
                <View
                  style={[
                    styles.gameIconContainer,
                    { backgroundColor: "#9BFF42" },
                  ]}
                >
                  <Text style={styles.gameIcon}>🎮</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.pendingTitle}>Juanito te desafió</Text>
                  <Text style={styles.pendingSubtitle}>
                    Premio: 500 pts • Duelo Ahorro
                  </Text>
                </View>
                <Pressable
                  style={styles.listActionButton}
                  onPress={() => {
                    setAllChallengesVisible(false);
                    setDetailsModalVisible(true);
                  }}
                >
                  <Text style={styles.listActionButtonText}>Ver</Text>
                </Pressable>
              </View>

              <View style={styles.listChallengeRow}>
                <View
                  style={[
                    styles.gameIconContainer,
                    { backgroundColor: "#EAECE6" },
                  ]}
                >
                  <Text style={styles.gameIcon}>🔥</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.pendingTitle}>Maria22 te desafió</Text>
                  <Text style={styles.pendingSubtitle}>
                    Premio: 350 pts • Duelo Racha
                  </Text>
                </View>
                <Pressable
                  style={styles.listActionButton}
                  onPress={() => {
                    setAllChallengesVisible(false);
                    setDetailsModalVisible(true);
                  }}
                >
                  <Text style={styles.listActionButtonText}>Ver</Text>
                </Pressable>
              </View>

              <View style={styles.listChallengeRow}>
                <View
                  style={[
                    styles.gameIconContainer,
                    { backgroundColor: "#EAECE6" },
                  ]}
                >
                  <Text style={styles.gameIcon}>🏳️</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.pendingTitle}>Carlos_Invert</Text>
                  <Text style={styles.pendingSubtitle}>
                    Premio: 1,000 pts • Duelo Meta
                  </Text>
                </View>
                <Pressable
                  style={styles.listActionButton}
                  onPress={() => {
                    setAllChallengesVisible(false);
                    setDetailsModalVisible(true);
                  }}
                >
                  <Text style={styles.listActionButtonText}>Ver</Text>
                </Pressable>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent={true}
        visible={detailsModalVisible}
        onRequestClose={() => setDetailsModalVisible(false)}
      >
        <View style={styles.successOverlay}>
          <View style={styles.detailsCard}>
            <View style={styles.detailsHeaderContainer}>
              <View style={styles.detailsAvatarCircle}>
                <Text style={styles.detailsAvatarText}>⚔️</Text>
              </View>
              <Text style={styles.detailsMainTitle}>¡Nuevo Reto Recibido!</Text>
              <Text style={styles.detailsDescription}>
                <Text style={{ fontWeight: "800", color: "#13241C" }}>
                  {currentChallenger.name}
                </Text>{" "}
                quiere medir sus hábitos financieros contigo.
              </Text>
            </View>

            <View style={styles.detailsInfoBox}>
              <View style={styles.detailsInfoItem}>
                <Text style={styles.detailsInfoLabel}>Modalidad</Text>
                <Text style={styles.detailsInfoValue}>
                  {currentChallenger.type}
                </Text>
              </View>
              <View style={[styles.detailsInfoItem, { borderBottomWidth: 0 }]}>
                <Text style={styles.detailsInfoLabel}>Recompensa</Text>
                <Text
                  style={[
                    styles.detailsInfoValue,
                    { color: "#406B17", fontWeight: "800" },
                  ]}
                >
                  💎 {currentChallenger.points} Puntos
                </Text>
              </View>
            </View>

            <View style={styles.detailsActionRow}>
              <Pressable
                style={styles.declineButton}
                onPress={() => setDetailsModalVisible(false)}
                android_ripple={{ color: "#FF000010" }}
              >
                <Text style={styles.declineButtonText}>Denegar</Text>
              </Pressable>

              <Pressable
                style={styles.acceptButton}
                onPress={() => setDetailsModalVisible(false)}
                android_ripple={{ color: "#ffffff20" }}
              >
                <Text style={styles.acceptButtonText}>Aceptar</Text>
              </Pressable>
            </View>
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
  benefitsButton: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 99,
    borderWidth: 1,
    borderColor: "#EAECE6",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  benefitsButtonText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#406B17",
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
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  newBadgeText: {
    fontSize: 11,
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
  listChallengeRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#EAECE6",
  },
  listActionButton: {
    backgroundColor: "#406B17",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 10,
  },
  listActionButtonText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
  },
  detailsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    padding: 24,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
  },
  detailsHeaderContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  detailsAvatarCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#F1F9EC",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#406B1730",
  },
  detailsAvatarText: {
    fontSize: 24,
  },
  detailsMainTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#13241C",
    marginBottom: 6,
  },
  detailsDescription: {
    fontSize: 14,
    color: "#72776E",
    textAlign: "center",
    lineHeight: 18,
    paddingHorizontal: 10,
  },
  detailsInfoBox: {
    backgroundColor: "#F8F9F6",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: "#EAECE6",
    marginBottom: 24,
  },
  detailsInfoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#EAECE6",
  },
  detailsInfoLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#72776E",
  },
  detailsInfoValue: {
    fontSize: 14,
    fontWeight: "700",
    color: "#13241C",
  },
  detailsActionRow: {
    flexDirection: "row",
    gap: 12,
  },
  declineButton: {
    flex: 1,
    backgroundColor: "#F4F5F1",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E2E5DE",
  },
  declineButtonText: {
    color: "#BD2A2A",
    fontSize: 15,
    fontWeight: "700",
  },
  acceptButton: {
    flex: 1,
    backgroundColor: "#1D3D2A",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  acceptButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },

  benefitsHeaderNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#EAECE6",
    backgroundColor: "#FFFFFF",
  },
  backButtonCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F1F3EE",
    alignItems: "center",
    justifyContent: "center",
  },
  backButtonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#13241C",
  },
  benefitsHeaderTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#13241C",
  },
  benefitsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    backgroundColor: "#F8F9F6",
  },
  userHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 16,
  },
  userProfileBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  userAvatarFallback: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#E2E5DE",
    alignItems: "center",
    justifyContent: "center",
  },
  userAvatarIcon: {
    fontSize: 14,
  },
  userProfileName: {
    fontSize: 15,
    fontWeight: "700",
    color: "#13241C",
  },
  notificationButton: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  notificationIcon: {
    fontSize: 18,
  },
  pointsDashboardCard: {
    backgroundColor: "#163522",
    borderRadius: 24,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  pointsLeftContent: {
    flex: 1,
  },
  pointsCardLabel: {
    fontSize: 11,
    color: "#9BFF42",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  pointsCardValue: {
    fontSize: 32,
    fontWeight: "800",
    color: "#FFFFFF",
    marginVertical: 2,
  },
  pointsCardSubtext: {
    fontSize: 12,
    color: "#EAECE6",
    opacity: 0.8,
  },
  levelBadgeContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#9BFF42",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 99,
    gap: 4,
  },
  levelBadgeIcon: {
    fontSize: 12,
    color: "#163522",
  },
  levelBadgeText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#163522",
  },
  categoriesScroll: {
    gap: 8,
    marginBottom: 24,
  },
  categoryChip: {
    backgroundColor: "#EAECE6",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 99,
    marginRight: 8,
  },
  categoryChipActive: {
    backgroundColor: "#9BFF42",
  },
  categoryChipText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#4A534E",
  },
  categoryChipTextActive: {
    color: "#13241C",
    fontWeight: "700",
  },
  featuredRewardCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 16,
    borderWidth: 1,
    borderColor: "#EAECE6",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  featuredRewardLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 12,
  },
  featuredIconBox: {
    width: 64,
    height: 64,
    borderRadius: 16,
    backgroundColor: "#F1F9EC",
    alignItems: "center",
    justifyContent: "center",
  },
  featuredIcon: {
    fontSize: 28,
  },
  featuredInfo: {
    flex: 1,
  },
  limitedBadge: {
    backgroundColor: "#FFEBEB",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: "flex-start",
    marginBottom: 4,
  },
  limitedBadgeText: {
    fontSize: 9,
    fontWeight: "800",
    color: "#FF4D4D",
  },
  featuredTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#13241C",
  },
  featuredSubtitle: {
    fontSize: 12,
    color: "#72776E",
    marginTop: 1,
  },
  featuredCost: {
    fontSize: 13,
    fontWeight: "700",
    color: "#406B17",
    marginTop: 4,
  },
  claimButtonDark: {
    backgroundColor: "#163522",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
  },
  claimButtonDarkText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
  },
  exploreHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  exploreTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#13241C",
  },
  filterButton: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  filterIcon: {
    fontSize: 16,
    color: "#72776E",
  },
  rewardListItem: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#EAECE6",
    marginBottom: 12,
  },
  rewardListIconBox: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: "#F8F9F6",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  rewardListEmoji: {
    fontSize: 22,
  },
  rewardListInfo: {
    flex: 1,
  },
  rewardListTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#13241C",
  },
  rewardListSubtitle: {
    fontSize: 12,
    color: "#72776E",
    marginTop: 1,
  },
  rewardListCost: {
    fontSize: 13,
    fontWeight: "700",
    color: "#406B17",
    marginTop: 3,
  },
  claimButtonLight: {
    backgroundColor: "#9BFF42",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
  },
  claimButtonLightText: {
    color: "#13241C",
    fontSize: 13,
    fontWeight: "700",
  },
  mascotSpeechSection: {
    alignItems: "center",
    marginTop: 20,
    gap: 10,
  },
  mascotSpeechBubble: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#EAECE6",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.02,
    shadowRadius: 4,
    elevation: 1,
  },
  mascotSpeechText: {
    fontSize: 12,
    color: "#4A534E",
    fontWeight: "600",
    textAlign: "center",
  },
  mascotCircularContainer: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: "#F1F9EC",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#9BFF42",
  },
  mascotFloatingEmoji: {
    fontSize: 28,
  },
});
