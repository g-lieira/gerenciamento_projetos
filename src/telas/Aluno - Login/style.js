import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    gap: 20,
    padding: 30,
  },

  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 36,
    paddingTop: 50,
  },

  inputBox: {
    width: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 60,
  },

  labelContainer: {
    backgroundColor: "#fff", 
    alignSelf: "flex-start",
    paddingHorizontal: 6, 
    marginStart: 40,
    zIndex: 1, 
    elevation: 1,
    shadowColor: "#fff", 
    position: "absolute", 
    top: -8, 
  },
  
  inputContainer: {
    borderWidth: 1, 
    borderRadius: 50, 
    padding: 10, 
    zIndex: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  button: {
    width: '70%',    
    backgroundColor: '#FFE542',
    borderRadius: 50,
    paddingVertical: 16,
    paddingHorizontal: 70,
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: 'center',
  },

  buttonText: {
    color: "#433C11",
    fontSize: 20,
  },
});
