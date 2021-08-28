const express = require('express');
const router = express.Router();

router.get('/animals', function(req, res) {
    res.render('faves/animals', {title: 'Favorite Animals', animals: ['dogs', 'hippos', 'tigers']})
});

router.get('/foods', function(req, res) {
    res.render('hates/foods', {title: 'Favorite Foods', foods: ['mango', 'coconut', 'lilikoi', 'mangosteen']})
});

module.exports = router;