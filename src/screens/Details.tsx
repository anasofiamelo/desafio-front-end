import React, { FC } from 'react'
//react native imports
import { View, TouchableOpacity, Image } from 'react-native'
//style imports
import { containers, inputs, texts } from '../styles/index'
import Icon from 'react-native-vector-icons/Ionicons'
//interfaces
import navigate from '../interfaces/navigate'
//components
import Book from '../components/Book'

const Details : FC<navigate> = ({navigation}) => {
    function backHome(){
        navigation.goBack(null)
    }
    return (
        <View>

            <TouchableOpacity style={containers.backButtonContainer} onPress={() => backHome()}>
                <Icon name="arrow-back-outline" size={30}/>
            </TouchableOpacity>

            <View style={containers.detailHeaderContainer}></View>
            <View style={containers.ballContainer}></View>
            <View style={containers.littleBallContainer}></View>

            <Book navigation />
        </View>
    )
}

export default Details; 