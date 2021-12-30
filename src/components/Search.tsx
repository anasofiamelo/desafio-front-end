import React, { FC, useState } from 'react'
//react native imports
import { View, Text, TextInput, TouchableOpacity, FlatList, ListRenderItem } from 'react-native'
//style imports
import { containers, inputs } from '../styles/index'
//contexts
import { useBooks } from '../contexts/books'
//components
import BooksList from '../components/BooksList'
//interfaces
import navigate from '../interfaces/navigate'

const Search : FC<navigate> = ({navigation}) => {
    const [text, onChangeText] = useState('')

    const context = useBooks()

    async function handleSearch() { //calls the array to the context
        await context.loadBooks(text)
    }

    return (
        <View style={containers.bodyScreen}>

            <TextInput 
                onChangeText={onChangeText}
                value={text}
                placeholder="Search book">
            </TextInput>

            <TouchableOpacity onPress={() => handleSearch()}> 
                <Text> Search </Text> 
            </TouchableOpacity>

            <BooksList />
            
        </View>
    )
}

export default Search;