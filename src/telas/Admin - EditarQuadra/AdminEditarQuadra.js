import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { View, Image, TouchableOpacity, Text, TextInput } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import {
  AntDesign,
} from "@expo/vector-icons";

import BannerQuadra from "./../../../assets/bannerQuadra.png";

import { styles } from "./style";

export default function AdminAddQuadras({ navigation }) {
  const route = useRoute();
  

  const [texto, setTexto] = useState("");

  const handleChange = (event) => {
    setTexto(event.target.value);
  };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} title="Voltar">
          <AntDesign name="arrowleft" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Editar informações</Text>
      </View>

      <View style={styles.formBox}>
        <View style={styles.formItem}>
          <Text style={styles.formLabel}>Selecionar imagem</Text>
          <View
            style={styles.addImage}
          >
            <Image style={styles.bannerQuadraImg} source={BannerQuadra} />
            <AntDesign style={styles.editImage} name="edit" size={30} color="#FFF" />
          </View>
        </View>

        <View style={styles.formItem}>
          <Text style={styles.formLabel}>Título</Text>
          <View style={styles.formInput}>
            <TextInput
                placeholder="Insira um título..."
            />
          </View>
        </View>

        <View style={styles.formItem}>
          <Text style={styles.formLabel}>Horário</Text>
          <View style={styles.formInfos}>
            <View style={styles.formSubItem}>
              <Text style={styles.formSubLabel}>Início</Text>
              <View style={styles.formInputInfos}>
                <TextInput
                    placeholder="00:00"
                />
              </View>
            </View>
            <View style={styles.formSubItem}>
              <Text style={styles.formSubLabel}>Fim</Text>
              <View style={styles.formInputInfos}>
                <TextInput
                    placeholder="00:00"
                />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.buttonBox}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
