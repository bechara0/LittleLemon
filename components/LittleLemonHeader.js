import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LittleLemonHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Little Lemon Restaurant</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    backgroundColor: "#F4CE14",
  },
  title: {
    padding: 30,
    fontSize: 30,
    color: "black",
  },
});
export default LittleLemonHeader;
