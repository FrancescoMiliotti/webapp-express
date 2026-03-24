const db = require ("../data/db");

function index(eq, res) {

    const sqlQuery = "SELECT * FROM movies";
    db.query(sqlQuery, (err, result) => {
        if (err) {
            return res.status(500).json({
                error: "Database error",
                message: err.message
            })
        }

        res.json(result);
    })

}

function show(eq, res){


}


module.exports = {index, show};