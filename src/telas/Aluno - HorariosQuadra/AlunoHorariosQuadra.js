import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text, ScrollView } from "react-native";
import {
  AntDesign,
} from "@expo/vector-icons";

import { styles } from "./style";
import BannerQuadra from "./../../../assets/bannerQuadra.png";

export default function AlunoHorariosQuadra({ navigation }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

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
        <Text style={styles.nomeQuadraText}>
          QUADRA POLIESPORTIVA - CÂMPUS CP
        </Text>
      </View>

      <View style={styles.horariosDiponiveis}>
        <Text style={styles.horariosDiponiveisText}>Horários Disponíveis</Text>

        <View style={styles.datas}>
          <TouchableOpacity
            style={[
              styles.dataItem,
              selectedDate === "02/12" && { backgroundColor: "#FCE762" },
            ]}
            onPress={() => handleDateClick("02/12")}
          >
            <Text style={styles.dataText}>02/12</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.dataItem,
              selectedDate === "03/12" && { backgroundColor: "#FCE762" },
            ]}
            onPress={() => handleDateClick("03/12")}
          >
            <Text style={styles.dataText}>03/12</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.dataItem,
              selectedDate === "04/12" && { backgroundColor: "#FCE762" },
            ]}
            onPress={() => handleDateClick("04/12")}
          >
            <Text style={styles.dataText}>04/12</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.dataItem,
              selectedDate === "05/12" && { backgroundColor: "#FCE762" },
            ]}
            onPress={() => handleDateClick("05/12")}
          >
            <Text style={styles.dataText}>05/12</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.dataItem,
              selectedDate === "06/12" && { backgroundColor: "#FCE762" },
            ]}
            onPress={() => handleDateClick("06/12")}
          >
            <Text style={styles.dataText}>06/12</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.dataItem,
              selectedDate === "07/12" && { backgroundColor: "#FCE762" },
            ]}
            onPress={() => handleDateClick("07/12")}
          >
            <Text style={styles.dataText}>07/12</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.horarios} horizontal={true}>
          <TouchableOpacity
            style={[
              styles.timeItem,
              selectedTime === "10:00" && { backgroundColor: "#FCE762" },
            ]}
            onPress={() => handleTimeClick("10:00")}
          >
            <Text style={styles.dataText}>10:00</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.timeItem,
              selectedTime === "03/12" && { backgroundColor: "#FCE762" },
            ]}
            onPress={() => handleTimeClick("03/12")}
          >
            <Text style={styles.dataText}>03/12</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.timeItem,
              selectedTime === "04/12" && { backgroundColor: "#FCE762" },
            ]}
            onPress={() => handleTimeClick("04/12")}
          >
            <Text style={styles.dataText}>04/12</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.timeItem,
              selectedTime === "05/12" && { backgroundColor: "#FCE762" },
            ]}
            onPress={() => handleTimeClick("05/12")}
          >
            <Text style={styles.dataText}>05/12</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.timeItem,
              selectedTime === "06/12" && { backgroundColor: "#FCE762" },
            ]}
            onPress={() => handleTimeClick("06/12")}
          >
            <Text style={styles.dataText}>06/12</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.timeItem,
              selectedTime === "07/12" && { backgroundColor: "#FCE762" },
            ]}
            onPress={() => handleTimeClick("07/12")}
          >
            <Text style={styles.dataText}>07/12</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.buttonBox}>
        <TouchableOpacity 
          onPress={()=> navigation.navigate(
            "AlunoFormulario", 
            { date: selectedDate, time: selectedTime}
          )} 
          style={styles.button}>
          <Text style={styles.buttonText}>Preencher formulário</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
