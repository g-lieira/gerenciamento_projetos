import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { View, Image, TouchableOpacity, Text, TextInput } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import {
  AntDesign,
} from "@expo/vector-icons";


import { styles } from "./style";
import estados from "./Estados_Campus";

export default function AdminAddQuadras({ navigation }) {
  const route = useRoute();
  

  const [texto, setTexto] = useState("");

  const handleChange = (event) => {
    setTexto(event.target.value);
  };

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(estados);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} title="Voltar">
          <AntDesign name="arrowleft" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Adicionar</Text>
      </View>

      <View style={styles.formBox}>
        <View style={styles.formItem}>
          <Text style={styles.formLabel}>Selecionar imagem</Text>
          <TouchableOpacity
            style={styles.addImage}
          >
            <AntDesign name="pluscircleo" size={25} color="black" />
          </TouchableOpacity>
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

        <View style={styles.formItem}>
            <View style={styles.formInfos}>
                <View style={styles.formSubItem}>
                    <Text style={styles.formLabel}>Estado</Text>
                        <DropDownPicker
                            style={styles.formDropBox}
                            placeholder="Selecione..."
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                        />
                </View>
                <View style={styles.formSubItem}>
                    <Text style={styles.formLabel}>Câmpus</Text>
                    <View style={styles.formInputInfos}>
                        <TextInput
                            placeholder="Nome do câmpus..."
                        />
                    </View>
                </View>
            </View>
        </View>

        <View style={styles.buttonBox}>
          <TouchableOpacity
            onPress={() => navigation.navigate("AdminAddSucesso")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Adicionar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
