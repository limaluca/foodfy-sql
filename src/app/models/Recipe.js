const db = require('../../config/db')


module.exports = {
    all(callback){
        db.query(`SELECT * FROM recipes`, function(err,results){
            if(err) throw `index: Database error! ${err}`
         
            callback(results.rows)
        })
    }
}