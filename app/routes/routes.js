const controller = require('../controllers/controller');

module.exports = (app) => {

    app.get('/', (req, res) => res.json({message: "Make interface definition"}));
    app.get('/v4', controller.v4);

    app.all('*', (req, res) => res.send('found'));

    return app;
};
