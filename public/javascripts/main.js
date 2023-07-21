window.addEventListener('DOMContentLoaded', () => {
    const food = 'pizza';
    const apiUrl = `/recipe/${food}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data.response.body.name)
        if (data) {
          const recipe = data.response.body;
          document.getElementById('recipe-name').textContent = recipe.name;
          const instructionsList = document.getElementById('instructions');
          recipe.instructions.forEach(instruction => {
            const li = document.createElement('li');
            li.textContent = instruction;
            instructionsList.appendChild(li);
          });
  
          const ingredientsList = document.getElementById('ingredients');
          recipe.ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            ingredientsList.appendChild(li);
          });
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });