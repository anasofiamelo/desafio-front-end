import React, { FC } from 'react'
//react native imports
import { View, Text } from 'react-native'
//style imports
import { containers, texts } from '../styles/index'
//contexts
import { useBooks } from '../contexts/books'
//interfaces
const Book : FC = () => {
    const { book } = useBooks()

    return (
        <View style={containers.bodyScreen}>
            <View style={containers.detailHeaderContainer}></View>
            <Text style={texts.bookTitleDetails}> {book.volumeInfo.title} </Text>
            <Text style={texts.bookPublisherDetails}> {book.volumeInfo.publisher} </Text>
            <Text style={texts.bookResume}> {book.volumeInfo.description} </Text>
        </View>
    )
}

export default Book;