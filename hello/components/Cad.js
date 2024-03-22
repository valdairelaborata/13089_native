import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import axios from "axios";

import Header from "./Header";
import { useState } from "react";
import styleList from "./StyleList";

const Cad = () => {
  const navigation = useNavigation();

  // const [codigo, setCodigo] = useState("");
  // const [nome, setNome] = useState("");
  // const [descricao, setDescricao] = useState("");

  const [novoProduto, setNovoProduto] = useState({
    codigo: "",
    nome: "",
    descricao: "",
  });

  function salvar() {
    axios.post("http://localhost:3000/produtos", novoProduto);
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

        <TouchableOpacity style={styles.button} onPress={salvar}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styleList.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styleList.buttonText}>Voltar</Text>
      </TouchableOpacity>
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
    height: 60,
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
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
