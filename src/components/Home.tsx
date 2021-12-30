import React, { FC } from 'react'
//react native imports
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
//style imports
import { containers, inputs, texts } from '../styles/index'
//navigation
import { NavigationStackProp } from 'react-navigation-stack';

const Home : FC = () => {
    return (
        <View style={containers.bodyScreen}>
            <View style={containers.contentContainer}>

                <View>
                    <Text style={texts.homeText}> Hi, <Text style={texts.userName}> Fulano </Text> </Text>
                    <Text style={texts.subtitle}> Discover new book </Text>
                    <Text style={texts.subtitle}> Currently reading </Text>
                    <Text style={texts.subtitle}> Reviews of The Days </Text>
                </View>
                
            </View>
            
        </View>
    )
}

export default Home;