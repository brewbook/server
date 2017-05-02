const mongoose = require('../config/database');

const Brew = mongoose.Schema({
    malts: [{}],
    hops: [{}],
    adjuncts: [{}],
    dates: {
        brewed: Date,
        secondary: Date,
        packaged: Date,
        fridge: Date
    }
});

module.exports = mongoose.model('Brew', Brew);
