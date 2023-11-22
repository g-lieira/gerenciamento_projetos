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

  modalBox: {
    width: 200,
    position: 'absolute',
    display: 'flex',
    alignSelf: 'flex-end',
    marginTop: 100,
  },

  modal: {
    backgroundColor: '#F3F3F3',
    marginRight: 30,
    borderRadius: 20,
    padding: 20,
    gap: 20,
  }, 

  modalContent: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },

  modalText: {
    fontSize: 18,
    fontFamily: 'Nova-Round',
  },

  navHeader: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 36,
    paddingTop: 30,
    paddingLeft: 30,
  },

  navHeaderText: {
    fontSize: 40,
    fontFamily: 'Odibee-Sans',
    width: '60%',
    textAlign: 'center'
  },

  regulamentoBox: {
    backgroundColor: '#D9D9D9',
    borderRadius: 25,
    padding: 36,
    marginHorizontal: 30,
    marginVertical: 10,
    fontSize: 15,
    fontFamily: 'Nova-Round',
    color: '#616260',
    lineHeight: 23,
    textAlign: 'justify'
  }
});
