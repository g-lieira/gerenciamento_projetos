import React from "react";
import { View, Image, TouchableOpacity, TextInput, Text } from "react-native";
import { AntDesign, Ionicons, MaterialCommunityIcons, Entypo  } from "@expo/vector-icons";

import { styles } from "./style";
import Logo from "./../../../assets/logo.png";
import Banner from '../../../assets/banner.png';
import LogoUTF from '../../../assets/logoUTF.png';

export default function AlunoHome({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} style={styles.logo} />
        <TouchableOpacity onPress={() => navigation.goBack()} title="Voltar">
          <AntDesign name="setting" size={32} color="#FCE762" />
        </TouchableOpacity>
      </View>

      <View style={styles.local}>
        <Ionicons name="ios-location-sharp" size={24} color="#9B9D99" />
        <Text style={styles.text}>Cornélio Procópio, Paraná</Text>
      </View>

      <Image style={styles.banner} source={Banner}/>

      <View style={styles.reservaBox}>
        <Text style={styles.title}>QUADRAS DISPONÍVEIS</Text>
        
        <TouchableOpacity style={styles.quadras}>
          <Image style={styles.logoUTF} source={LogoUTF}/>
          <Text style={styles.quadraText}>Quadra Poliesportiva UTFPR-CP</Text>
        </TouchableOpacity>

        <Text style={{color: "#F1F1F1"}}>____________________________________________________________________</Text>

        <TouchableOpacity style={styles.reservas}>
          <MaterialCommunityIcons name="calendar-month-outline" size={24} color="#292D32" />
          <Text style={styles.reservasText}>Minhas reservas</Text>
        </TouchableOpacity>

        <Text style={{color: "#F1F1F1", marginTop: 100}}>____________________________________________________________________</Text>

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
