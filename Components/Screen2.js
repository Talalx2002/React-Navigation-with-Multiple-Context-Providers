import React, { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import Context1 from "./Data.js";

export default function Screen2({ navigation }) {
  const context = React.useContext(Context1);

  const updateContext = () => {
    // Call the update methods from your context here
    context.setRegistration('FA20-BCS-015');
    context.setName('Taha Malik');
  };

  return (
    <View style={styles.container}>
      <Text>Name:</Text>
      <Text>{context.Name}</Text>
      <Text>Registration:</Text>
      <Text>{context.Registration}</Text>
      <Button title="Update" onPress={updateContext} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 8,
    width: 200,
    marginBottom: 10,
  },
});