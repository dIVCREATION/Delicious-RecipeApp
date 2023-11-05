import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../components/colors"

const Welcome = ({ navigation }) => {
	return (
		<>
		<ImageBackground
		style={{ flex: 1 }}
		source={require("../assets/main.jpg")}
	  >
		<View style={{ flex: 1, backgroundColor: Colors.black, opacity: 0.2 }} />
		<View
		  style={{
			position: "absolute",
			height: "100%",
			zIndex: 2,
			width: "100%",
			justifyContent: "flex-end",
			paddingHorizontal: 20,
			paddingBottom: 50
		  }}
		>
		  <View>
			<Text
			  style={{
				color: Colors.white,
				fontWeight: "800",
				fontSize:  35,
				textTransform: "capitalize",
				marginBottom: 60
			  }}
			>
			  Let your favorite Recipe find you...
			</Text>
			

			<TouchableOpacity
				onPress={() => navigation.navigate("recipeList")}
				style={{
					backgroundColor: Colors.red,
					borderRadius: 18,
					paddingVertical: 18,
					width: "100%",
					alignItems: "center",
				}}
			>
				<Text style={{ fontSize: 18, color: Colors.white, fontWeight: "700" }}>
					Let's Go
				</Text>
			</TouchableOpacity>
		</View>
		</View>
		</ImageBackground></>
	);
};

export default Welcome;

const styles = StyleSheet.create({});
