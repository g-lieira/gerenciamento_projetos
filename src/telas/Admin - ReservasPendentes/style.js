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

  responseRequest: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignSelf: 'flex-end',    
  },

  denyModalBox: {
    width: 350,
    position: 'absolute',
    display: 'flex',
    alignSelf: 'center',
    justifyContent:'center',
    alignItems: 'center',
    marginTop: '50%',
  },

  denyModal: {
    backgroundColor: '#E9E9E9',
    borderRadius: 20,
    padding: 20,
    gap: 20,
  }, 

  closeModalContent: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: 10,
  },

  denyModalContent: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },

  denyModalText: {
    fontSize: 20,
    fontFamily: 'Nova-Round',
  },

  formTextArea: {
    backgroundColor: '#FFFFFF',
    height: 240,
    width: 340,
    borderRadius: 10, 
    padding: 10, 
    display: "flex",
    flexDirection: "row",
    alignItems: 'flex-start',
    justifyContent:'flex-start',
    textAlign: 'left',
    gap: 5,
    marginTop: 10,
  },

  button: {
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    width: 100,
    padding: 10,
    elevation: 3,

  },

  buttonText: {
    fontFamily: 'Nova-Round',
    fontSize: 18,
    width: 100,
    textAlign: 'center',
  },    

  answerModalBox: {
    width: 350,
    position: 'absolute',
    display: 'flex',
    alignSelf: 'center',
    justifyContent:'center',
    alignItems: 'center',
    marginTop: '50%',
  },

  answerModal: {
    backgroundColor: '#E9E9E9',
    borderRadius: 20,
    padding: 20,
    gap: 20,

    display: 'flex',
    alignItems: 'center',
  },

  canceledText: {
    fontFamily: 'Nova-Round',
    fontSize: 18,
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
