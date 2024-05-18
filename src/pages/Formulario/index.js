import React, { useContext, useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { ListContext } from "../../contexts/lista";
export default function Formulario() {
 
  const {lista, setLista} = useContext(ListContext);
  const [input, setInput] = useState("");

  function addTarefa() {
    setLista([...lista, input]); // aqui estou adicionando itens na lista
    setInput("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.formulario}>
        <View style={styles.areaImage}>
          <Image
            style={styles.image}
            source={require("../../img/todoList.png")}
          />
        </View>
        <TextInput
          value={input}
          onChangeText={(tarefa) => setInput(tarefa)}
          style={styles.input}
          placeholder="Digite uma tarefa..."
          placeholderTextColor={"#fff"}
        />
        <TouchableOpacity style={styles.button} onPress={addTarefa}>
          <Text style={{ fontSize: 18, fontWeight: "700", color: "#fff" }}>
            Adicionar tarefa
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  formulario: {
    width: "90%",
    height: "80%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  areaImage: {
    position: "absolute",
    top: 5,
  },
  image: {
    width: 200,
    height: 150,
    marginBottom: 40,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    fontSize: 18,
    marginBottom: 30,
    color: "#fff",
    marginTop: 25,
    borderColor: "#d3d",
  },
  button: {
    width: "auto",
    padding: 10,
    borderRadius: 5,
    shadowColor: "#fff",
    elevation: 10,
    backgroundColor: "#d3d",
  },
});
