import React, { FC } from 'react';
//react native imports
import { View, TouchableOpacity } from 'react-native';
//style imports
import Icon from 'react-native-vector-icons/Ionicons'
//interfaces
import navigate from '../interfaces/navigate'

const BackButton : FC<navigate> = ({navigation}) => {

    function backHome(){
        navigation.goBack(null)
    }

    return (
        <View>
            <TouchableOpacity onPress={() => backHome()}>
                <Icon name="arrow-back-outline" size={30}/>
            </TouchableOpacity>
        </View>
    )
}

export default BackButton;