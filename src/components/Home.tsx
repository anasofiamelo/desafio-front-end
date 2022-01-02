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
                    <Text style={texts.homeText}> Hi,<Text style={texts.userName}> Mehmed Al Fatih 👋 </Text> </Text>
                    
                    <View>  
                        <Text style={texts.subtitle}> Discover new book </Text> 

                        <View style={containers.discoverBookBoxContainer}>
                            <Text style={texts.discoverBookTitle}>Hooked</Text>
                            <Text style={texts.discoverBookPublisher}>Nir Eyal</Text>
                            <Text style={texts.discoverBookDetails}>120+ Read Now</Text>
                        </View>
                        
                    </View>

                    <View> 
                        <Text style={texts.subtitle}> Currently reading </Text> 

                        <View style={containers.currentlyReadingBoxContainer}>
                            <Text style={texts.currentlyReadingTitle}>Originals</Text>
                            <Text style={texts.currenytlyReadingPublisher}>by Adam Grant</Text>
                        </View> 

                    </View>

                    <Text style={texts.subtitle}> Reviews of The Days </Text>
                </View>
            </View>
            
        </View>
    )
}

export default Home;