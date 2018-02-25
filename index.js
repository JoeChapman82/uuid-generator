if(process.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const path = require('path');
const AWS = require('aws-sdk');
const express = require('express');
const https = require('https');
const fs = require('fs');

const port = process.env.PORT || 3005;
const environment = process.env.NODE_ENV || 'production';
// middleware used for all routes
const bootstrap = require('./app/config/bootstrap');
// routes
const routes = require('./app/routes/routes');
const errorHandler = require('./app/middleware/errorHandler');

const options = {
    key: fs.readFileSync(path.join(__dirname, `app/etc/certs/${environment}.key`)),
    cert: fs.readFileSync(path.join(__dirname, `app/etc/certs/${environment}.crt`)),
};

AWS.config.region = process.env.REGION;
var app = express();
bootstrap(app);
routes(app);
app.use(errorHandler);

https.createServer(options, app).listen(port, () => {
    console.log(`server listening on port ${port} in ${process.env.NODE_ENV} mode`);
});
