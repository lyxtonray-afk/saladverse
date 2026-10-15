/**
 * ==============================================================================
 * Salad Recipe Catalog - Main Script (app.js)
 * Web Technologies Mini Project
 * ==============================================================================
 * This script contains the primary frontend logic:
 * 1. Generating Bootstrap 5 recipe cards dynamically from JavaScript objects
 * 2. Rendering 4 featured salads on the Home page (index.html)
 * 3. Reading URL parameters and rendering full recipe details (details.html)
 * ==============================================================================
 */

/**
 * Creates the HTML string for a single Bootstrap recipe card.
 * @param {object} recipe - The recipe object from recipes.js
 * @returns {string} Bootstrap card HTML markup
 */
function createRecipeCard(recipe) {
  const isFav = isFavorite(recipe.id);
  const favBtnText = isFav ? "♥ Saved" : "♡ Favorite";
  const favBtnClass = isFav ? "btn-danger" : "btn-outline-danger";

  return `
    <div class="col-12 col-md-6 col-lg-4 mb-4">
      <div class="card recipe-card h-100">
        <img
          src="${recipe.image}"
          alt="${recipe.name}"
          onerror="this.onerror=null; this.src='images/salad-placeholder.svg';"
        />
        <div class="card-body d-flex flex-column">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <span class="badge bg-secondary">${recipe.category}</span>
            <small class="text-muted">${recipe.prepTime} | ${recipe.calories}</small>
          </div>
          <h5 class="card-title text-dark-green">${recipe.name}</h5>
          
          <div class="mt-auto pt-3 d-flex gap-2">
            <a href="details.html?id=${recipe.id}" class="btn btn-sm btn-dark-green flex-grow-1">
              View Details
            </a>
            <button
              type="button"
              class="btn btn-sm ${favBtnClass}"
              id="card-fav-btn-${recipe.id}"
              onclick="toggleFavorite(${recipe.id})"
            >
              ${favBtnText}
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Renders 4 featured recipes on the Home Page (index.html)
 */
function renderFeaturedRecipes() {
  const container = document.getElementById("featured-recipes");
  if (!container) return; // Not on home page

  // Pick first 4 recipes marked as featured
  const featured = saladRecipes.filter(r => r.featured).slice(0, 4);

  let html = "";
  for (let i = 0; i < featured.length; i++) {
    const r = featured[i];
    html += `
      <div class="col-12 col-md-6 col-lg-3 mb-4">
        <div class="card recipe-card h-100">
          <img
            src="${r.image}"
            alt="${r.name}"
            onerror="this.onerror=null; this.src='images/salad-placeholder.svg';"
          />
          <div class="card-body d-flex flex-column">
            <span class="badge bg-secondary mb-2 align-self-start">${r.category}</span>
            <h5 class="card-title text-dark-green">${r.name}</h5>
            <p class="card-text text-muted small">${r.prepTime} | ${r.calories}</p>
            <div class="mt-auto pt-2">
              <a href="details.html?id=${r.id}" class="btn btn-sm btn-dark-green w-100">
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  container.innerHTML = html;
}

/**
 * Renders full recipe details on details.html using the 'id' URL parameter.
 * Example URL: details.html?id=3
 */
function renderRecipeDetails() {
  const container = document.getElementById("recipe-details");
  if (!container) return; // Not on details page

  // Read the 'id' parameter from the current webpage URL
  const params = new URLSearchParams(window.location.search);
  const recipeId = params.get("id");

  if (!recipeId) {
    container.innerHTML = `
      <div class="alert alert-warning">
        No recipe selected. <a href="recipes.html">Click here to browse all recipes.</a>
      </div>
    `;
    return;
  }

  // Find the matching recipe in recipes.js
  const recipe = getRecipeById(recipeId);

  if (!recipe) {
    container.innerHTML = `
      <div class="alert alert-danger">
        Recipe not found! <a href="recipes.html">Back to Recipes</a>
      </div>
    `;
    return;
  }

  // Check if currently favorited
  const isFav = isFavorite(recipe.id);
  const favBtnClass = isFav ? "btn-danger" : "btn-outline-danger";
  const favBtnText = isFav ? "Remove from Favorites" : "Add to Favorites";

  // Build ingredients list HTML
  let ingredientsList = "";
  for (let i = 0; i < recipe.ingredients.length; i++) {
    ingredientsList += `<li class="list-group-item">${recipe.ingredients[i]}</li>`;
  }

  // Build preparation steps HTML
  let stepsList = "";
  for (let i = 0; i < recipe.steps.length; i++) {
    stepsList += `<li class="mb-2"><strong>Step ${i + 1}:</strong> ${recipe.steps[i]}</li>`;
  }

  // Inject full detail view into container
  container.innerHTML = `
    <div class="card bg-light border p-4">
      <div class="row g-4">
        <!-- Left: Image -->
        <div class="col-12 col-md-5">
          <img
            src="${recipe.image}"
            alt="${recipe.name}"
            class="details-img"
            onerror="this.onerror=null; this.src='images/salad-placeholder.svg';"
          />
        </div>

        <!-- Right: Recipe Info -->
        <div class="col-12 col-md-7">
          <span class="badge bg-secondary mb-2">${recipe.category}</span>
          <h2 class="text-dark-green mb-3">${recipe.name}</h2>
          
          <div class="row g-2 mb-4">
            <div class="col-6">
              <div class="p-2 border rounded bg-white text-center">
                <small class="text-muted d-block">Preparation Time</small>
                <strong>${recipe.prepTime}</strong>
              </div>
            </div>
            <div class="col-6">
              <div class="p-2 border rounded bg-white text-center">
                <small class="text-muted d-block">Calories</small>
                <strong>${recipe.calories}</strong>
              </div>
            </div>
          </div>

          <div class="mb-3">
            <button
              type="button"
              id="fav-btn-${recipe.id}"
              class="btn ${favBtnClass}"
              onclick="toggleFavorite(${recipe.id})"
            >
              ${favBtnText}
            </button>
            <a href="recipes.html" class="btn btn-outline-secondary ms-2">
              Back to Recipes
            </a>
          </div>
        </div>
      </div>

      <hr class="my-4" />

      <!-- Ingredients & Steps -->
      <div class="row g-4">
        <div class="col-12 col-md-5">
          <h4 class="text-dark-green mb-3">Ingredients</h4>
          <ul class="list-group">
            ${ingredientsList}
          </ul>
        </div>

        <div class="col-12 col-md-7">
          <h4 class="text-dark-green mb-3">Preparation Steps</h4>
          <ol class="ps-3">
            ${stepsList}
          </ol>
        </div>
      </div>
    </div>
  `;
}

// Run functions on page load
document.addEventListener("DOMContentLoaded", function () {
  renderFeaturedRecipes();
  renderRecipeDetails();
});
