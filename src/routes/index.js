import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icons from "react-native-vector-icons/Feather";

import Formulario from "../pages/Formulario";
import HandleTarefas from "../pages/minhasTarefas";

export default function Routes() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
    screenOptions={{headerShown: false,
      tabBarActiveTintColor: "#d3d",
      tabBarInactiveTintColor:"#dcdcdc"}}>
        <Tab.Screen
        options={{tabBarIcon:({color,size})=>{
            return <Icons name="file-plus" color={color} size={size} />;
        },}}
        name="Formulario"
        component={Formulario}
        
        />

     <Tab.Screen
     options={{tabBarIcon:({color,size})=>{
       return <Icons name="book-open" color={color} size={size} />;
      }}}
     name="Minhas tarefas"
     component={HandleTarefas}
      />

    
    
    </Tab.Navigator>
  );
}