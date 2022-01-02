import React, { FC, useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity, Image } from 'react-native';
//contexts
import { useBooks } from '../contexts/books';
//style imports
import { containers, cards, texts } from '../styles/index'
//navigation
import { useNavigation } from '@react-navigation/native';
//interfaces
import Props from '../interfaces/DetailsProps'
type DetailsScreenNavigationProp = Props['navigation'];

const BooksList : FC = () => {
    const navigation = useNavigation<DetailsScreenNavigationProp>();
    const context = useBooks();
    const { books } = useBooks();
    const numColumns = 3

    async function handleSearch (bookId: string) {
        await context.loadBook(bookId)
        navigation.navigate('Details', {id: bookId})
    }

    return (
        <View style={containers.bodyScreen}>

            <FlatList   
                data={books}
                keyExtractor={(item) => item.id}
                numColumns={numColumns}
                renderItem={({item}) => (
                    <TouchableOpacity 
                        onPress={() => handleSearch(item.id)}
                        style={cards.card}> 
                        {item.volumeInfo.imageLinks ? //loads a default img if the book doesnt have one
                        <Image style={{width: 105, height: 153}} source={{uri: `${item.volumeInfo.imageLinks.smallThumbnail}`}}/> :
                        <Image style={{width: 105, height: 153}} source={{uri: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&w=1000&q=80'}}/> }
                        <Text style={texts.bookTitle}> { item.volumeInfo.title.length > 15 ? item.volumeInfo.title.substring(0, 20) + '...' : item.volumeInfo.title }</Text> 
                        <Text style={texts.bookPublisher}> by { item.volumeInfo.publisher }</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default BooksList;