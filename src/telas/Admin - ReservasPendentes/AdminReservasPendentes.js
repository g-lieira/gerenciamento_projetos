import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text, TextInput } from "react-native";
import {
  AntDesign,
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import Modal from "react-native-modal";

import { styles } from "./style";
import Logo from "./../../../assets/logo.png";
import iconNotCheck from "../../../assets/iconNotCheck.png";
import iconCheck from "../../../assets/iconCheck.png";

import "./style";

export default function AdminReservasPendentes({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isDenyModalVisible, setDenyModalVisible] = useState(false);
  const [isAnswerModalVisible, setAnswerModalVisible] = useState(false);
  

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleDenyModal = () => {
    setDenyModalVisible(!isDenyModalVisible);
  };

  const toggleAnswerModal = () => {
    setAnswerModalVisible(!isAnswerModalVisible);
  };

  const closeBothModals = () => {
    setDenyModalVisible(false);
    setAnswerModalVisible(false);
  };

  const [texto, setTexto] = useState("");

  const handleChange = (event) => {
    setTexto(event.target.value);
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
            onPress={() => navigation.navigate("AdminHome")}
            style={styles.modalContent}
          >
            <FontAwesome name="user-circle" size={24} color="black" />
            <Text style={styles.modalText}>Admin</Text>
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
        <Text style={styles.navHeaderText}>Reservas Solicitadas</Text>
      </View>

      <View style={styles.reservas}>
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
          </View>
          <View style={styles.responseRequest}>
            <TouchableOpacity onPress={toggleDenyModal} title="Fechar">
                <Image source={iconNotCheck} />
            </TouchableOpacity>
                <Image source={iconCheck} />
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
          </View>
          <View style={styles.responseRequest}>
            <TouchableOpacity onPress={toggleDenyModal} title="Fechar">
                <Image source={iconNotCheck} />
            </TouchableOpacity>
            <Modal
                animationIn={"fadeIn"}
                animationOut={"fadeOut"}
                style={styles.denyModalBox}
                isVisible={isDenyModalVisible}
                onBackdropPress={toggleDenyModal}
            >
                <View style={styles.denyModal}>
                    <TouchableOpacity
                        onPress={toggleDenyModal}
                        style={styles.closeModalContent}
                    >
                        <AntDesign name="closecircleo" size={25} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.denyModalContent}>
                        <Text style={styles.denyModalText}>Deseja cancelar a solicitação?</Text>
                        <Text>Deixe sua justificativa.</Text>
                        <View style={styles.formTextArea}>
                            <TextInput
                                placeholder="Escreva aqui..."
                                value={texto}
                                onChange={handleChange}
                            />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.denyModalContent}>
                        <TouchableOpacity
                            style={styles.button}
                        >
                            <Text onPress={toggleAnswerModal} style={styles.buttonText}>Enviar</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                    
                        <Modal
                            animationIn={"fadeIn"}
                            animationOut={"fadeOut"}
                            style={styles.answerModalBox}
                            isVisible={isAnswerModalVisible}
                            onBackdropPress={toggleAnswerModal}
                        >
                            <TouchableOpacity style={styles.answerModal}>
                                <Text style={styles.canceledText}>Solicitação cancelada com sucesso</Text>
                                <TouchableOpacity style={styles.button}>
                                    <Text onPress={closeBothModals} style={styles.buttonText}>Voltar</Text>
                                </TouchableOpacity>
                               
                            </TouchableOpacity>
                        </Modal>
                    
                </View>
            </Modal>
                
                <Image source={iconCheck} />
          </View>
        </View>
      </View>

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
  );
}

  
 