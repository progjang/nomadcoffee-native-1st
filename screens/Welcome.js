import React from "react";
import styled from "styled-components/native";
import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../colors";

const Container = styled.View`
    flex:1;
    background-color: white;
    justify-content: center;
    align-items: center;
    padding: 0px 40px;
`;

const Logo = styled.Image`
    max-width: 50%;
    height: 100px;
`;

const CreateAccount = styled.TouchableOpacity`
    background-color: ${colors.blue};
    margin-top: 20px;
    padding: 10px 10px;: 
    border-radius: 7px;
    width: 100%;
    opacity: ${(props) => (props.disabled?"0.5":"1")}

`;
const CreateAccountText = styled.Text`
    color: white;
    font-weight: 600;
    font-size: 16px;
    text-align: center;

`;
const LoginLink = styled.Text`
    color: ${colors.blue};
    margin-top: 20px;
    font-weight: 600;
`;

export default function Welcome({navigation}){
    const goToCreateAccount = () => navigation.navigate("CreateAccount");
    const goToLogin = () => navigation.navigate("LogIn");
    return (
        <Container>
            <Logo resizeMode="contain" source={require("../assets/insta-logo.png")} />
            <CreateAccount disabled={false} onPress={goToCreateAccount}>
                <CreateAccountText>Create New Account</CreateAccountText>
            </CreateAccount>

            <TouchableOpacity onPress={goToLogin}>
            <LoginLink>Log in</LoginLink>
            </TouchableOpacity>

        </Container>


    );

}