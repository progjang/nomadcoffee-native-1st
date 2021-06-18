import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import {Asset} from 'expo-asset';
import LoggedOutNav from './navigators/LoggedOutNav';
import { NavigationContainer } from '@react-navigation/native';
import { Appearance, AppearanceProvider } from 'react-native-appearance';
import LoggedInNav from './navigators/LoggedInNav';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  const [loading, setLoading] = useState(true);
  const onFinish  = () => setLoading(false);
  const preload = () => {
    const fontsToLoad = [Ionicons.font];
    const fontPromises = fontsToLoad.map((font)=> Font.loadAsync(font));
    const imagesToLoad = [require("./assets/insta-logo.png"),
  "https://www.citypng.com/public/uploads/preview/-11590321548vfiwckfjs3.png"];
  const imagePromises = imagesToLoad.map(image=>
    Asset.loadAsync(image));
    return Promise.all([...fontPromises, ...imagePromises]);
  };
  if(loading){
    return (
      <AppLoading 
      startAsync={preload} 
      onError={console.warn} 
      onFinish={onFinish} />
    );
  }
  console.log(Appearance.getColorScheme());
  return (  <AppearanceProvider>
    <NavigationContainer>
      <LoggedInNav />
    </NavigationContainer>
  </AppearanceProvider>)


}


