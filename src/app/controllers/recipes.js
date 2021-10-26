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
        
        const keys = Object.keys(request.body)
            // Validando as chaves

        for (key of keys) {
            if (request.body[key] == "") {
                return response.send("Por favor, preencha todos os campos")
            }
        }
    },
    show(req,res){
        return
    },
    edit(req,res){
        return
    },
    put(req,res){
        const keys = Object.keys(request.body)
        // Validando as chaves

        for (key of keys) {
            if (request.body[key] == "") {
                return response.send("Por favor, preencha todos os campos")
            }
        }
        return
    },
    delete(req,res){
        return
    }
    
}
