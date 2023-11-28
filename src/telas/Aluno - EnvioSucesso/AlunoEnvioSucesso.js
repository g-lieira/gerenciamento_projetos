import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import {
  AntDesign
} from "@expo/vector-icons";

import { styles } from "./style";

export default function AlunoEnvioSucesso({ navigation }) {
  return (
    <View style={styles.container}>
      <AntDesign name="checkcircleo" size={250} color="#FFF848" />
      <Text style={styles.textAviso}>Solicitação realizada com sucesso!</Text>
      <TouchableOpacity onPress={() => navigation.navigate("AlunoHorariosQuadra")} style={styles.buttonBox}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
