const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const cusers_controller = require('../controllers/cusers.controller');
// a simple test url to check that all of our files are communicating correctly.
router.post('/add', cusers_controller.user_create);
router.post('/', cusers_controller.users);
module.exports = router;