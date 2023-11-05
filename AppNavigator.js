import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import RecipeList from '../screen/RecipeList';
import Welcome from '../screen/Welcome';
import { StyleSheet, Text, View } from "react-native";
import Details from '../screen/Details';


const Stack = createNativeStackNavigator();

const AppNavigator = () =>{
    return(
        <>
<NavigationContainer>
    <Stack.Navigator screenOptions = {{HeadersShown: false}}>
        <Stack.Screen name = ' ' component={Welcome}></Stack.Screen>
        <Stack.Screen name = 'recipeList' component = {RecipeList}></Stack.Screen>
        <Stack.Screen name = 'Details' component={Details}></Stack.Screen>
    </Stack.Navigator>
</NavigationContainer>
        </>
    )
}
export default AppNavigator;

const style = StyleSheet.create({});