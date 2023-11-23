import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    paddingBottom: 20,
    borderColor: '#BBBBBB',
    borderBottomWidth: 1,
  },

  navHeaderText: {
    fontSize: 40,
    fontFamily: 'Odibee-Sans',
    width: '60%',
  },

  reservas: {
    flex: 1,

  },

  reservasBox: {
    borderColor: '#BBBBBB',
    borderBottomWidth: 1,
    padding: 20,
  }, 

  quadraName: {
    fontSize: 19,
    fontFamily: 'Nova-Round',
    marginVertical: 10,
  },

  quadraInfos: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  quadraDate: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 10,
  },

  quadraDateItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    gap: 10,
  },

  quadraDateText: {
    fontSize: 15,
    fontFamily: 'Nova-Round',
  },

  statusSolicitado: {
    fontFamily: 'Nova-Round',
    fontSize: 16,
    color: '#CED200',
    fontWeight: 'bold',
  },

  statusReservado: {
    fontFamily: 'Nova-Round',
    fontSize: 16,
    color: '#00B828',
    fontWeight: 'bold',
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
    alignItems: 'center',
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
