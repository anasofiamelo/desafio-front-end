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

                { book.volumeInfo.imageLinks ? //if the book does not have an image, it'll display a default image
                <Image style={{width: 151, height: 234}} source={{uri: `${book.volumeInfo.imageLinks.thumbnail}`}}/> :
                <Image style={{width: 151, height: 234}} source={{uri: 'https://static.stealthelook.com.br/wp-content/uploads/2021/05/dossie-completo-da-banda-kpop-blackpink-20210506115626.jpg'}}/> }

            </View>
            
            {
            /* //book's info */}
            <Text style={texts.bookTitleDetails}> {book.volumeInfo.title} </Text>
            <Text style={texts.bookPublisherDetails}> {book.volumeInfo.publisher} </Text>
            <Text style={texts.bookResume}> {book.volumeInfo.description} </Text>

            <TouchableOpacity> <Text>  </Text> </TouchableOpacity>
        </View>
    )
}

export default Book;