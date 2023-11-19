import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";

import {styles} from './style';
import Logo from "../../../assets/logo.png";

export default function EntrarEscolha({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={Logo} />
      <Text style={styles.smallText}>Entrar como:</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Regulamento")}
        title="Aluno"
      >
        <Text style={styles.buttonText}>Aluno</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Regulamento")}
        title="Administrador"
      >
        <Text style={styles.buttonText}>Administrador</Text>
      </TouchableOpacity>
    </View>
  );
}