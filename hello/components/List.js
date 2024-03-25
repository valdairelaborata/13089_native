import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import axios from "axios";
import { Feather as Icon } from "@expo/vector-icons";

import styleList from "./StyleList";
import Header from "./Header";
import { useEffect, useState } from "react";

const List = () => {
  const navigation = useNavigation();

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/produtos").then((resposta) => {
      setProdutos(resposta.data);
    });
  }, []);

  function editar(id) {
    navigation.navigate("Cad", { id });
  }

  return (
    <>
      <Header title="Lista de produtos"></Header>

      <ScrollView
        style={styleList.scrollContainer}
        contentContainerStyle={styleList.itemsContainer}
      >
        {produtos.map((produto, index) => {
          return (
            <View style={styleList.container}>
              <Text style={styleList.textItem}>
                {produto.codigo} - {produto.nome}
              </Text>
              <View style={styleList.buttonsContainer}>
                <TouchableOpacity style={styleList.deleteButton}>
                  <Icon name="trash" color="white" size={12} />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styleList.editButton}
                  onPress={() => editar(produto.id)}
                >
                  <Icon name="edit" color="white" size={12} />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>

      <TouchableOpacity
        style={styleList.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styleList.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </>
  );
};

export default List;
