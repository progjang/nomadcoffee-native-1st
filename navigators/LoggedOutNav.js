import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import LogIn from "../screens/LogIn";
import CreateAccount from "../screens/CreateAccount";

const Stack = createStackNavigator();

export default function LoggedOutNav(){
    return (
        <Stack.Navigator screenOptions={{
            headerTintColor: "blue"
        }}>
            <Stack.Screen name="Welcome" component={Welcome} options={{
                headerShown: false,
            }}/>
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="CreateAccount" component={CreateAccount} 
            options={{
                headerTitle: false,
                headerTransparent: true,
                headerTintColor: "white",
            }}/>
        </Stack.Navigator>
    )
}