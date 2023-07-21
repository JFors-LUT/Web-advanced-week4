const express = require("express")
const router = express.Router();

// recipe data
const test = {}
const recipes = {
  pasta:
  {
    name: 'pasta',
    instructions: ['add water', 'add salt', 'boil pasta'],
    ingredients: ['water', 'salt', 'dry pasta'],
  },
  pizza:
  {
    name: 'pizza',
    instructions: ['set oven to 200', 'put pizza in oven', 'bake for 12 min', "put ketchup on top"],
    ingredients: ["frozen pizza", "ketchup"],
  },
};


router.get('/:food', (req, res) => {
  const food = req.params.food;
  const recipe = recipes[food];
  if (recipe) {
    res.render('index', { recipe });

  
  } else {
    res.status(404).send('Recipe not found');
  }
});

router.post('/', (req, res) => {
  const { name, ingredients, instructions } = req.body;
  
  // check all have value
  if (!name || ingredients.length == 0 || instructions.length == 0) {
    return res.status(400).json({ error: 'Please provide name, ingredients, and instructions.' });
  }

  //add recipe
  recipes[name.toLowerCase()] = {
    name,
    instructions: instructions,
    ingredients: ingredients,
  };

  console.log(recipes)

  // Return the newly added recipe as a JSON response
  res.status(201).json(recipes[name.toLowerCase()]);
});



module.exports = router;
