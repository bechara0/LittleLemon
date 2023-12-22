import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LittleLemonFooter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        All rights reserved by Little Lemon, 2022
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.06,
    backgroundColor: "#F4CE14",
    alignItems: "center",
  },
  title: {
    padding: 8,
    fontSize: 15,
    color: "black",
  },
});

export default LittleLemonFooter;
