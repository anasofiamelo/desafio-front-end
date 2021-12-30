import React, { FC } from 'react';
import { View, FlatList, Text, TouchableOpacity, Image } from 'react-native';
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
    const numColumns = 3
    return (
        <View>
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