import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LittleLemonHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Little Lemon</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 0.11,
    backgroundColor: "#F4CE14",
    alignItems: "center",
  },
  title: {
    padding: 19,
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
  },
});
export default LittleLemonHeader;
