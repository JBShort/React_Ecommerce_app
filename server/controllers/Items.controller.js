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

    // create new item
    create: (req, res) => {
        Items.create(req.body)
            .then(newItem => {
                console.log("Created new Item: ", newItem);
                res.json(newItem)
            })
            .catch(err => {
                console.log("error: ", err)
                res.status(400).json(err);
            })
    },

    // update item
    update: (req, res) => {
        Items.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then(updatedItem => {
                console.log("updated Item: ", updatedItem)
                res.json(updatedItem)
            })
            .catch(err => {
                console.log("Error on updating: ", err)
                res.json(400).json(err);
            })
    },

    // delete a item
    deleteSingle: (req,res) => {
        console.log("yeeting: ", req.params.id);
        Items.deleteOne({ _id: req.params.id })
            .then(result => res.json({result: result}))
            .catch(err => res.status(400).json({message: "deletion error", error: err}))
    }
}