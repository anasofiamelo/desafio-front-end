import React, { FC } from 'react'
//react native imports
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
//style imports
import { containers, inputs, texts } from '../styles/index'
//navigation
import { NavigationStackProp } from 'react-navigation-stack';
//interfaces
interface navigate {
    navigation: NavigationStackProp<any>
}

const Home : FC<navigate> = ({navigation}) => {
    return (
        <View style={containers.bodyScreen}>
            <TouchableOpacity style={inputs.input} onPress={() => navigation.navigate('Search')}>
                <Text> Search ...</Text>
            </TouchableOpacity>

            <Text style={texts.homeText}> Hi, <Text style={texts.userName}> Fulano </Text> </Text>
        </View>
    )
}

export default Home;