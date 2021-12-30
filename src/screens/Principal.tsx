import React, { FC, useState } from 'react';
//react native imports
import { View, TouchableOpacity, Text, TextInput } from 'react-native'
//style imports
import { containers, inputs, texts } from '../styles/index';
import Icon from 'react-native-vector-icons/Ionicons'
//components imports
import Home from '../components/Home'
import Search from '../components/Search'


const Principal : FC = () => {
    const [isSearching, toggleIsSearching] = useState(false)
    
    function handleSearch(){
        toggleIsSearching(!isSearching)
    }

    const Index : FC = () => { //when the user is searching for a book, it will change the component to the search screen
        return isSearching ? <Search navigation/> : <Home />
    }

    return (
        <View style={containers.bodyScreen}>
            
            <View style={containers.searchInputContainer}>
                <TouchableOpacity 
                    onPress={() => handleSearch()} 
                    style={inputs.searchInput}>
                        <TextInput>
                        </TextInput>
                        
                </TouchableOpacity>
            </View>
                
            <Index />

        </View>
    )
}

export default Principal;