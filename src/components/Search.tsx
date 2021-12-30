import React, { FC, useState } from 'react'
//react native imports
import { View, Text, TouchableOpacity } from 'react-native'
//components
import BooksList from '../components/BooksList'
//interfaces
import Props from '../interfaces/DetailsProps'
type DetailsScreenNavigationProp = Props['navigation'];
//contexts
import { useBooks } from '../contexts/books'
interface SearchProps {
    text: string
}

const Search : FC<SearchProps> = ({text}) => {
    const context = useBooks()

    function loadMore(){
        context.loadBooks(text)
    }

    return (
        <>
            <BooksList />
            <TouchableOpacity onPress={() => {loadMore()} }> <Text> Load more </Text> </TouchableOpacity>
        </>
    )
}

export default Search;