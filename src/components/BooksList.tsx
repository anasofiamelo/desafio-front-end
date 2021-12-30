import React, { FC, useState } from 'react';
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
                        <Image style={{width: 105, height: 153}} source={{uri: `${item.volumeInfo.imageLinks.smallThumbnail}`}}/>
                        <Text style={texts.bookTitle}> { item.volumeInfo.title }</Text>
                        <Text style={texts.bookPublisher}> by { item.volumeInfo.publisher }</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default BooksList;