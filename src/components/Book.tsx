import React, { FC } from 'react'
//react native imports
import { View, Text, TouchableOpacity, Image } from 'react-native'
//style imports
import { containers, texts } from '../styles/index'
//contexts
import { useBooks } from '../contexts/books'
//components
import navigate from '../interfaces/navigate'
const Book : FC<navigate> = ({navigation}) => {
    const { book } = useBooks()

    return (
        <View style={containers.bookDetailsContainer}>
            <View style={containers.bookImageContainer}>
                <Image 
                    style={{width: 151, height: 234, resizeMode: 'stretch'}}
                    source={{uri:`${book.volumeInfo.imageLinks.thumbnail}`}}/> 
            </View>
            
            <Text style={texts.bookTitleDetails}> {book.volumeInfo.title} </Text>
            <Text style={texts.bookPublisherDetails}> {book.volumeInfo.publisher} </Text>
            <Text style={texts.bookResume}> {book.volumeInfo.description} </Text>
        </View>
    )
}

export default Book;