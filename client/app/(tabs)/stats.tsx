import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg"; // Asegúrate de tener react-native-svg instalado

const CONFIG = {
  colors: {
    primary: "#133C24", // Verde oscuro profundo de la tarjeta "Total Ahorrado"
    primaryLight: "#9BFF42", // Verde lima brillante de la tarjeta "Retiros" y barra activa
    background: "#F8F9F6", // Fondo general off-white
    white: "#FFFFFF",
    text: "#13241C", // Texto principal oscuro
    textLight: "#72776E", // Texto secundario grisáceo
    success: "#588B25", // Verde para la línea de ingresos
    expense: "#C1272D", // Rojo/marrón para la línea de egresos
    border: "#EAECE6", // Gris claro para bordes o fondos sutiles
  },
};

export default function StatsScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      {/* ==================== HEADER ==================== */}
      <View style={styles.header}>
        <View style={styles.logoRow}>
          <View style={styles.avatarMock} />
          <Text style={styles.logoText}>MercantilanGO</Text>
        </View>
        <Text style={styles.notificationIcon}>👤</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* ==================== ENCABEZADO DE TEXTO ==================== */}
        <View style={styles.titleContainer}>
          <Text style={styles.mainTitle}>Estadísticas de Ahorro</Text>
          <Text style={styles.subtitle}>
            Tu progreso financiero de los últimos 5 meses.
          </Text>
        </View>

        {/* ==================== GRÁFICO: FLUJO MENSUAL ==================== */}
        <View style={styles.chartCard}>
          <View style={styles.chartHeader}>
            <Text style={styles.chartTitle}>Flujo Mensual</Text>
            <View style={styles.legendRow}>
              <View style={styles.legendItem}>
                <View
                  style={[
                    styles.legendDot,
                    { backgroundColor: CONFIG.colors.success },
                  ]}
                />
                <Text style={styles.legendText}>Ingresos</Text>
              </View>
              <View style={styles.legendItem}>
                <View
                  style={[
                    styles.legendDot,
                    { backgroundColor: CONFIG.colors.expense },
                  ]}
                />
                <Text style={styles.legendText}>Egresos</Text>
              </View>
            </View>
          </View>

          {/* Gráfico Curvo de Líneas utilizando SVG */}
          <View style={styles.svgWrapper}>
            <Svg height="120" width="100%" viewBox="0 0 300 120">
              {/* Línea de Ingresos (Verde) */}
              <Path
                d="M 10 90 C 40 40, 70 100, 110 70 C 150 30, 200 40, 240 85 C 270 120, 285 20, 290 30"
                fill="transparent"
                stroke={CONFIG.colors.success}
                strokeWidth="3"
              />
              {/* Línea de Egresos (Roja) */}
              <Path
                d="M 10 105 C 40 60, 70 115, 110 90 C 150 50, 200 65, 240 100 C 270 130, 285 45, 290 60"
                fill="transparent"
                stroke={CONFIG.colors.expense}
                strokeWidth="3"
              />
            </Svg>
          </View>

          {/* Etiquetas del eje X */}
          <View style={styles.chartXAxis}>
            <Text style={styles.axisLabel}>Ene</Text>
            <Text style={styles.axisLabel}>Feb</Text>
            <Text style={styles.axisLabel}>Mar</Text>
            <Text style={styles.axisLabel}>Abr</Text>
            <Text style={styles.axisLabel}>May</Text>
          </View>
        </View>

        {/* ==================== TARJETAS DE INDICADORES (GRID) ==================== */}
        <View style={styles.indicatorGrid}>
          {/* Total Ahorrado */}
          <View
            style={[
              styles.indicatorCard,
              { backgroundColor: CONFIG.colors.primary },
            ]}
          >
            <Text
              style={[
                styles.indicatorLabel,
                { color: "rgba(255,255,255,0.6)" },
              ]}
            >
              TOTAL AHORRADO
            </Text>
            <Text style={[styles.indicatorValue, { color: "white" }]}>
              1.240
            </Text>
            <Text style={[styles.indicatorCurrency, { color: "white" }]}>
              Bs.
            </Text>
            <Text style={styles.indicatorTrendUp}>📈 +12%</Text>
          </View>

          {/* Retiros */}
          <View
            style={[
              styles.indicatorCard,
              { backgroundColor: CONFIG.colors.primaryLight },
            ]}
          >
            <Text
              style={[styles.indicatorLabel, { color: CONFIG.colors.primary }]}
            >
              RETIROS
            </Text>
            <Text
              style={[styles.indicatorValue, { color: CONFIG.colors.text }]}
            >
              320
            </Text>
            <Text
              style={[styles.indicatorCurrency, { color: CONFIG.colors.text }]}
            >
              Bs.
            </Text>
            <Text style={styles.indicatorTrendDown}>📉 -4%</Text>
          </View>
        </View>

        {/* ==================== CATEGORÍAS DE AHORRO ==================== */}
        <Text style={styles.sectionTitle}>Categorías de Ahorro</Text>

        {/* Categoría 1: PS5 */}
        <View style={styles.categoryRow}>
          <View style={styles.categoryIconBg}>
            <Text style={styles.categoryIcon}>🎮</Text>
          </View>
          <View style={styles.categoryData}>
            <View style={styles.categoryTextRow}>
              <Text style={styles.categoryName}>Play Station 5</Text>
              <Text style={styles.categoryPercent}>75%</Text>
            </View>
            <View style={styles.categoryProgressBg}>
              <View
                style={[
                  styles.categoryProgressFill,
                  { width: "75%", backgroundColor: CONFIG.colors.primaryLight },
                ]}
              />
            </View>
          </View>
        </View>

        {/* Categoría 2: Libros */}
        <View style={styles.categoryRow}>
          <View style={[styles.categoryIconBg, { backgroundColor: "#3D423A" }]}>
            <Text style={styles.categoryIcon}>📔</Text>
          </View>
          <View style={styles.categoryData}>
            <View style={styles.categoryTextRow}>
              <Text style={styles.categoryName}>Libros</Text>
              <Text style={styles.categoryPercent}>30%</Text>
            </View>
            <View style={styles.categoryProgressBg}>
              <View
                style={[
                  styles.categoryProgressFill,
                  { width: "30%", backgroundColor: CONFIG.colors.primary },
                ]}
              />
            </View>
          </View>
        </View>

        {/* ==================== TARJETA DE RECOMENDACIÓN IA INFERIOR ==================== */}
        <View style={styles.insightCard}>
          <View style={styles.insightTextContent}>
            <Text style={styles.insightTitle}>¡Vas por buen camino!</Text>
            <Text style={styles.insightBody}>
              Has ahorrado un 15% más que el mes pasado. ¡Sigue así!
            </Text>
          </View>
          <View style={styles.insightAvatarBg}>
            <Text style={styles.insightAvatarIcon}>🤖</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/* ==================== HOJA DE ESTILOS ==================== */
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
    gap: 10,
  },
  avatarMock: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: CONFIG.colors.primary,
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
    fontSize: 26,
    fontWeight: "800",
    color: CONFIG.colors.text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: CONFIG.colors.textLight,
    fontWeight: "500",
  },

  // Tarjeta de gráfico
  chartCard: {
    backgroundColor: CONFIG.colors.white,
    borderRadius: 24,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: CONFIG.colors.border,
  },
  chartHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: CONFIG.colors.text,
  },
  legendRow: {
    flexDirection: "row",
    gap: 12,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  legendText: {
    fontSize: 12,
    fontWeight: "600",
    color: CONFIG.colors.textLight,
  },
  svgWrapper: {
    height: 120,
    justifyContent: "center",
  },
  chartXAxis: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 4,
    marginTop: 10,
  },
  axisLabel: {
    fontSize: 12,
    color: CONFIG.colors.textLight,
    fontWeight: "600",
  },

  // Grid de Indicadores numéricos
  indicatorGrid: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 24,
  },
  indicatorCard: {
    flex: 1,
    borderRadius: 24,
    padding: 16,
    minHeight: 125,
  },
  indicatorLabel: {
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  indicatorValue: {
    fontSize: 32,
    fontWeight: "900",
    lineHeight: 34,
  },
  indicatorCurrency: {
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 8,
  },
  indicatorTrendUp: {
    color: CONFIG.colors.primaryLight,
    fontSize: 12,
    fontWeight: "700",
  },
  indicatorTrendDown: {
    color: CONFIG.colors.expense,
    fontSize: 12,
    fontWeight: "700",
  },

  // Categorías de ahorro listas
  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: CONFIG.colors.text,
    marginBottom: 16,
  },
  categoryRow: {
    backgroundColor: CONFIG.colors.white,
    borderRadius: 20,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: CONFIG.colors.border,
  },
  categoryIconBg: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: CONFIG.colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryIcon: {
    fontSize: 20,
  },
  categoryData: {
    flex: 1,
  },
  categoryTextRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 15,
    fontWeight: "700",
    color: CONFIG.colors.text,
  },
  categoryPercent: {
    fontSize: 12,
    fontWeight: "700",
    color: CONFIG.colors.text,
  },
  categoryProgressBg: {
    height: 8,
    borderRadius: 4,
    backgroundColor: CONFIG.colors.border,
    overflow: "hidden",
  },
  categoryProgressFill: {
    height: "100%",
    borderRadius: 4,
  },

  // Tarjeta de Recomendación Inteligente (Fondo verde claro suave)
  insightCard: {
    backgroundColor: "#F2F6EB",
    borderRadius: 24,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginTop: 12,
    marginBottom: 16,
  },
  insightTextContent: {
    flex: 1,
  },
  insightTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: CONFIG.colors.text,
    marginBottom: 4,
  },
  insightBody: {
    fontSize: 13,
    color: CONFIG.colors.textLight,
    lineHeight: 18,
    fontWeight: "500",
  },
  insightAvatarBg: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#D9E3CC",
    justifyContent: "center",
    alignItems: "center",
  },
  insightAvatarIcon: {
    fontSize: 26,
  },
});
