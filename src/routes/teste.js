const express = require('express');
const testeControllers = require('../controllers/testeControllers');
const router = express.Router();



router.post('/', testeControllers.create);

module.exports = router;




// // quebrou aqui