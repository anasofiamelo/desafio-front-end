import React, { FC } from 'react'
//react native imports
import { View, Text, TouchableOpacity, Image } from 'react-native'
//style imports
import { containers, texts } from '../styles/index'
//contexts
import { useBooks } from '../contexts/books'
// import IonIcons from '@react-native-vector-icons/FontAwesome'

//interfaces
const Book : FC = () => {
    const { book } = useBooks()

    return (
        <View style={containers.bodyScreen}>
            <View style={containers.detailHeaderContainer}></View>
            <Image 
                style={{width: 128, height: 192}}
                source={{uri:`${book.volumeInfo.imageLinks.thumbnail}`}}/> 
                
            <Text style={texts.bookTitleDetails}> {book.volumeInfo.title} </Text>
            <Text style={texts.bookPublisherDetails}> {book.volumeInfo.publisher} </Text>
            <Text style={texts.bookResume}> {book.volumeInfo.description} </Text>
        </View>
    )
}

export default Book;