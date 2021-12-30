import React, { FC, useState } from 'react';
//react native imports
import { View, TextInput, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
//style imports
import { containers, inputs, texts } from '../styles/index';
import Icon from 'react-native-vector-icons/Ionicons'
import useDebounce from '../hooks/useDebounce'
interface SearchInput {
    value: string
    onChange: Function
}

const SearchInput : FC<SearchInput> = ({value, onChange}) => {
    const [displayText, setDisplayText] = useState(value)
    const debouncedChange = useDebounce(onChange, 800)

    function handleSearch(e: NativeSyntheticEvent<TextInputChangeEventData>) { 
        setDisplayText(e.nativeEvent.text)
        debouncedChange(e.nativeEvent.text)
    }

    return (
        <View style={inputs.searchInput}>
            <Icon name ="search-outline" size={18} style={{marginLeft: 20, marginRight: 12}}/>
            <TextInput 
                value={displayText}
                onChange={(e) => handleSearch(e)}
                placeholder="Search book"
                style={{height: 40, width: 290}}
            />   
        </View>
    )
}

export default SearchInput;