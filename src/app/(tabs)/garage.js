import { View, Text, StyleSheet } from "react-native";

export default function PlaceholderScreen() {
  return (
    <View style={styles.container}>
      <Text>Écran en construction</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});