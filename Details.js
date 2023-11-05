import React from 'react';
import { View, StyleSheet, Image, SafeAreaView, Pressable,Text , ScrollView } from 'react-native';
import Colors from '../components/colors';
import { FontAwesome } from "@expo/vector-icons";


const Details = ({ navigation, route})=>{
	const {item} = route.params;
	return (
		<>
		<View style={{backgroundColor: item.color, flex:1 }}>
<SafeAreaView style={{marginHorizontal:20, flexDirection:'row'}}>
	<Pressable style={{flex:1}}
	onPress={()=> navigation.goBack()}
	>
	<FontAwesome name= 'arrow-circle-left' size={30}></FontAwesome></Pressable>
	<FontAwesome name ="heart-o" size={30} ></FontAwesome>
</SafeAreaView>


		<View style ={{backgroundColor:'yellow',flex:1, 
		 borderTopLeftRadius: 50,
		 borderTopRightRadius:50, 
		 marginTop:200,
		 alignItems:'center',
		 paddingHorizontal : 16
		 }}>
			<View style={{
				width:240, height:240,
				top: -140,
				position:'absolute'
				}}>

					<Image source={item.image} style={{
width:'100%', height:'100%', borderRadius:88, resizeMode:'contain'
					}}></Image>

			</View>
			<Text style={{
				fontSize : 20,
				fontWeight : 'bold',
				marginTop :110,				
			}}>{item.name}</Text>
			<View style={{ flex: 1 }}>
					<ScrollView showsVerticalScrollIndicator={false}>
					
						<Text style={{ fontSize: 18, marginVertical: 13 }}>
							{item.description}
						</Text>

						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								}}
						>
							<View
								style={{
									backgroundColor: "rgba(255, 0, 0, 0.38)",
									paddingVertical: 23,
									borderRadius: 8,
									alignItems: "center",
									width: 100,
								}}
							>
								<Text style={{ fontSize: 40 }}>⌚</Text>
								<Text style={{ fontSize: 20, fontWeight: 400 }}>
									{item.time}
								</Text>
							</View>
							<View
								style={{
									backgroundColor: "rgba(135, 206, 235, 0.8)",
									paddingVertical: 23,
									borderRadius: 8,
									alignItems: "center",
									width: 100,
									
								}}
							>
								<Text style={{ fontSize: 40 }}>🍲</Text>
								<Text style={{ fontSize: 20, fontWeight: 400 }}>
									{item.difficulty}
								</Text>
							</View>
							<View
								style={{
									backgroundColor: "rgba(255, 165, 0, 0.48)",
									paddingVertical: 23,
									borderRadius: 8,
									alignItems: "center",
									width: 100,
								}}
							>
								<Text style={{ fontSize: 40 }}>😅</Text>
								<Text style={{ fontSize: 20, fontWeight: 400 }}>
									{item.calories}
								</Text>
							</View>
						</View>

						<View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
							<Text
								style={{ fontSize: 20, fontWeight: "500", marginBottom: 6 }}
							>
								Ingredients:
							</Text>

							{item.ingredients.map((ingredient, index) => {
								return (
									<View
										style={{
											flexDirection: "row",
											alignItems: "center",
											marginVertical: 4,
										}}
										key={index}
									>
										<View
											style={{
												backgroundColor: "red",
												height: 10,
												width: 10,
												borderRadius: 5,
											}}
										></View>
										<Text style={{ fontSize: 18, marginLeft: 6 }}>
											{ingredient}
										</Text>
									</View>
								);
							})}
						</View>

						
						<View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
							<Text
								style={{ fontSize: 20, fontWeight: "500", marginBottom: 6 }}
							>
								Steps:
							</Text>

							{item.steps.map((step, index) => {
								return (
									<Text
										key={index}
										style={{ fontSize: 17, marginLeft: 6, marginVertical: 6 }}
									>{`${index + 1} ) ${step}`}</Text>
								);
							})}
						</View>
					</ScrollView>
				</View>

			</View></View> 
		</>
	)
};
export default Details;

const style = StyleSheet.create({});
