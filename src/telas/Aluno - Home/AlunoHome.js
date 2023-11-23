import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  Entypo,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import Modal from "react-native-modal";

import { styles } from "./style";
import Logo from "./../../../assets/logo.png";
import Banner from "../../../assets/banner.png";
import LogoUTF from "../../../assets/logoUTF.png";

export default function AlunoHome({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} style={styles.logo} />

        <TouchableOpacity onPress={toggleModal} title="Voltar">
          <AntDesign name="setting" size={32} color="#FCE762" />
        </TouchableOpacity>
      </View>

      <Modal
        animationIn={"fadeIn"}
        animationOut={"fadeOut"}
        style={styles.modalBox}
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
      >
        <View style={styles.modal}>
          <TouchableOpacity
            onPress={() => navigation.navigate("AlunoHome")}
            style={styles.modalContent}
          >
            <FontAwesome name="user-circle" size={24} color="black" />
            <Text style={styles.modalText}>Aluno</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Entrar")}
            style={styles.modalContent}
          >
            <MaterialIcons name="logout" size={28} color="black" />
            <Text style={styles.modalText}>Sair</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <View style={styles.local}>
        <Ionicons name="ios-location-sharp" size={24} color="#9B9D99" />
        <Text style={styles.text}>Cornélio Procópio, Paraná</Text>
      </View>

      <Image style={styles.banner} source={Banner} />

      <View style={styles.reservaBox}>
        <Text style={styles.title}>QUADRAS DISPONÍVEIS</Text>

        <TouchableOpacity style={styles.quadras}>
          <Image style={styles.logoUTF} source={LogoUTF} />
          <Text style={styles.quadraText}>Quadra Poliesportiva UTFPR-CP</Text>
        </TouchableOpacity>

        <Text style={{ color: "#F1F1F1" }}>
          ____________________________________________________________________
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("AlunoMinhasReservas")}
          style={styles.reservas}
        >
          <MaterialCommunityIcons
            name="calendar-month-outline"
            size={24}
            color="#292D32"
          />
          <Text style={styles.reservasText}>Minhas reservas</Text>
        </TouchableOpacity>

        <View style={styles.navBox}>
          <Text style={{ color: "#F1F1F1" }}>
            ____________________________________________________________________
          </Text>

          <View style={styles.navButton}>
            <TouchableOpacity
              style={styles.navButtonBox}
              onPress={() => navigation.navigate("Regulamento")}
            >
              <Text style={styles.navButtonText}>Regulamento</Text>
            </TouchableOpacity>
            <Entypo name="dot-single" size={24} color="#FFDF12" />
            <TouchableOpacity
              style={styles.navButtonBox}
              onPress={() => navigation.navigate("Feedback")}
            >
              <Text style={styles.navButtonText}>Feedback</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </View>
  );
}
