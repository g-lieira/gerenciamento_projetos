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

  addImage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E3E3E3',
    width: 100,
    height: 100,
    paddingVertical: 20,
    borderRadius: 10,
    marginTop: 10,
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

  formSubItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    gap: 8,
  },

  formLabel: {
    fontSize: 28,
    fontFamily: 'Odibee-Sans',
  },

  formSubLabel: {
    fontSize: 20,
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

  formInputInfos: {
    backgroundColor: '#ECECEC',
    borderRadius: 10, 
    padding: 10, 
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    width: 150,
  },

  formDropBox: {
    color: 'black', 
    width: 150,
    borderColor:'none',
    backgroundColor: '#ECECEC',
  },

  formInfos: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  buttonBox: {
    width: '100%',
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 45,
  },

  button: {
    backgroundColor: '#D7D7D6',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 10,
  },

  buttonText: {
    fontSize: 25,
    fontFamily: 'Odibee-Sans',
    letterSpacing: 2,
  }
});
