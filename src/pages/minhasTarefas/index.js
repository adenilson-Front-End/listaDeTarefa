import React, {useContext} from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { ListContext } from "../../contexts/lista";
import Tarefas from "../Tarefas";

export default function HandleTarefas(){
    const {lista} = useContext(ListContext);
    
    return (
        <View style= {styles.container}>
            <FlatList
                data={lista}
                renderItem={({item})=> <Tarefas itensDaLista={item}/>}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
    }
})