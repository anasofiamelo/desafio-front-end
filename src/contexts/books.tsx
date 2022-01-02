import React, { createContext, useState, useContext } from 'react';
//API
import API from '../services/API'
import Constants from 'expo-constants';
// const appConfig = Constants.manifest;

const API_KEY_HERE =  'AIzaSyDqDsxT3QgqhlXGpCm0Uz6UmwWYwegjOck';

const BooksContext = createContext<any>({})

export const BooksProvider: React.FC<Props> = ({children}) => {
    const [books, setBooks] = useState([]) //array of 10 books
    const [book, setBook] = useState({}) //one book by id
    const [startIndex, setStartIndex] = useState(0)

    async function loadBooks(query: string){  //load the books information and set to var books (query: search input value)
        const response = await API.get(`?q=${query}&maxResults=40&startIndex=${startIndex}&key=${API_KEY_HERE}`)
        setBooks(response.data.items)
        setStartIndex(+40)
    }

    async function loadBook(bookId: string){ //load one single book (bookId: id of the book)
        const response = await API.get(`/${bookId}`)
        setBook(response.data)
    }
    
    return (
        <BooksContext.Provider value={{loadBooks: loadBooks, loadBook: loadBook, books: books, book: book}}>
            { children }
        </BooksContext.Provider>
    )
}

export function useBooks(){
    const context = useContext(BooksContext)
    return context
}

export default BooksContext