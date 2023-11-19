import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";

import {styles} from './style';
import Logo from "../../../assets/logo.png";

export default function Entrar({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Logo} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("EntrarEscolha")}
        title="Entrar"
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}