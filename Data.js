export const categories = [
	{
		id: "01",
		category: "Fresh Salad",
	},
	{
		id: "02",
		category: "Fast Food",
	},
	{
		id: "03",
		category: "Healthy Food",
	},
	
	{
		id: "04",
		category: "Italian",
	},
	
	{
		id: "05",
		category: "Vegetarian",
	},
	{
		id: "06",
		category: "Seafood",
	},
];

export const recipeList = [
	{
		id: "01",
		name: "Tuna Salad",
		image: require("./assets/freshSalad.jpeg"),
		rating: "4.2",
		ingredients: ["Fresh Tuna", "Lime Juice", "Red Onion", "Avocado"],
		time: "40 mins",
		difficulty: "Medium",
		calories: "420 cal",
		color: "#006A4E",
		description:
			"A delightful and refreshing dish featuring fresh tuna mixed with zesty lime juice and the crunch of red onion and avocado.",
		steps: [
			"Dice the fresh tuna into small cubes.",
			"Finely chop the red onion and avocado.",
			"Mix the tuna, red onion, and avocado in a bowl.",
			"Drizzle lime juice over the mixture and gently toss.",
			"Serve chilled and enjoy!",
		],
	},
	{
		id: "02",
		name: "Lasagna",
		image: require("./assets/LasNoddle.jpeg"),
		rating: "3.6",
		ingredients: [
			"Lasagna Noodles",
			"Ground Beef",
			"Ricotta Cheese",
			"Tomato Sauce",
		],
		time: "40 mins",
		difficulty: "Medium",
		calories: "420 cal",
		color: "#f39c12",
		description:
			"A classic Italian comfort food with layers of lasagna noodles, flavorful ground beef, rich ricotta cheese, and tangy tomato sauce.",
		steps: [
			"Cook the lasagna noodles according to package instructions.",
			"Brown the ground beef in a skillet and season with spices.",
			"Layer the lasagna noodles, beef, ricotta cheese, and tomato sauce in a baking dish.",
			"Repeat the layers and bake in the oven until bubbly and golden.",
			"Let it cool slightly before serving.",
		],
	},
	
		
	{
		id: "03",
		name: "Chicken Cauliflower",
		image: require("./assets/Healthy.jpeg"),
		rating: "3.6",
		ingredients: ["Cauliflower", "Soy Sauce", "Ginger", "Garlic"],
		time: "30 mins",
		difficulty: "Easy",
		calories: "350 cal",
		color: "#d35400",
		description:
			"A popular Indo-Chinese dish featuring crispy cauliflower bites tossed in a flavorful sauce made with soy sauce, ginger, and garlic.",
		steps: [
			"Cut the cauliflower into florets and blanch them.",
			"Prepare a sauce by mixing soy sauce, ginger, and garlic.",
			"Deep-fry or shallow-fry the cauliflower until crispy.",
			"Toss the fried cauliflower in the sauce until well coated.",
			"Garnish with chopped green onions and serve hot.",
		],
	},
	{
		id: "04",
		name: "Chicken",
		image: require("./assets/ChickenRoll.jpg"),
		rating: "2.2",
		ingredients: ["Chicken Breasts", "Salt", "Black Pepper", "Olive Oil"],
		time: "45 mins",
		difficulty: "Medium",
		calories: "450 cal",
		color: "#8d4004",
		description:
			"A succulent chicken dish seasoned with a blend of salt and black pepper, then cooked to perfection with a drizzle of olive oil.",
		steps: [
			"Preheat the oven to the specified temperature.",
			"Season the chicken breasts with salt and black pepper.",
			"Heat olive oil in a skillet over medium-high heat.",
			"Sear the chicken breasts on both sides until golden brown.",
			"Transfer the chicken to the oven and bake until cooked through.",
			"Serve hot and enjoy your flavorful chicken!",
		],
	},
		{
		id: "05",
		name: "Veg",
		image: require("./assets/veg.jpg"),
		rating: "4.8",
		ingredients: ["Veg", "Curry Powder", "Coconut Milk", "Spices"],
		time: "55 mins",
		difficulty: "Hard",
		calories: "550 cal",
		color: "#d35400",

		description:
			"A rich and aromatic curry dish featuring tender pieces of meat cooked in a flavorful blend of curry powder, coconut milk, and spices.",
		steps: [
			"Marinate the veg with spices and let it sit for a while.",
			"Heat oil in a large pot and sauté the marinated meat until browned.",
			"Add curry powder and stir to coat the meat.",
			"Pour in coconut milk and bring to a simmer.",
			"Cover and let the curry simmer until the veg is tender and the flavors meld.",
			"Serve the curry with rice or bread and enjoy the deliciousness!",
		],
	},
	{
		id: "06",
		name: "Sea Food",
		image: require("./assets/seafood.jpeg"),
		rating: "4.2",
		ingredients: ["Ramen Noodles", "Soy Sauce", "Eggs", "Vegetables"],
		time: "35 mins",
		difficulty: "Easy",
		calories: "400 cal",
		color: "#f96163",
		description:
			"A comforting bowl of ramen featuring slurp-worthy noodles, a savory soy sauce-based broth, tender vegetables, and perfectly boiled eggs.",
		steps: [
			"Boil the ramen noodles according to package instructions.",
			"In a pot, bring water to a simmer and add soy sauce for the broth.",
			"Add chopped vegetables and let them cook until tender.",
			"Boil eggs to your desired doneness, then peel and slice them.",
			"Assemble the ramen bowls by placing cooked noodles, vegetables, and egg slices.",
			"Ladle the hot broth over the ingredients and get ready to enjoy your homemade ramen!",
		],
	},
];
