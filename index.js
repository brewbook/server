const app = require('express')();

const routes = require('./routes');

app.use('/', routes)

app.listen(4000, () => {
    console.log('listening on port 4000');
});
