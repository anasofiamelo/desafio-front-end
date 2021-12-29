import React from 'react';
import { Text } from 'react-native'
//contexts
import { BooksProvider } from './src/contexts/books'
//navigation
import { NavigationContainer } from '@react-navigation/native';
//Routes
import Routes from './src/routes/routes'


function AppStack(){
  return (
    <BooksProvider> 
      <Routes />
    </BooksProvider>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}