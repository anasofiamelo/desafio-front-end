import React from 'react';
import { Text, View, Button } from 'react-native';
import * as AuthSession from 'expo-auth-session';


const Login = () => {

    async function handleSignIn(){
        const clientId = '93158673040-9acpqkvoj1itc41tpgdt2dpu3lvaq6me.apps.googleusercontent.com';
        const redirectURI = 'https://auth.expo.io/@anasofiamelo/booksapp';
        // const redirectURI = 'https://localhost:19006/login';
        const responseType = 'token';
        const scope = encodeURI('profile email');
        // https://accounts.google.com/o/oauth2/v2/auth?client_id=582851744741-ihn7rtmd7rtbiniusdnies9f9p8ve1br.apps.googleusercontent.com&redirect_uri=https://localhost.19006/auth&response_type=token
        const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectURI}&response_type=${responseType}&scope=${scope}`
        const response = await AuthSession.startAsync({authUrl})
        console.log(response)
    }

    return (
        <View>
            <Text> textInComponent </Text>
            <Button title='entrar c gooogle' onPress={() => handleSignIn()}/>
        </View>
    )
    
}

export default Login;
