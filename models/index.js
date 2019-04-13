var db = require("../config");
    
module.exports = {

    save: function (req, res) {

        console.log("req", req.body)

        db.Book
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));


        // db.Book.find({ saved: false })
        //     .then(function (dbArticle) {

        //         if (dbArticle.length == 0) {
        //             res.render("noArticles");
        //         }
        //         else {
        //             console.log(dbArticle)
        //             res.render("index", { dbArticle });
        //         }
        //     })
        //     .catch(function (err) {
        //         // If an error occurred, send it to the client
        //         res.json(err);
        //     });
    }

}