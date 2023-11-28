import { StyleSheet } from "react-native";

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
    justifyContent: "flex-start",
    gap: 36,
    paddingTop: 80,
    paddingLeft: 30,
  },

  headerText: {
    fontSize: 35,
    fontFamily: 'Odibee-Sans',
    width: '60%',
    textAlign: 'center'
  },

  formBox: {
    width: '100%',
    padding: 30,
    justifyContent: 'center',
    gap: 20,
  },

  formItem: {
    gap: 10,
  },

  formLabel: {
    fontSize: 28,
    fontFamily: 'Odibee-Sans',
  },

  formInput: {
    backgroundColor: '#ECECEC',
    borderRadius: 10, 
    padding: 10, 
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  formHoraData: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  formInputDataHora: {
    backgroundColor: '#ECECEC',
    borderRadius: 10, 
    paddingVertical: 10, 
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    gap: 5,
    width: 100,
  },

  formTextArea: {
    backgroundColor: '#ECECEC',
    height: 183,
    borderRadius: 10, 
    padding: 10, 
    display: "flex",
    flexDirection: "row",
    alignItems: 'flex-start',
    textAlign: 'left',
    gap: 5,
  },
});
