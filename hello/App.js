import React from "react";
import Routes from "./Routes";
import { Text } from "react-native";
import FlashMessage from "react-native-flash-message";

const App = () => {
  return (
    <>
      <Routes></Routes>
      <FlashMessage position="top" />
    </>
  );
};

export default App;
