import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";

const Template = ({ children }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#222f3e" />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: "#222f3e",
    flex: 1,
    alignItems: "center",
  },
});

export default Template;
