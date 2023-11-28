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
  },

  banner: {
    width: 390,
    height: 150,
  },

  reservaBox: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 30,
    gap: 20,
  },

  title: {
    width: '100%',
    fontSize: 28,
    fontFamily: 'Odibee-Sans',
  },

  quadras: {
    gap: 10,
  },  

  logoUTF: {
    width: 100,
    height: 69,
  },

  iconPlus: {
    width: 25,
  },

  quadraText: {
    fontSize: 15,
    fontWeight: "500",
    width: 120,
    color: '#4D4D4D',
    fontFamily: 'Nova-Round',
  },

  quadrasBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    gap: 82,
  },

  quadrasAdd: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  reservas: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    backgroundColor: '#E3E3E3',
    width: 150,
    paddingVertical: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  
  reservasText: {
    fontSize: 15,
    fontWeight: "500",
    color: '#4D4D4D',
    fontFamily: 'Nova-Round',
  },

  navBox: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 20,
    gap: 10,
  },

  navButton: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'baseline',
    justifyContent: 'center',
    gap: 5,
  },

  navButtonBox: {
    width: '40%',
    paddingHorizontal: 30,
  },  

  navButtonText: {
    color: '#FFDF12',
    fontSize: 15,
    fontFamily: 'Nova-Round',
    textAlign: 'center'
  }
});
