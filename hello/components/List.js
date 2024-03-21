import { Text, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import styleList from "./StyleList";
import Header from "./Header";

const List = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header title="Lista de produtos"></Header>

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
