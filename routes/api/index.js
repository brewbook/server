const router = require('express').Router();
const Brew = require('../../models/brew');

router.get('/', (req, res) => {
    res.send('ok');
});

router.get('/add', (req, res) => {
    var newBrew = new Brew();
    newBrew.malts.push({name:'2-Row', amount: 4, unitOfMeasurement: 'lb'})
    res.send(newBrew);
});

module.exports = router;
