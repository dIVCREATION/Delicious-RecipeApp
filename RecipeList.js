import React from 'react'
import { SafeAreaView, Text, View, StyleSheet } from 'react-native'
import Search from '../components/Search';
import Colors from '../components/colors';
import RecipeCatgry from '../components/RecipeCatgry';
import RecipeCart from '../components/RecipeCart';
import Header from '../components/Header';
import Deatils from './Details';

const RecipeList = () => {
  return (
    <>
    <SafeAreaView style={{flex:1, marginHorizontal:16, marginTop:10}}>
    <Header headerText = {"Hi..."} headerIcon = "bell-o"></Header>
    <Search icon = "search" placeholder={"Enter your recipe name "}></Search>
    <View style={{marginTop : 10}} >
      <Text style={{fontSize: 22, fontWeight: 500}}>Catagory</Text>
     <RecipeCatgry></RecipeCatgry>
     </View>
    
    <View style={{marginTop : 22, flex:1}} >
      <Text style={{fontSize: 22, fontWeight: 500}}>Recipes</Text>
     <RecipeCart></RecipeCart>
      
    </View>
    
    
      
    


    </SafeAreaView>
    </>
  )
}

export default RecipeList;

const style = StyleSheet.create({});