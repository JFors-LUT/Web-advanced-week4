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

  Lasagna:
  {
    name: 'Lasagna',
    instructions: ['set oven to 350', 'put lasagna in oven', 'bake for 8 min','pour milk in glass'],
    ingredients: ["frozen Lasagna", "milk"],
  },
};


router.get('/:food', (req, res) => {
  const acceptHeader = req.headers.accept;
  const food = req.params.food;
  const body = recipes[food];
  if (acceptHeader && acceptHeader.includes('application/xml')){
    res.render('index', {'response': body });
    
  }else if (body) {
    res.json({response: body });
  } else {
    res.status(200).render('index', {'response':{name:food, instructions:'Recipe not found.'}});
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

  
  const body = recipes[name]
  console.log(recipes[name])
  console.log({'response': recipes[name]})

  // Return the newly added recipe as a JSON response
  res.status(200).json({'response': recipes[name] });
});



module.exports = router;
