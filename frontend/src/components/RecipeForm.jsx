import React, { useState } from 'react';
import axios from 'axios';

const RecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/recipes', {
        title,
        ingredients: ingredients.split(',').map(i => i.trim()),
        instructions,
      });
      alert('Recipe saved!');
      setTitle('');
      setIngredients('');
      setInstructions('');
    } catch (err) {
      console.error(err);
      alert('Error saving recipe');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Add Recipe</h2>
      <div>
        <label>Title:</label><br />
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Ingredients (comma separated):</label><br />
        <textarea
          value={ingredients}
          onChange={e => setIngredients(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Instructions:</label><br />
        <textarea
          value={instructions}
          onChange={e => setInstructions(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RecipeForm;
