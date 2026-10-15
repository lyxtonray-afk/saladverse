/**
 * ==============================================================================
 * Salad Recipe Catalog - JavaScript Dataset (recipes.js)
 * Web Technologies Mini Project (B.Tech 1st Year)
 * ==============================================================================
 * This file contains a JavaScript array of 15 salad recipe objects.
 * Storing data in an array simulates a local database and allows us to:
 * - Dynamically generate recipe cards using JavaScript DOM manipulation
 * - Search recipes by name using Array.filter() and toLowerCase()
 * - Filter recipes by category
 * ==============================================================================
 */

const saladRecipes = [
  // 1. Weight Loss Salads
  {
    id: 1,
    name: "Cucumber Mint Salad",
    category: "Weight Loss",
    calories: "110 kcal",
    prepTime: "10 mins",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "2 cucumbers, sliced",
      "1/4 cup fresh mint leaves",
      "1/2 red onion, sliced",
      "1 tbsp olive oil",
      "2 tbsp lemon juice",
      "Salt and black pepper to taste"
    ],
    steps: [
      "Wash and thinly slice the cucumbers.",
      "In a small bowl, whisk lemon juice, olive oil, salt, and pepper.",
      "Combine cucumbers, mint, and red onions in a salad bowl.",
      "Pour dressing on top and toss gently before serving."
    ],
    featured: true
  },
  {
    id: 2,
    name: "Lemon Cabbage Slaw",
    category: "Weight Loss",
    calories: "135 kcal",
    prepTime: "12 mins",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "2 cups shredded cabbage",
      "1 grated carrot",
      "2 tbsp fresh cilantro",
      "1 tbsp olive oil",
      "1.5 tbsp lemon juice",
      "Pinch of salt and pepper"
    ],
    steps: [
      "Finely shred cabbage and grate the carrot.",
      "Mix olive oil, lemon juice, salt, and pepper in a cup.",
      "Place vegetables in a bowl, drizzle with dressing, and toss thoroughly."
    ],
    featured: false
  },
  {
    id: 3,
    name: "Spinach Berry Detox Salad",
    category: "Weight Loss",
    calories: "145 kcal",
    prepTime: "10 mins",
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "3 cups fresh baby spinach",
      "1/2 cup sliced strawberries",
      "1/2 cup blueberries",
      "1 tbsp pumpkin seeds",
      "1 tbsp balsamic vinegar",
      "Pinch of salt"
    ],
    steps: [
      "Rinse and dry the fresh spinach leaves.",
      "Add spinach, sliced strawberries, and blueberries to a bowl.",
      "Top with pumpkin seeds and drizzle with balsamic vinegar."
    ],
    featured: false
  },

  // 2. Vegan Salads
  {
    id: 4,
    name: "Quinoa Black Bean Salad",
    category: "Vegan",
    calories: "285 kcal",
    prepTime: "20 mins",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "1 cup cooked quinoa",
      "1 can black beans, rinsed and drained",
      "1/2 cup sweet corn",
      "1 diced bell pepper",
      "2 tbsp lime juice",
      "1 tbsp olive oil",
      "Salt to taste"
    ],
    steps: [
      "Cook quinoa and let it cool completely.",
      "In a bowl, mix cooled quinoa, black beans, corn, and bell pepper.",
      "Whisk lime juice, olive oil, and salt, then toss with the salad."
    ],
    featured: true
  },
  {
    id: 5,
    name: "Avocado Chickpea Salad",
    category: "Vegan",
    calories: "295 kcal",
    prepTime: "15 mins",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "1 can boiled chickpeas",
      "1 ripe avocado, diced",
      "1 cup cherry tomatoes, halved",
      "2 tbsp lemon juice",
      "1 tbsp olive oil",
      "Salt and pepper"
    ],
    steps: [
      "Rinse and drain chickpeas.",
      "Add chickpeas, diced avocado, and halved tomatoes into a bowl.",
      "Pour lemon juice and olive oil on top, season with salt and pepper, and mix gently."
    ],
    featured: false
  },
  {
    id: 6,
    name: "Roasted Sweet Potato Salad",
    category: "Vegan",
    calories: "310 kcal",
    prepTime: "25 mins",
    image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "1 large sweet potato, peeled and cubed",
      "3 cups chopped kale leaves",
      "2 tbsp sunflower seeds",
      "1 tbsp olive oil",
      "1 tbsp lemon juice",
      "Salt to taste"
    ],
    steps: [
      "Roast sweet potato cubes with olive oil in an oven or pan until soft.",
      "Massage raw kale leaves with a pinch of salt until tender.",
      "Combine roasted sweet potatoes with kale and sprinkle sunflower seeds on top."
    ],
    featured: false
  },

  // 3. High Protein Salads
  {
    id: 7,
    name: "Grilled Chicken Salad",
    category: "High Protein",
    calories: "385 kcal",
    prepTime: "20 mins",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "200g boneless chicken breast, grilled and sliced",
      "4 cups chopped lettuce",
      "1/4 cup grated cheese",
      "1/2 cup baked croutons",
      "2 tbsp light yogurt dressing",
      "Black pepper to taste"
    ],
    steps: [
      "Grill the chicken breast until cooked through, then slice into strips.",
      "Place crisp chopped lettuce into a wide salad bowl.",
      "Add grilled chicken slices, croutons, and grated cheese.",
      "Top with light yogurt dressing and freshly cracked black pepper."
    ],
    featured: true
  },
  {
    id: 8,
    name: "Tofu Edamame Crunch Salad",
    category: "High Protein",
    calories: "340 kcal",
    prepTime: "18 mins",
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "150g firm tofu, cubed and pan-fried",
      "1 cup boiled edamame beans",
      "1 cup shredded red cabbage",
      "1 tbsp sesame oil",
      "1 tbsp soy sauce",
      "1 tsp sesame seeds"
    ],
    steps: [
      "Pan-fry tofu cubes until lightly golden.",
      "Steam or boil the edamame beans for 3 minutes.",
      "In a bowl, mix shredded cabbage, edamame, and pan-fried tofu.",
      "Drizzle with sesame oil and soy sauce, then sprinkle sesame seeds."
    ],
    featured: false
  },
  {
    id: 9,
    name: "Boiled Egg & Veggie Salad",
    category: "High Protein",
    calories: "320 kcal",
    prepTime: "12 mins",
    image: "https://images.unsplash.com/photo-1529059997568-3d847b1154f0?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "3 hard-boiled eggs, peeled and cut into halves",
      "1 avocado, sliced",
      "3 cups mixed green leaves",
      "1/2 cup cherry tomatoes",
      "1 tbsp olive oil",
      "Salt and pepper"
    ],
    steps: [
      "Boil eggs in water for 9 minutes, cool in water, and peel.",
      "Arrange leafy greens on a plate as the base.",
      "Add sliced avocado, tomatoes, and egg halves.",
      "Drizzle olive oil, season with salt and pepper."
    ],
    featured: false
  },

  // 4. Fruit Salad
  {
    id: 10,
    name: "Fresh Summer Berry Bowl",
    category: "Fruit Salad",
    calories: "150 kcal",
    prepTime: "10 mins",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "1 cup strawberries, sliced",
      "1/2 cup fresh blueberries",
      "1 orange, peeled and segmented",
      "1 tbsp lemon juice",
      "1 tbsp honey",
      "Fresh mint leaves"
    ],
    steps: [
      "Wash strawberries and blueberries thoroughly.",
      "Peel orange and separate into bite-sized segments.",
      "Combine all fruits in a bowl, drizzle with honey and lemon juice, and garnish with mint."
    ],
    featured: true
  },
  {
    id: 11,
    name: "Watermelon Mint Salad",
    category: "Fruit Salad",
    calories: "175 kcal",
    prepTime: "10 mins",
    image: "https://images.unsplash.com/photo-1561043433-aaf687c4cf04?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "4 cups cubed cold watermelon",
      "1/2 cup crumbled feta cheese",
      "1/4 cup fresh mint leaves",
      "1 tbsp lime juice",
      "Pinch of salt"
    ],
    steps: [
      "Cut cold seedless watermelon into cubes.",
      "Place watermelon cubes on a platter.",
      "Sprinkle crumbled cheese and mint leaves on top, then drizzle with lime juice."
    ],
    featured: false
  },
  {
    id: 12,
    name: "Tropical Mango Pineapple Salad",
    category: "Fruit Salad",
    calories: "165 kcal",
    prepTime: "12 mins",
    image: "https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "1 ripe mango, peeled and diced",
      "1 cup fresh pineapple chunks",
      "1 kiwi, peeled and sliced",
      "1 tbsp orange juice",
      "1 tbsp shredded coconut"
    ],
    steps: [
      "Dice ripe mango and fresh pineapple.",
      "Slice kiwi into round pieces.",
      "Mix all fruits in a bowl with orange juice and sprinkle shredded coconut on top."
    ],
    featured: false
  },

  // 5. Mediterranean Salads
  {
    id: 13,
    name: "Classic Greek Salad",
    category: "Mediterranean",
    calories: "245 kcal",
    prepTime: "15 mins",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "3 tomatoes, cut into wedges",
      "1 cucumber, sliced",
      "1/2 red onion, sliced into rings",
      "1/3 cup black olives",
      "100g feta cheese",
      "2 tbsp olive oil",
      "1 tsp dried oregano",
      "Salt to taste"
    ],
    steps: [
      "Chop tomatoes, cucumbers, and onions into rustic pieces.",
      "Combine them in a bowl with black olives.",
      "Drizzle with olive oil, place feta cheese on top, and sprinkle dried oregano."
    ],
    featured: false
  },
  {
    id: 14,
    name: "Mediterranean Orzo Salad",
    category: "Mediterranean",
    calories: "275 kcal",
    prepTime: "18 mins",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "1.5 cups cooked orzo pasta",
      "1/3 cup sun-dried tomatoes",
      "2 cups baby spinach",
      "2 tbsp olive oil",
      "1 tbsp lemon juice",
      "Salt and black pepper"
    ],
    steps: [
      "Boil orzo pasta until soft, then drain and rinse with cold water.",
      "Mix cooled orzo with sun-dried tomatoes and chopped baby spinach in a bowl.",
      "Add olive oil, lemon juice, salt, and pepper, and stir well."
    ],
    featured: false
  },
  {
    id: 15,
    name: "Crispy Pita Fattoush Salad",
    category: "Mediterranean",
    calories: "230 kcal",
    prepTime: "16 mins",
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "1 pita bread, toasted crispy and broken into pieces",
      "2 cucumbers, diced",
      "2 tomatoes, diced",
      "1/2 cup fresh parsley, chopped",
      "2 tbsp olive oil",
      "1 tbsp lemon juice",
      "Salt to taste"
    ],
    steps: [
      "Toast pita bread in a pan or toaster until crispy, then break into pieces.",
      "Chop cucumbers, tomatoes, and parsley.",
      "Toss vegetables with olive oil, lemon juice, and salt.",
      "Top with crispy pita chips right before serving."
    ],
    featured: false
  }
];

// Fallback image path if network is offline
const FALLBACK_SALAD_IMAGE = "images/salad-placeholder.svg";

/**
 * Helper function to find a recipe by ID
 * @param {number|string} id - The ID of the recipe
 * @returns {object|undefined}
 */
function getRecipeById(id) {
  const numericId = parseInt(id, 10);
  return saladRecipes.find(recipe => recipe.id === numericId);
}
