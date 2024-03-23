import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { showMessage } from "react-native-flash-message";

import axios from "axios";

import Header from "./Header";
import { useState } from "react";
import styleList from "./StyleList";

const Cad = () => {
  const navigation = useNavigation();
  const [novoProduto, setNovoProduto] = useState({
    codigo: "",
    nome: "",
    descricao: "",
  });

  function salvar() {
    if (novoProduto.codigo === "") {
      showMessage({
        message: "Código não informado!!!",
        type: "warning",
        position: "top",
      });
    } else {
      axios.post("http://localhost:3000/produtos", novoProduto);
      showMessage({
        message: "Registro cadastrado com sucesso!!!",
        type: "success",
        position: "bottom",
      });
    }
  }

  return (
    <>
      <Header title="Cadastro de produto"></Header>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Código"
          clearButtonMode="always"
          inputMode="text"
          onChangeText={(text) => {
            setNovoProduto({ ...novoProduto, codigo: text });
          }}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          clearButtonMode="always"
          inputMode="text"
          onChangeText={(text) => {
            setNovoProduto({ ...novoProduto, nome: text });
          }}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Descricão"
          clearButtonMode="always"
          inputMode="text"
          onChangeText={(text) => {
            setNovoProduto({ ...novoProduto, descricao: text });
          }}
        ></TextInput>

        <View style={styles.containerButton}>
          <TouchableOpacity style={styleList.button} onPress={salvar}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styleList.button}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styleList.button}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Cad;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  inputContainer: {
    margin: 20,
    alignItems: "stretch",
  },
  topImage: {
    margin: 20,
  },
  title: {
    fontSize: 20,
  },
  input: {
    marginTop: 10,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: "stretch",
  },
  button: {
    marginTop: 10,
    height: 60,
    backgroundColor: "green",
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  containerButton: {
    flexDirection: "row", // Alinha os itens horizontalmente
    justifyContent: "space-between", // Distribui o espaço entre os itens
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
