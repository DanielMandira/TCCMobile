import { StyleSheet,Text,View,Modal,TouchableOpacity,SafeAreaView,TextInput,Alert,ScrollView, Image, Pressable, Details} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import React, {useState,useEffect} from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function EditPerfil({navigation}){
    return(
        <View>
            <ScrollView>
                <Text>Nome:</Text>
                <TextInput></TextInput>
            </ScrollView>
        </View>
    );
}