import { StyleSheet, Text, View } from "react-native";
import React from "react";

const RootLayout = () => {
  return (
    <View style={styles.container}>
      <Text>RootLayout</Text>
      <Text>RootLayout</Text>
      <Text>RootLayout</Text>
    </View>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "pink",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
