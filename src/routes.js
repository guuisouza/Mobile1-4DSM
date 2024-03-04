import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "./pages/main";
import SegundaPagina from "./pages/segundapagina"

const Stack = createStackNavigator()

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="main" component={Main}/>
                <Stack.Screen name="main" component={SegundaPagina}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}