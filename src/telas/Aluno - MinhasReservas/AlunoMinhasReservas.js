import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import {
  AntDesign,
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Modal from "react-native-modal";

import { styles } from "./style";
import Logo from "./../../../assets/logo.png";

import "./style";

export default function AlunoMinhasReservas({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
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

      <View style={styles.navHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()} title="Voltar">
          <AntDesign name="arrowleft" size={30} color="#7D7E7B" />
        </TouchableOpacity>
        <Text style={styles.navHeaderText}>Reservas</Text>
      </View>

      <View style={styles.reservasBox}>
        <View>
          <Text style={styles.quadraName}>
            Quadra Poliesportiva - Câmpus CP
          </Text>
        </View>

        <View style={styles.quadraInfos}>
          <View style={styles.quadraDate}>
            <View style={styles.quadraDateItem}>
              <MaterialCommunityIcons
                name="calendar-month-outline"
                size={30}
                color="#292D32"
              />
              <Text style={styles.quadraDateText}>02/12</Text>
            </View>
            <View style={styles.quadraDateItem}>
              <AntDesign name="clockcircleo" size={25} color="black" />
              <Text style={styles.quadraDateText}>10:00</Text>
            </View>
          </View>
          <View>
            <Text style={styles.statusReservado}>Reservado</Text>
          </View>
        </View>
      </View>

      <View style={styles.reservasBox}>
        <View>
          <Text style={styles.quadraName}>
            Quadra Poliesportiva - Câmpus CP
          </Text>
        </View>

        <View style={styles.quadraInfos}>
          <View style={styles.quadraDate}>
            <View style={styles.quadraDateItem}>
              <MaterialCommunityIcons
                name="calendar-month-outline"
                size={30}
                color="#292D32"
              />
              <Text style={styles.quadraDateText}>04/12</Text>
            </View>
            <View style={styles.quadraDateItem}>
              <AntDesign name="clockcircleo" size={25} color="black" />
              <Text style={styles.quadraDateText}>14:00</Text>
            </View>
          </View>
          <View>
            <Text style={styles.statusSolicitado}>Solicitado</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
