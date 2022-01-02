import React, { FC } from 'react'
//react native imports
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native'
//style imports
import { containers, texts, buttons } from '../styles/index'
//contexts
import { useBooks } from '../contexts/books'
//components
import navigate from '../interfaces/navigate'
const Book : FC<navigate> = ({navigation}) => {
    const { book } = useBooks()
    
    return (
        <View style={containers.bookDetailsContainer}>
            <View style={containers.bookImageContainer}>

                { book.volumeInfo.imageLinks //if the book does not have an image, it'll display a default image
                
                    ? 

                <Image 
                    style={{width: 151, height: 234}} 
                    source={{uri: `${book.volumeInfo.imageLinks.thumbnail}`}}/> 

                    :

                <Image 
                    style={{width: 151, height: 234}} 
                    source={{uri: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&w=1000&q=80'}}/> 
            
                }

            </View>
            
            {
            /* //book's info */}
            <Text style={texts.bookTitleDetails}> {book.volumeInfo.title} </Text>
            <Text style={texts.bookPublisherDetails}> {book.volumeInfo.publisher} - {book.volumeInfo.publishedDate}</Text>
            <Text style={texts.bookResume}> {book.volumeInfo.description} </Text>

            <TouchableOpacity 
                style={buttons.loadMoreButton}
                onPress={() => Linking.openURL(`${book.volumeInfo.infoLink}`)}> 
                    <Text style={texts.loadMoreButtonText}> View on Google </Text> 
            </TouchableOpacity>
        </View>
    )
}

export default Book;