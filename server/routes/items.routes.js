const ItemsController = require("../controllers/Items.controller");

// this is the backend routing for axios and postman api calls. Actual web app routing is inside App.js
module.exports = app => {
    app.get('api/items', ItemsController.findAll);
    app.get('api/items/:id', ItemsController.findOne);
    app.post('api/new', ItemsController.create);
    app.put('api/items/update/:id', ItemsController.update);
    app.delete('api/items/delete/:id', ItemsController.deleteSingle);
}