import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import {
  AntDesign,
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import Modal from "react-native-modal";

import { styles } from "./style";
import BannerQuadra from "./../../../assets/bannerQuadra.png";

import "./style";

export default function AlunoHorariosQuadra({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} title="Voltar">
          <AntDesign name="arrowleft" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.bannerQuadra}>
        <Image style={styles.bannerQuadraImg} source={BannerQuadra} />
      </View>

      <View style={styles.nomeQuadra}>
        <Text style={styles.nomeQuadraText}>QUADRA POLIESPORTIVA - CÂMPUS CP</Text>
      </View>
    </View>
  );
}
