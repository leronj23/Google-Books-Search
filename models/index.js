var db = require("../config");
    
    // /**
    //  * nytSportsModel.load()
    //  */
    // load: function (req, res) {

    //     db.Book.find({ saved: false })
    //         .then(function (dbArticle) {

    //             if (dbArticle.length == 0) {
    //                 res.render("noArticles");
    //             }
    //             else {
    //                 console.log(dbArticle)
    //                 res.render("index", { dbArticle });
    //             }
    //         })
    //         .catch(function (err) {
    //             // If an error occurred, send it to the client
    //             res.json(err);
    //         });
    // },