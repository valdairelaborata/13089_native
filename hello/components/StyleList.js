import { StyleSheet } from "react-native";

export default StyleSheet.create({
  button: {
    marginTop: 10,
    height: 60,
    backgroundColor: "navy",
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  scrollContainer: {
    flex: 1,
    width: "100%",
  },
  itemsContainer: {
    flex: 1,
    marginTop: 10,
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: "stretch",
    backgroundColor: "#fff",
  },
  textItem: {
    fontSize: 20,
  },
  container: {
    backgroundColor: "#fff",
    marginTop: 10,
    width: "100%",
  },
});
