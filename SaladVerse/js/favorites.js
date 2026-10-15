/**
 * ==============================================================================
 * Salad Recipe Catalog - Favorites Handler (favorites.js)
 * Web Technologies Mini Project
 * ==============================================================================
 * This file manages the user's favorite recipes using the browser's Local Storage.
 *
 * Viva Questions & Concepts:
 * 1. What is Local Storage?
 *    A Web Storage API that stores key-value pairs in the browser with no expiration date.
 * 2. Why use JSON.stringify() and JSON.parse()?
 *    Local Storage only stores strings. JSON.stringify() converts a JavaScript array
 *    into a string, and JSON.parse() converts the string back into an array.
 * ==============================================================================
 */

// Storage key name for Local Storage
const FAVORITES_KEY = "salad_favorites";

/**
 * Reads the list of favorite recipe IDs from Local Storage.
 * @returns {number[]} Array of favorite recipe IDs
 */
function getFavorites() {
  const data = localStorage.getItem(FAVORITES_KEY);
  if (!data) {
    return [];
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
}

/**
 * Checks if a recipe is currently favorited.
 * @param {number|string} recipeId
 * @returns {boolean}
 */
function isFavorite(recipeId) {
  const id = Number(recipeId);
  const favorites = getFavorites();
  return favorites.includes(id);
}

/**
 * Adds or removes a recipe from favorites.
 * @param {number|string} recipeId
 */
function toggleFavorite(recipeId) {
  const id = Number(recipeId);
  let favorites = getFavorites();

  const index = favorites.indexOf(id);
  if (index === -1) {
    // Add to favorites
    favorites.push(id);
    alert("Recipe added to Favorites!");
  } else {
    // Remove from favorites
    favorites.splice(index, 1);
    alert("Recipe removed from Favorites.");
  }

  // Save updated array to Local Storage
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));

  // Update navbar badge count
  updateFavoritesBadge();

  // Re-render favorites page if user is on favorites.html
  if (document.getElementById("favorites-container")) {
    renderFavoritesPage();
  } else {
    // Update button text on current screen if applicable
    updateFavoriteButtonUI(id);
  }
}

/**
 * Updates button text on Details page
 * @param {number} recipeId
 */
function updateFavoriteButtonUI(recipeId) {
  const btn = document.getElementById("fav-btn-" + recipeId);
  if (btn) {
    if (isFavorite(recipeId)) {
      btn.className = "btn btn-danger";
      btn.textContent = "Remove from Favorites";
    } else {
      btn.className = "btn btn-outline-danger";
      btn.textContent = "Add to Favorites";
    }
  }
}

/**
 * Updates the favorites count badge in the navigation bar.
 */
function updateFavoritesBadge() {
  const badge = document.getElementById("favorites-badge");
  if (badge) {
    const count = getFavorites().length;
    badge.textContent = count;
  }
}

/**
 * Renders the saved favorite recipes on favorites.html
 */
function renderFavoritesPage() {
  const container = document.getElementById("favorites-container");
  const emptyMessage = document.getElementById("favorites-empty-msg");
  const clearBtn = document.getElementById("clear-all-btn");

  if (!container) return; // Not on favorites page

  const favoriteIds = getFavorites();

  // Filter recipes matching saved IDs
  const favRecipes = saladRecipes.filter(r => favoriteIds.includes(r.id));

  if (favRecipes.length === 0) {
    container.innerHTML = "";
    if (emptyMessage) emptyMessage.style.display = "block";
    if (clearBtn) clearBtn.style.display = "none";
    return;
  }

  if (emptyMessage) emptyMessage.style.display = "none";
  if (clearBtn) clearBtn.style.display = "inline-block";

  // Build Bootstrap card HTML for each favorite recipe
  let html = "";
  for (let i = 0; i < favRecipes.length; i++) {
    const r = favRecipes[i];
    html += `
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card recipe-card h-100">
          <img src="${r.image}" alt="${r.name}" onerror="this.onerror=null; this.src='images/salad-placeholder.svg';" />
          <div class="card-body d-flex flex-column">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="badge bg-secondary">${r.category}</span>
              <small class="text-muted">${r.prepTime} | ${r.calories}</small>
            </div>
            <h5 class="card-title text-dark-green">${r.name}</h5>
            <div class="mt-auto pt-3 d-flex gap-2">
              <a href="details.html?id=${r.id}" class="btn btn-sm btn-dark-green flex-grow-1">View Details</a>
              <button type="button" class="btn btn-sm btn-outline-danger" onclick="toggleFavorite(${r.id})">Remove</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  container.innerHTML = html;
}

/**
 * Clears all favorites from Local Storage
 */
function clearAllFavorites() {
  if (confirm("Are you sure you want to clear all your favorites?")) {
    localStorage.removeItem(FAVORITES_KEY);
    updateFavoritesBadge();
    renderFavoritesPage();
  }
}

// Update navbar badge and render favorites when page loads
document.addEventListener("DOMContentLoaded", function () {
  updateFavoritesBadge();
  renderFavoritesPage();
});
