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
    zIndex: 11,
  },

  bannerQuadra: {
    position: 'absolute',
    zIndex: 9,
    width: '100%',
    height: 400,
    backgroundColor: '#0f0f0f',
  },

  bannerQuadraImg: {
    width: '100%',
    height: '100%',
  },

  nomeQuadra: {
    position: 'absolute',
    width: '100%',
    height: 400,
    zIndex: 10,
    display: 'flex',
    justifyContent: 'flex-end',
  },

  nomeQuadraText: {
    color: '#fff',
    position: 'absolute',
    zIndex: 10,
    fontFamily: 'Odibee-Sans',
    fontSize: 28,
    padding: 20,
  },

  horariosDiponiveis: {
    paddingTop: 310,
    width: '100%',
    gap: 20,
  },

  horariosDiponiveisText: {
    color: '#000',
    fontFamily: 'Odibee-Sans',
    fontSize: 28,
    paddingHorizontal: 20,
  },

  datas: {
    backgroundColor: '#F1F1F1',
    width: '100%',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  dataItem: {
    fontSize: 15,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 15,
  },

  dataText: {
    fontSize: 15,
    fontFamily: 'Nova-Round',
    color: '#000',
  },

  horarios: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },

  timeItem: {
    fontSize: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: '#FFF7BA',
    marginHorizontal: 10,
  },

  buttonBox: {
    width: '100%',
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  button: {
    backgroundColor: '#D7D7D6',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 10,
  },

  buttonText: {
    fontSize: 25,
    fontFamily: 'Odibee-Sans',
    letterSpacing: 2,
  }
});
