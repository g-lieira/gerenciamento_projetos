import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    gap: 20,
  },

  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 36,
    paddingTop: 80,
    paddingHorizontal: 30,
  },

  logo: {
    width: 150,
    height: 50,
  },

  local: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#FCE762',
    width: '100%',
    padding: 10,
    alignItems: 'center',
    gap: 10,
  },

  text: {
    fontSize: 20,
    fontFamily: 'Nova-Round',
    color: '#4D4D4D',
  }
});
