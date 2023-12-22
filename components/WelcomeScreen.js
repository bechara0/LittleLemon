import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView indicatorStyle={"white"}>
        <Text style={styles.title}>Welcome to Little Lemon</Text>
        <Text style={styles.content}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    fontSize: 54,
    textAlign: "center",
    marginVertical: 40,
    color: "white",
  },
  content: {
    fontSize: 42,
    textAlign: "center",
    color: "white",
    marginVertical: 16,
    paddingHorizontal: 10,
  },
});

export default WelcomeScreen;
