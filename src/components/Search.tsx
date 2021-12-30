import React, { FC, useState } from 'react'
//react native imports
import { View, Text, TextInput, TouchableOpacity, FlatList, ListRenderItem } from 'react-native'
//style imports
import { containers, inputs } from '../styles/index'
import Icon from 'react-native-vector-icons/Ionicons'
//components
import BooksList from '../components/BooksList'
//interfaces
import navigate from '../interfaces/navigate'

const Search : FC<navigate> = ({navigation}) => {
    function backHome(){
        navigation.goBack()
    }

    return (
        <>
            {/* <TextInput 
                onChangeText={onChangeText}
                value={text}
                placeholder="Search book">
            </TextInput>

            <TouchableOpacity onPress={() => handleSearch()}> 
                <Text> Search </Text> 
            </TouchableOpacity> */}
            <BooksList />
        </>
    )
}

export default Search;