/**
 * ==============================================================================
 * Salad Recipe Catalog - Search & Filter Logic (search.js)
 * Web Technologies Mini Project
 * ==============================================================================
 * This script handles real-time searching and category filtering on recipes.html.
 *
 * Viva Questions & Concepts:
 * 1. How does search work?
 *    We attach an 'input' event listener to the search text box. As the user types,
 *    we convert both the search term and recipe names to lowercase using
 *    toLowerCase() and check for matches using string.includes().
 * 2. How does category filtering work?
 *    We listen to the 'change' event on the <select> dropdown, and filter the
 *    saladRecipes array using the Array.filter() method.
 * ==============================================================================
 */

/**
 * Filters the recipes by search query and category, then renders cards.
 */
function applySearchAndFilter() {
  const searchInput = document.getElementById("search-input");
  const categorySelect = document.getElementById("category-filter");
  const container = document.getElementById("recipes-container");
  const emptyMessage = document.getElementById("no-results-msg");
  const countText = document.getElementById("recipe-count-text");

  if (!container) return; // Not on recipes.html

  const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
  const selectedCategory = categorySelect ? categorySelect.value : "All";

  // Filter the recipes array
  const filtered = saladRecipes.filter(function (recipe) {
    // 1. Check category match
    const matchesCategory =
      selectedCategory === "All" || recipe.category === selectedCategory;

    // 2. Check name match (case-insensitive)
    const matchesSearch =
      query === "" || recipe.name.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  // Update recipe count
  if (countText) {
    countText.textContent = `Showing ${filtered.length} of ${saladRecipes.length} recipes`;
  }

  // Handle empty results
  if (filtered.length === 0) {
    container.innerHTML = "";
    if (emptyMessage) emptyMessage.style.display = "block";
    return;
  }

  if (emptyMessage) emptyMessage.style.display = "none";

  // Build HTML for matching cards using createRecipeCard() from app.js
  let html = "";
  for (let i = 0; i < filtered.length; i++) {
    html += createRecipeCard(filtered[i]);
  }

  container.innerHTML = html;
}

/**
 * Resets search input and category filter back to default.
 */
function resetFilters() {
  const searchInput = document.getElementById("search-input");
  const categorySelect = document.getElementById("category-filter");

  if (searchInput) searchInput.value = "";
  if (categorySelect) categorySelect.value = "All";

  applySearchAndFilter();
}

// Attach event listeners when page loads
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const categorySelect = document.getElementById("category-filter");
  const resetBtn = document.getElementById("reset-btn");

  if (searchInput) {
    // Search updates instantly as the user types
    searchInput.addEventListener("input", applySearchAndFilter);
  }

  if (categorySelect) {
    // Filter updates when a new category is selected
    categorySelect.addEventListener("change", applySearchAndFilter);
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", resetFilters);
  }

  // Initial render of all 15 recipes
  applySearchAndFilter();
});
