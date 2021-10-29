const Recipe = require('../models/Recipe')

module.exports = {
    index(req,res){
        Recipe.all(function(recipes){
            return res.render("recipes/index", {recipes})
        })
    },
    create(req,res){
        return res.render("recipes/create")
    },
    post(req,res){
        
        const keys = Object.keys(req.body)
            // Validando as chaves

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("Por favor, preencha todos os campos")
            }
        }
    },
    show(req,res){
        Recipe.find(req.params.id, function(recipe){
            if(!recipe) return res.send("recipe not found!")
            
            recipe.ingredients = recipe.ingredients.split(";")
            recipe.preparation = recipe.preparation.split(";")
            return res.render("recipes/show", {recipe})
        })
    },
    edit(req,res){
        let {id} = req.params;

        let foundRecipe = data.dogs.find(function(dog){
            return dog.id == id
        })
    
        if (!foundDog){
            return res.send("doggy not found...")
        }
        
        return res.render("dogs/edit", {dog: foundDog})
    },
    put(req,res){
        const keys = Object.keys(req.body)
        // Validando as chaves

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("Por favor, preencha todos os campos")
            }
        }
        return
    },
    delete(req,res){
        return
    }
    
}
