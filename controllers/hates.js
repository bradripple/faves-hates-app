const express = require('express');
const router = express.Router();

router.get('/animals', function(req, res) {
    res.render('hates/animals', {title: 'Favorite Animals', animals: ['sand crab', 'corny joke dog']})
});

router.get('/foods', function(req, res) {
    res.render('hates/foods', {title: 'Least-Favorite Foods', foods: ['porridge', 'tripe', 'liver', 'balut']})
});


module.exports = router;