import { Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./components/Home";
import List from "./components/List";
import Cad from "./components/Cad";

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <>
      <NavigationContainer>
        <AppStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <AppStack.Screen name="Home" component={Home}></AppStack.Screen>
          <AppStack.Screen name="List" component={List}></AppStack.Screen>
          <AppStack.Screen name="Cad" component={Cad}></AppStack.Screen>
        </AppStack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Routes;
