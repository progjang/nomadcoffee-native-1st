import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "../screens/Search";
import Profile from "../screens/Profile";
import Home from "../screens/Home";
import { Ionicons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

export default function LoggedInNav(){
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Home" component={Home}
            options={{
                tabBarIcon: ({ focused, color, size}) => (
                    <Ionicons name="home" color={color} size={22}/>
                ),
            }}
            />
            <Tabs.Screen name="Search" component={Search}
            options={{
                tabBarIcon: ({ focused, color, size}) => (
                    <Ionicons name="search" color={color} size={22}/>
                ),
            }}/>
            <Tabs.Screen name="Profile" component={Profile}
            options={{
                tabBarIcon: ({ focused, color, size}) => (
                    <Ionicons name="person" color={color} size={22}/>
                ),
            }}/>
        </Tabs.Navigator>
    );
}