import React from 'react';
import { FlatList, View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { recipeList } from '../Data';
import Colors from './colors';
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';


const RecipeCart = () => {
    const navigation = useNavigation();
    return(
        <>
        <View>
            <FlatList data={recipeList} renderItem={({item}) => (
            <Pressable
            onPress={() => navigation.navigate("Details", {item: item})}
            style={{
                backgroundColor: Colors.red,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 5,
                borderRadius: 16,
                marginVertical: 12,
                alignItems: "center",
                paddingHorizontal: 5,
                paddingVertical: 20,
            }}
        >
            <Image
                source={item.image}
                style={{ width: 150, height: 140, resizeMode: "center",borderRadius:50 }}
            />
            <Text>{item.name}</Text>
            <View style={{ flexDirection: "row", marginTop: 6}}>
                <Text>{item.time}</Text>
                <Text> | </Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ marginRight: 4 }}>{item.rating}</Text>
                    <FontAwesome
                        name="star"
                        size={16}
                        color={Colors.dark}
                    />
                </View>
            </View>
        </Pressable>
    )}
    numColumns={2}
    columnWrapperStyle={{
        justifyContent: "space-between",
    }}
    showsVerticalScrollIndicator={false}
/>
</View>

        </>
    );
};
export default RecipeCart;

const style = StyleSheet.create({});