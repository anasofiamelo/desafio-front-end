import React, { FC, useState, useEffect } from 'react'
//react native imports
import { View, Text, TouchableOpacity } from 'react-native'
//components
import BooksList from '../components/BooksList'
import LoadingAnimation from '../components/LoadingAnimation'
//styles
import { buttons, texts, containers } from '../styles'
//interfaces
import Props from '../interfaces/DetailsProps'
type DetailsScreenNavigationProp = Props['navigation'];
//contexts
import { useBooks } from '../contexts/books'
interface SearchProps {
    text: string
}

const Search : FC<SearchProps> = ({text}) => {
    const [isLoading, setIsLoading] = useState(true)
    const context = useBooks()
    const { books } = useBooks()

    useEffect(() => {
        if (books.length > 0) {
            setIsLoading(false)
            console.log(books.length)
        } else {
            setIsLoading(true)
        }
    }, [books])

    //reloads to the next request (+40 books)
    function loadMore(){
        context.loadBooks(text)
    }

    return (
        <View style={containers.pageContainer}>
            {isLoading ? <LoadingAnimation /> : <BooksList /> }
            
            <View style={containers.loadMoreButtonContainer}>
                <TouchableOpacity style={buttons.loadMoreButton} onPress={() => {loadMore()} }> 
                    <Text style={texts.loadMoreButtonText}> Load more </Text> 
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default Search;