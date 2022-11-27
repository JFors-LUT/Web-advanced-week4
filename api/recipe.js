const express = require("express")
const router = express.Router();
const fs = require("fs");

/*fs.readFile('./data/poems.json', "utf-8", (err, data) => {
    if(err) {
        console.log(err);
        return;
    }
    poems = JSON.parse(data);
    console.log("Data loaded!")
})

router.get("/", (req, res) => {
    res.json(poems);

})*/

router.get("/:food", (req, res) => {
    food = {name: req.params.food, 
            instruction: ["list of strings"],
            ingredients: ["list of strings"]}

    res.json(food);
})



router.post("/:food", (req, res) => {
  /*  poems.push(req.body);
    
    fs.writeFile("./data/poems.json", JSON.stringify(poems), err => {
        if(err) {
            console.log(err);
            return;
        }
        console.log("Data saved!");
    })*/
    listedFood = JSON.stringify(food).split(",")
    postReq = JSON.parse(listedFood);
    console.log(postReq.name)

    //listedFood.replace(/"/,'')
    
    
    res.write("Food name: "+ postReq.name +"<br>"+"Instructions: "+ postReq.instruction +"<br>"+"Ingredients: "+ postReq.ingredients)
    //res.send(req.body);
    res.end()
}) 


module.exports = router;
