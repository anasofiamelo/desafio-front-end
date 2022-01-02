import React, { FC, useState, useEffect } from 'react';
//react native imports
import { View, TouchableOpacity, Text, TextInput } from 'react-native'
//style imports
import { containers, inputs, texts } from '../styles/index';
//components imports
import Home from '../components/Home'
import Search from '../components/Search'
import SearchInput from '../components/SearchInput'
//contexts
import { useBooks } from '../contexts/books'

const Principal : FC = () => {
    const [isSearching, toggleIsSearching] = useState(false)
    const [text, setText] = useState('')
    const context = useBooks()

    useEffect(() => {
        if (text) {
            toggleIsSearching(true)
            context.loadBooks(text)
        } else {
            toggleIsSearching(false)
        }
    }, [text])

    return (
        <View style={containers.bodyScreen}>
            
            <View style={containers.searchInputContainer}>
                <SearchInput 
                    value={text} 
                    onChange={(search: string) => setText(search)} 
                />
            </View>
                
            {isSearching ? <Search text={text}/> : <Home /> /* when the user is searching for a book, it will change the component to the search screen */}

        </View>
    )
}

export default Principal;