const express = require("express");
const os = require("os");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));



app.use(express.static(path.join(__dirname, "public")));


/*app.get("/recipe/:id", (req, res) => {
    food = {food: req.params.id}
    res.json(food);

})*/

app.get("/recipe/:food", (req, res) => {
    food = {name: req.params.food, 
            instruction: ["list of strings"],
            ingredients: ["list of strings"]}

    res.json(food);

})

app.use("/recipe", require("./api/recipe.js"));

app.listen(port, () => console.log(`Server listening a port ${port}!`));
