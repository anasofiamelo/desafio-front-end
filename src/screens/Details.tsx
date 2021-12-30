import React, { FC } from 'react'
//react native imports
import { View, Text, TouchableOpacity } from 'react-native'
//style imports
import Icon from 'react-native-vector-icons/Ionicons'
// import { containers, inputs, texts } from '../styles/index'
//interfaces
import navigate from '../interfaces/navigate'
//components
import Book from '../components/Book'

const Details : FC<navigate> = ({navigation}) => {

    function backHome(){
        navigation.goBack()
    }

    return (
        <View>
            <TouchableOpacity onPress={() => backHome()}>
                <Icon name="arrow-back-outline" size={30}/>
            </TouchableOpacity>
            
            <Book />
        </View>
    )
}

export default Details; 