const generateUuid = require('../functions/generateUuid');
const formResponse = require('../functions/formResponse');

module.exports = {
    v4: (req, res) => res.json(formResponse(generateUuid()))
};
