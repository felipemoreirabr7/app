import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';
import logo from "../assets/logo.png"
import user from "../assets/user.png"
import api from '../services/api'
import apiIp from '../services/apiIp'
import NetInfo from '@react-native-community/netinfo';

const Dashboard = ({ navigation }) => {
    const [userName, setUserName] = useState('');
    

    useEffect(() => {
        // (async () => {
        // let { status } = await Location.requestForegroundPermissionsAsync();
        // if (status !== 'granted') {
        //     setErrorMsg('Permission to access location was denied');
        //     return;
        // }

        // let location = await Location.getCurrentPositionAsync({});
        // setLocation(location);
        // })();
        
    }, []);

    // let text = 'Waiting..';
    // let latitude = ""
    // let longitude = ''
    // let timestamp = ''
    
    // if (errorMsg) {
    //     text = errorMsg;
    // } else if (location) {
    //     text = JSON.stringify(location)
    //     latitude = JSON.stringify(location.coords.latitude)
    //     longitude = JSON.stringify(location.coords.longitude)
    //     timestamp = JSON.stringify(location.timestamp)
        
    // }


    function handlerSubmit(){
        navigation.navigate('Dashboard')
    }

    async function autentication(){
         
        const ip = await apiIp.get()
        const IP = ip.data
        
        
        
        const result = await api.post("/ponto", {userName, IP} )
        const value = result.data.message
        if(value == 0){
            Alert.alert("Não foi possivel registar sua presença, tente novamente")
            
        }
        if(value == 1){
            Alert.alert("Presença registrada")
           
        }
        
    }
    

    
    const getDataName = async () => {
        const value = await AsyncStorage.getItem('user')
        setUserName(value)
        //Alert.alert(`user: ${userName}`)
      }
          
    getDataName()

    return (
        
        <SafeAreaView style={styles.container}>
        
        <Image style={styles.logo} source={logo}/>

        <View style={styles.user}>
            <Image source={user} style={styles.userImage} />
            <Text style={styles.userText}>Olá {userName}</Text>
            
        </View>

        <Text style={styles.textDashboard}>Folha de Ponto Virtual</Text>

        <View style={styles.dias}>
            <a href="/dashboard">
                <Text>06/06</Text>
            </a>
            <Text>07/06</Text>
            <Text>08/06</Text>
            <Text>09/06</Text>
            <Text>10/06</Text>
        </View>

        <View style={styles.user}>
            <TouchableOpacity onPress={autentication} style={styles.button}>
                <Text style={styles.buttonText}>Registrar Minha Presença</Text>
            </TouchableOpacity>
            
        </View>

        
        

        <TouchableOpacity onPress={handlerSubmit}>
            <Text>Voltar</Text>
        </TouchableOpacity>
        
        </SafeAreaView>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1
      },
      logo: {
          resizeMode: "contain",
          height: 200,
          alignSelf: 'center'
          
      },
      user: {
          display: "flex",
          flexDirection: 'row',
          alignItems: "center"
      },
      userImage: {
          width: 75,
          height: 75
      },
      userText: {
          marginLeft: 12,
          fontSize: 22,
          fontWeight: 'bold'
      },
      textDashboard: {
          marginTop: 32,
          marginLeft:12, 
          fontWeight: 'bold',
          fontSize: 20,
          color: '#c00088',
          borderBottomWidth: 2,
          borderColor: '#43054e'
      },
      button: {
          padding: 50,
          backgroundColor: '#ddd',
          marginTop: 32,
          marginLeft: 44,
          borderRadius: 12,
          
      },
      buttonText: {
          fontSize: 16
      },
      logout: {
          marginLeft: 12
      },
      dias: {
        display: "flex",
        flexDirection: 'column',
        alignItems: "center"
      }
  });

export default Dashboard;