const express = require("express")
const router = express.Router();

// recipe data
const test = {}
const recipes = {
  pasta:
  {
    name: 'Pasta',
    instructions: ['add water', 'add salt', 'boil pasta'],
    ingredients: ['water', 'salt', 'dry pasta'],
  },
  pizza:
  {
    name: 'Pizza',
    instructions: ['set oven to 200', 'put pizza in oven', 'bake for 12 min', "put ketchup on top"],
    ingredients: ["frozen pizza", "ketchup"],
  },

  Casserole:
  {
    name: 'Casserole',
    instructions: ['set oven to 200', 'put cassabox in oven', 'bake for 26 min'],
    ingredients: ["frozen pizza", "ketchup"],
  },
};


router.get('/:food', (req, res) => {
  const food = req.params.food;
  const body = recipes[food];
  if (body) {
    console.log({response:{ body }})
    res.render('index', {'response':{ body }});

  
  } else {
    res.status(200).render('index', {'response':{body:{name:food, instructions:'Recipe not found.'}}});
  }
});

router.post('/', (req, res) => {
  const { name, ingredients, instructions } = req.body;
  
  // check all have value
  if (!name || ingredients.length == 0 || instructions.length == 0) {
    return res.status(400).json({ error: 'Please provide name, ingredients, and instructions.' });
  }

  //add recipe
  recipes[name] = {
    name,
    instructions: instructions,
    ingredients: ingredients,
  };

  console.log(recipes)

  // Return the newly added recipe as a JSON response
  res.status(200).json(recipes[name.toLowerCase()]);
});



module.exports = router;
