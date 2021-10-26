const express = require('express')
const routes = express.Router()
const recipes = require("./app/controllers/recipes")



routes.get("/", recipes.index)

routes.get("/recipes", recipes.index)


routes.get("/recipes/create", recipes.create)


routes.post("/recipes", recipes.post)

routes.get("/recipes/:id", recipes.show)

routes.get("/recipes/:id/edit", recipes.edit)

routes.put("/recipes", recipes.put)

routes.delete("/recipes", recipes.delete)


module.exports = routes;