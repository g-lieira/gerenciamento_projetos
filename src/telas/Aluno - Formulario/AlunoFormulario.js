import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { View, TouchableOpacity, Text, TextInput } from "react-native";
import {
  AntDesign,
} from "@expo/vector-icons";

import { styles } from "./style";

export default function AlunoFormulario({ navigation }) {
  const route = useRoute();
  const { date, time } = route.params;

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
        <Text style={styles.headerText}>Reservar</Text>
      </View>

      <View style={styles.formBox}>
        <View style={styles.formItem}>
          <Text style={styles.formLabel}>Nome do reservante</Text>
          <View style={styles.formInput}>
            <TextInput />
          </View>
        </View>

        <View style={styles.formItem}>
          <Text style={styles.formLabel}>Registro acadêmico</Text>
          <View style={styles.formInput}>
            <TextInput keyboardType="numeric" />
          </View>
        </View>

        <View style={styles.formItem}>
          <View style={styles.formHoraData}>
            <View style={styles.formItem}>
              <Text style={styles.formLabel}>Horário</Text>
              <View style={styles.formInputDataHora}>
                <TextInput value={time} />
              </View>
            </View>
            <View style={styles.formItem}>
              <Text style={styles.formLabel}>Dia</Text>
              <View style={styles.formInputDataHora}>
                <TextInput value={date} />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.formItem}>
          <Text style={styles.formLabel}>Justificativa</Text>
          <View style={styles.formTextArea}>
            <TextInput
              style={styles.formTextAreaInput}
              value={texto}
              onChange={handleChange}
            />
          </View>
        </View>

        <View style={styles.buttonBox}>
          <TouchableOpacity
            onPress={() => navigation.navigate("AlunoEnvioSucesso")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Solicitar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
