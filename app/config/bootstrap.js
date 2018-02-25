const bodyParser = require('body-parser');
const helmet = require('helmet');

module.exports = (app) => {

    app.set('trust proxy', 1);
    app.use(helmet());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded( {extended : false} ));

    return app;
};
