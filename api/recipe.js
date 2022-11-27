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

router.get("/:id", (req, res) => {
    food = {food: req.params.id}
    res.json(food);

})
/*
router.post("/", (req, res) => {
    poems.push(req.body);
    
    fs.writeFile("./data/poems.json", JSON.stringify(poems), err => {
        if(err) {
            console.log(err);
            return;
        }
        console.log("Data saved!");
    })
    res.send(req.body);
    //console.log("Poem: " + JSON.stringify(req.body) + " added!");
}) 

*/

module.exports = router;
