import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { ListContent } from "../../contexts/lista";
import Icon from "react-native-vector-icons/Feather";
import { useContext } from "react";

export default function Tarefas({ itensDaLista }) {

  return (
    <View style={styles.container}>
      <View style={styles.areaTarefas}>
        <Text style={styles.textTarefa}>{itensDaLista}</Text>

        <View style={styles.areaIcons}>
          <TouchableOpacity>
            <Icon name="edit-2" size={18} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Icon style={{ color: "#d3d" }} name="trash-2" size={18} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
    backgroundColor: "#121212",
    flex: 1,
  },
  areaTarefas: {
    width: "100%",
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 5,
    shadowColor: "#fff",
    elevation: 10,
    backgroundColor: "#fff",
  },
  areaIcons: {
    width: "20%",
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  textTarefa: {
    fontWeight: "600",
    fontSize: 20,
  },
});
