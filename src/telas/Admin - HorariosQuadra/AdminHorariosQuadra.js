import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./style";
import BannerQuadra from "./../../../assets/bannerQuadra.png";

export default function AdminHorariosQuadra({ navigation }) {
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
        <TouchableOpacity onPress={() => navigation.navigate("AdminEditarQuadra")} title="Editar">
            <AntDesign name="edit" size={30} color="#fff" />
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
        <Text style={styles.horariosDiponiveisText}>HORÁRIOS DISPONÍVEIS</Text>

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
              selectedTime === "14:00" && { backgroundColor: "#FCE762" },
            ]}
            onPress={() => handleTimeClick("14:00")}
          >
            <Text style={styles.dataText}>14:00</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.timeItem,
              selectedTime === "15:00" && { backgroundColor: "#FCE762" },
            ]}
            onPress={() => handleTimeClick("15:00")}
          >
            <Text style={styles.dataText}>15:00</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.timeItem,
              selectedTime === "19:00" && { backgroundColor: "#FCE762" },
            ]}
            onPress={() => handleTimeClick("19:00")}
          >
            <Text style={styles.dataText}>19:00</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.timeItem,
              selectedTime === "23:00" && { backgroundColor: "#FCE762" },
            ]}
            onPress={() => handleTimeClick("23:00")}
          >
            <Text style={styles.dataText}>23:00</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.buttonBox}>
        {selectedDate && selectedTime ? (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("AdminFormulario", {
                date: selectedDate,
                time: selectedTime,
              })
            }
            style={styles.button}
          >
            <Text style={styles.buttonText}>Preencher formulário</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.disabledButton}>
            <Text style={styles.disabledButtonText}>Selecione data e hora</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
