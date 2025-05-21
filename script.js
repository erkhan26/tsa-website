// Recipe database
const recipes = [
    {
        id: 1,
        name: "Fluffy Pancakes",
        category: "breakfast",
        time: 20,
        ingredients: ["eggs", "bread", "fruit"],
        image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Light and fluffy pancakes perfect for weekend breakfasts."
    },
    {
        id: 2,
        name: "Scrambled Eggs",
        category: "breakfast",
        time: 10,
        ingredients: ["eggs"],
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Simple scrambled eggs that are perfect for busy mornings."
    },
    {
        id: 3,
        name: "Grilled Cheese Sandwich",
        category: "lunch",
        time: 15,
        ingredients: ["bread", "cheese"],
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Classic grilled cheese with crispy bread and melted cheese."
    },
    {
        id: 4,
        name: "Easy Garlic Pasta",
        category: "dinner",
        time: 15,
        ingredients: ["pasta", "cheese"],
        image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Simple pasta dish with garlic and parmesan cheese."
    },
    {
        id: 5,
        name: "Cheesy Quesadilla",
        category: "snack",
        time: 10,
        ingredients: ["bread", "cheese", "chicken"],
        image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Quick and cheesy quesadilla that's perfect for snacks."
    },
    {
        id: 6,
        name: "Vegetable Stir Fry",
        category: "dinner",
        time: 25,
        ingredients: ["rice", "vegetables", "chicken"],
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Healthy vegetable stir fry with your choice of protein."
    },
    {
        id: 7,
        name: "Fruit Smoothie",
        category: "snack",
        time: 5,
        ingredients: ["fruit"],
        image: "https://images.unsplash.com/photo-1505576633757-0ac1084af824?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Refreshing fruit smoothie packed with vitamins."
    },
    {
        id: 8,
        name: "Fried Rice",
        category: "dinner",
        time: 20,
        ingredients: ["rice", "eggs", "vegetables"],
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Easy fried rice with leftover rice and vegetables."
    }
];
