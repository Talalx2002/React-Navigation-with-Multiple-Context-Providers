import React, { useState, useContext } from "react";
import { Button, Text, View, StyleSheet,TextInput } from "react-native";
import  Context1  from "./Data.js";



export default function Screen1({ navigation }) {
  const Context = useContext(Context1);
  console.log(Context)
  return (
    <View style={styles.container}>
      <Text>Name:</Text>
      <TextInput placeholder="Enter your name" style={styles.input} value={Context.Name} onChangeText={Context.setName}/>
      <Text>Registration:</Text>
      <TextInput placeholder="Enter your Registration" style={styles.input}  value={Context.Registration} onChangeText={Context.setRegistration} />

      <Button
        title="Go to Screen2"
        onPress={() => navigation.navigate("Profile")}
      />

      <Button
        title="Go to Screen3"
        onPress={() => navigation.navigate("City")}
      />
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
