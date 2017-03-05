var express = require('express');
var router = express.Router();
var articles = require('../../models/Article.js');

//get route that will return everything from the db
router.get('/api/saved', function (req,res) {
    articles.find({}, function(err, articles) {
        if (err) {
            console.log(err);
        } else {
            console.log(articles)
        }
    });
});

//post route that will input into the database
router.post('/api/saved', function (req,res) {
    var Article = new articles({
        title: req.body.title,
        date: req.body.pub_date,
        url: req.body.web_url
    });

    Article.save(function (err, article) {
        if (err) {
            console.log(err);
       } else {
           res.json('ok');
        }
    });
});

//Delete route that will delete a document from the database
router.delete('/api/saved/:id', function(req, res) {
        articles.findByIdAndRemove(req.params.id, function(err, article) {
            if (err) {
                console.log(err)
            } else {
                res.json('pass');
            }
        });
    });


//get route that is the default route if the routes before it are not hit
router.get('*', function (req, res) {
    var dir = __dirname;
    var dirSplit = dir.split('controller');
    dir = dirSplit[0];

    res.sendFile(dir + 'public/assets/index.html');
});

module.exports = router;
