import React, { FC } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
//contexts
import { useBooks } from '../contexts/books';
//style imports
import { containers, inputs, cards, texts } from '../styles/index'
//navigation
import { useNavigation } from '@react-navigation/native';
//interfaces
import Props from '../interfaces/DetailsProps'
type DetailsScreenNavigationProp = Props['navigation'];

const BooksList : FC = () => {
    const navigation = useNavigation<DetailsScreenNavigationProp>();
    const context = useBooks();
    const { books } = useBooks();

    async function handleSearch (bookId: string) {
        await context.loadBook(bookId)
        navigation.navigate('Details', {id: bookId})
    }

    return (
        <View style={containers.bodyScreen}>
            <FlatList
                keyExtractor={(item) => item.id}
                data={books}
                renderItem={({item}) => (
                    <TouchableOpacity 
                        onPress={() => handleSearch(item.id)}
                        style={cards.card}> 
                        <Text style={texts.bookTitle}> { item.volumeInfo.title }</Text>
                        <Text style={texts.bookPublisher}> by { item.volumeInfo.publisher }</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default BooksList;