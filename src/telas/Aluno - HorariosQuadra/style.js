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
  }
});
