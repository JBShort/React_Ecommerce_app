const Items = require("../models/items.model");

module.exports = {
    // find all items
    findAll: (req, res) => {
        Items.find()
            .then(allItems => {
                console.log(allItems);
                res.json(allItems);
            })
            .catch(err => {
                console.log("error: ", err);
                res.status(400).json(err);
            })
    },

    // find single item
    findOne: (req, res) => {
        Items.findOne({ _id: req.params.id })
            .then(singleItem => {
                console.log("Single Item: ", singleItem);
                res.json(singleItem);
            })
            .catch(err => {
                console.log("error: ", err)
                res.status(400).json(err);
            })
    },
}