import React, { FC } from 'react'
//navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screens 
import { Details, Principal } from '../screens/index'
import Login from '../screens/Login'

const mainStack = createNativeStackNavigator<RootStackParamList>();

const Routes : FC = () => {
    return (
        <mainStack.Navigator initialRouteName="Principal">
            <mainStack.Screen options={{headerShown: false}} name={"Details"} component={Details}/>
            <mainStack.Screen options={{headerShown: false}} name={"Principal"} component={Principal}/>
            <mainStack.Screen options={{headerShown: false}} name={"Login"} component={Login}/>
        </mainStack.Navigator> 
    )
}

export default Routes;