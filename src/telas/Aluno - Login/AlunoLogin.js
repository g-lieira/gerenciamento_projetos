import React from "react";
import { View, Image, TouchableOpacity, TextInput, Text } from "react-native";
import { AntDesign, EvilIcons } from "@expo/vector-icons";

import { styles } from "./style";
import Logo from "./../../../assets/logo.png";

export default function AlunoLogin({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} title="Voltar">
          <AntDesign name="arrowleft" size={32} color="#7D7E7B" />
        </TouchableOpacity>
        <Image source={Logo} />
      </View>

      <View style={styles.inputBox}>
        <View>
          <View style={styles.labelContainer}>
            <Text>RA</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput keyboardType="numeric" />
          </View>
        </View>

        <View>
          <View style={styles.labelContainer}>
            <Text>SENHA</Text>
          </View>
          <View style={styles.inputContainer}>
            <EvilIcons name="lock" size={24} color="black" />
            <TextInput secureTextEntry={true} placeholder="******" />
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("AlunoHome")}
            title="Aluno"
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
