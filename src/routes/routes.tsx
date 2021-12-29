import React, { FC } from 'react'
//navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens 
import { Home, Search, Details, Results } from '../screens/index'

const mainStack = createNativeStackNavigator<RootStackParamList>();

const Routes : FC = () => {
    return (
        <mainStack.Navigator initialRouteName="Home">
            <mainStack.Screen name={"Home"} component={Home}/>
            <mainStack.Screen name={"Search"} component={Search}/>
            <mainStack.Screen name={"Details"} component={Details}/>
            <mainStack.Screen name={"Results"} component={Results}/>
        </mainStack.Navigator> 
    )
}

export default Routes;