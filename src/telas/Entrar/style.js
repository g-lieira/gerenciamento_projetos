import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },

  image: {
    marginBottom: 20,
  },

  button: {
    width: 250,    
    backgroundColor: '#FFE542',
    borderRadius: 50,
    paddingVertical: 16,
    paddingHorizontal: 70,
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#433C11",
    fontSize: 20,
  },

  smallText: {
    fontSize: 20,
    color: '#9B9D99',
  }
});