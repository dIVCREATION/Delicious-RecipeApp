import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { categories } from "../Data";
import Colors from "./colors";

const Categories = () => {
	return (
		<View>
		<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{categories.map((category, index) => {
					return (
						<View
							key={index}
							style={{
								backgroundColor:
									index === 0 ? Colors.red : Colors.white,
								marginRight: 14,
								borderRadius: 8,
								paddingHorizontal: 10,
								paddingVertical: 10,
								shadowColor: "#000",
								shadowOffset: { width: 0, height: 4 },
								shadowOpacity: 0.1,
								shadowRadius: 5,
								marginVertical: 10,
							}}
						>
							<Text
								style={{
									color: index === 0 && Colors.white,
									fontSize: 16,
								}}
							>
								{category.category}
							</Text>
						</View>
					);
				})}
			</ScrollView>
		</View>
	);
};

export default Categories;

const styles = StyleSheet.create({});
