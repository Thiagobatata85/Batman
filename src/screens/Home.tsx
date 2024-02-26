import React from "react";
import {Text,View} from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from '../screens/Style.tsx';
import { BatLogo } from "../components/BatLogo/BatLogo";
import { BatTextinput } from "../components/BatTextinput/BatTextinput";
import { BatButton } from "../components/BatButton/BatButton";


export default function Home(){
    return(
    <View style={styles.appContainer}>

      <View style={styles.logoContainer}>
        <BatLogo/>
      </View>

      <View style={styles.inputContainer}>
        
        <BatButton/>
      </View>
    
      
      <StatusBar style="light" />
    </View>
    )
}
