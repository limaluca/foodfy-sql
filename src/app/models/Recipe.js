const db = require('../../config/db')


module.exports = {
    all(callback){
        db.query(`SELECT * FROM recipes`, function(err,results){
            if(err) throw `index: Database error! ${err}`
         
            callback(results.rows)
        })
    },
    find(id,callback){
        db.query(`SELECT recipes.*
                FROM recipes
                WHERE recipes.id=$1`, [id], function(err,results){
            if(err){
                console.log(`Find: Database error! ${err}`)
                return
            }
            return callback(results.rows[0])
        })
    },
}