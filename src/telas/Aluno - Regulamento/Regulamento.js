import React from "react";
import { View, Image, TouchableOpacity, TextInput, Text } from "react-native";
import { AntDesign, Ionicons, MaterialCommunityIcons, Entypo  } from "@expo/vector-icons";

import { styles } from "./style";
import Logo from "./../../../assets/logo.png";

import "./style";

export default function Regulamento({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} style={styles.logo} />
        <TouchableOpacity onPress={() => navigation.goBack()} title="Voltar">
          <AntDesign name="setting" size={32} color="#FCE762" />
        </TouchableOpacity>
      </View>

      <View style={styles.navHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()} title="Voltar">
          <AntDesign name="arrowleft" size={30} color="#7D7E7B" />
        </TouchableOpacity>
        <Text style={styles.navHeaderText}>Regulamento</Text>
      </View>

      <Text style={styles.regulamentoBox}>
        O acesso à quadra poliesportiva da universidade está sujeito à 
        observância rigorosa de um conjunto de normas destinadas a 
        assegurar a segurança, organização e respeito entre os usuários. 
        A reserva antecipada é essencial, e o descumprimento dos horários 
        designados pode resultar na perda da reserva, visando otimizar 
        a utilização do espaço. O uso de vestimenta esportiva e calçados 
        adequados é obrigatório, sendo proibido o acesso com calçados 
        sujos ou de sola preta que possam causar danos à quadra. Além 
        disso, é responsabilidade dos usuários manterem a quadra limpa, 
        sendo proibido o consumo de alimentos, exceto em recipientes com 
        tampa. Um comportamento ético e respeitoso é esperado, e quaisquer 
        formas de discriminação, violência ou comportamento inadequado são 
        estritamente proibidas. A administração da universidade reserva-se 
        ao direito de fiscalizar o cumprimento destas normas e aplicar 
        penalidades, como a suspensão temporária ou permanente do direito 
        de uso da quadra, visando garantir um ambiente seguro e propício à 
        prática esportiva e ao convívio saudável entre os membros da 
        comunidade universitária.
      </Text>
    </View>
  );
}
