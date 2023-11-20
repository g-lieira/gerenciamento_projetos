import React from "react";
import { View, Image, TouchableOpacity, TextInput, Text } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

import { styles } from "./style";
import Logo from "./../../../assets/logo.png";

export default function AlunoHome({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} style={styles.logo} />
        <TouchableOpacity onPress={() => navigation.goBack()} title="Voltar">
          <AntDesign name="setting" size={32} color="#FCE762" />
        </TouchableOpacity>
      </View>

      <View style={styles.local}>
        <Ionicons name="ios-location-sharp" size={24} color="#9B9D99" />
        <Text style={styles.text}>Cornélio Procópio, Paraná</Text>
      </View>
    </View>
  );
}
