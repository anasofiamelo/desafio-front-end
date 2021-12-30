import React, { FC } from 'react'
//react native imports
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
//style imports
import { containers, inputs, texts } from '../styles/index'

const Home : FC = () => {
    return (
        <View style={containers.bodyScreen}>
            <View>
                <View>
                    <Text style={texts.homeText}> Hi,<Text style={texts.userName}> Fulano </Text> </Text>
                    
                    <View>
                        <Text style={texts.subtitle}> Discover new book </Text> 
                        <View style={containers.discoverBookBoxContainer}></View>
                    </View>

                    <View> 
                        <Text style={texts.subtitle}> Currently reading </Text> 
                        <View style={containers.currentlyReadingBoxContainer}></View> 
                    </View>

                    <Text style={texts.subtitle}> Reviews of The Days </Text>
                </View>
            </View>
            
        </View>
    )
}

export default Home;