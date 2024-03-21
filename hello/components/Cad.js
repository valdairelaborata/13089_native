import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "./Header";

const Cad = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <Header title="Cadastro de produto"></Header>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Cad;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#474A51',
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
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
});
