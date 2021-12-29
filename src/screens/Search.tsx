import React, { FC, useEffect, useState } from 'react'
//react native imports
import { View, Text, TextInput, TouchableOpacity, FlatList, ListRenderItem } from 'react-native'
//style imports
import { containers, inputs } from '../styles/index'
//contexts
import { useBooks } from '../contexts/books'
//navigation
import { NavigationStackProp } from 'react-navigation-stack';
//interfaces
interface navigate {
    navigation: NavigationStackProp<any>
}

const Search : FC<navigate> = ({navigation}) => {
    const [text, onChangeText] = useState('')

    const context = useBooks()

    async function handleSearch() {
        await context.loadBooks(text)
        navigation.navigate('Results')
    }

    return (
        <View style={containers.bodyScreen}>

            <TextInput 
                onChangeText={onChangeText}
                value={text}
                placeholder="Search book" 
                style={inputs.input}>
            </TextInput>

            <TouchableOpacity onPress={() => handleSearch()}> 
                <Text> Search </Text> 
            </TouchableOpacity>

        </View>
    )
}

export default Search;