const db = require("../data/db");

function index(req, res) {
    const sqlQuery = "SELECT * FROM movies";
    db.query(sqlQuery, (err, result) => {
        if (err) {
            return res.status(500).json({
                error: "Database error",
                message: err.message
            });
        }
        res.json(result);
    });
}

function show(req, res) {
    const id = req.params.id;
    const sqlQueryMovies = "SELECT * FROM movies WHERE id = ?";
    const sqlQueryReviews = "SELECT * FROM reviews WHERE movie_id = ?";

    db.query(sqlQueryMovies, [id], (err, movies) => {
        if (err) {
            return res.status(500).json({
                error: "Database error",
                message: err.message
            });
        }


        if (movies.length === 0) {
            return res.status(404).json({ error: "Not found", message: "Cannot find that movie" });
        }

        const movie = movies[0];
        console.log("movie iniziale", movie);

        db.query(sqlQueryReviews, [id], (err, reviews) => {
            if (err) {
                return res.status(500).json({
                    error: "Database error",
                    message: err.message
                });
            }

            movie.reviews = reviews;
            res.json(movie);
        });
    });
}

module.exports = { index, show };