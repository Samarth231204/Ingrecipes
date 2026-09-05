// my-page.js
// This module provides a simple recipe selector that uses the searcher API
// to fetch recipes based on a query string. It can be imported from anywhere
// in the project.

export async function selectRecipes(query) {
  if (!query) {
    throw new Error('Query must be provided');
  }

  const response = await fetch(`/api/recipes/search?q=${encodeURIComponent(query)}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch recipes: ${response.statusText}`);
  }

  const data = await response.json();
  // Assume the API returns an array of recipe objects
  return data.recipes || [];
}
