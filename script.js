document.addEventListener("DOMContentLoaded", () => {
    const recipeCardsContainer = document.getElementById("recipe-cards");
    const searchInput = document.getElementById("search");
    const showAllButton = document.getElementById("show-all");
    const showVegButton = document.getElementById("show-veg");
    const showNonVegButton = document.getElementById("show-non-veg");
    const ratingFilters = document.getElementsByName("rating");
    const mobileDrawer = document.getElementById("mobile-drawer");

    // Sample recipe data (replace with your actual data)
    const recipes = [
        // ... (Your JSON data goes here)
        {
            "name": "Veggie Delight",
            "imageSrc": "https://source.unsplash.com/random?veggies",
            "time": "30 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.2
        },
        {
            "name": "Chicken Grill",
            "imageSrc": "https://source.unsplash.com/random?chicken",
            "time": "45 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.5
        },
        {
            "name": "Cheese Pizza",
            "imageSrc": "https://source.unsplash.com/random?pizza",
            "time": "40 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.1
        },
        {
            "name": "Steak",
            "imageSrc": "https://source.unsplash.com/random?steak",
            "time": "60 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.7
        },
        {
            "name": "Grilled Salmon",
            "imageSrc": "https://source.unsplash.com/random?salmon",
            "time": "50 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.6
        },
        {
            "name": "Tomato Pasta",
            "imageSrc": "https://source.unsplash.com/random?pasta",
            "time": "35 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.0
        },
        {
            "name": "Vegan Salad",
            "imageSrc": "https://source.unsplash.com/random?salad",
            "time": "20 min",
            "type": "veg",
            "isLiked": false,
            "rating": 3.9
        },
        {
            "name": "Fried Chicken",
            "imageSrc": "https://source.unsplash.com/random?friedChicken",
            "time": "55 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.3
        },
        {
            "name": "Mushroom Risotto",
            "imageSrc": "https://source.unsplash.com/random?risotto",
            "time": "45 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.5
        },
        {
            "name": "Burger",
            "imageSrc": "https://source.unsplash.com/random?burger",
            "time": "30 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.2
        },
        {
            "name": "Paneer Tikka",
            "imageSrc": "https://source.unsplash.com/random?paneerTikka",
            "time": "40 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.4
        },
        {
            "name": "BBQ Ribs",
            "imageSrc": "https://source.unsplash.com/random?ribs",
            "time": "70 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.6
        },
        {
            "name": "Caesar Salad",
            "imageSrc": "https://source.unsplash.com/random?caesarSalad",
            "time": "25 min",
            "type": "veg",
            "isLiked": false,
            "rating": 3.8
        },
        {
            "name": "Fish Tacos",
            "imageSrc": "https://source.unsplash.com/random?fishTacos",
            "time": "35 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.3
        },
        {
            "name": "Chocolate Cake",
            "imageSrc": "https://source.unsplash.com/random?chocolateCake",
            "time": "90 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.9
        }
    ];

    // Function to generate recipe cards
    function generateRecipeCards(recipesToDisplay) {
        recipeCardsContainer.innerHTML = "";

        recipesToDisplay.forEach((recipe) => {
            const card = document.createElement("div");
            card.classList.add("recipe-card");
            card.innerHTML = `
                <img src="${recipe.imageSrc}" alt="${recipe.name}">
                <p style="color:#B7B7B7">${recipe.type}</p>
                <h2 id="na">${recipe.name} <p><img src="assets/Frame 28.png" id="star">${recipe.rating}</p></h2>
                <p style="color:red" id="ra">${recipe.time}  <button class="like-button">Like</button></p>
                
            `;

            // Add click event for the like button
            const likeButton = card.querySelector(".like-button");
            likeButton.addEventListener("click", () => {
                recipe.isLiked = !recipe.isLiked;
                // Update the UI to reflect the like status
                likeButton.textContent = recipe.isLiked ? "Unlike" : "Like";
            });

            recipeCardsContainer.appendChild(card);
        });
    }

    // Initial display of all recipes
    generateRecipeCards(recipes);

    // Search functionality
    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredRecipes = recipes.filter((recipe) =>
            recipe.name.toLowerCase().includes(searchTerm)
        );
        generateRecipeCards(filteredRecipes);
    });

    // Recipe type filtering
    showAllButton.addEventListener("click", () => {
        generateRecipeCards(recipes);
    });

    showVegButton.addEventListener("click", () => {
        const vegRecipes = recipes.filter((recipe) => recipe.type === "veg");
        generateRecipeCards(vegRecipes);
    });

    showNonVegButton.addEventListener("click", () => {
        const nonVegRecipes = recipes.filter((recipe) => recipe.type === "non-veg");
        generateRecipeCards(nonVegRecipes);
    });

    // Rating filtering
    ratingFilters.forEach((filter) => {
        filter.addEventListener("change", () => {
            const selectedFilter = filter.value;
            let filteredRecipes = [];

            if (selectedFilter === "above-4.5") {
                filteredRecipes = recipes.filter((recipe) => recipe.rating > 4.5);
            } else if (selectedFilter === "below-4.0") {
                filteredRecipes = recipes.filter((recipe) => recipe.rating < 4.0);
            } else {
                generateRecipeCards(recipes);
                return;
            }

            generateRecipeCards(filteredRecipes);
        });
    });

    // Mobile drawer toggle
    // Implement this functionality based on your design in Figma
});
