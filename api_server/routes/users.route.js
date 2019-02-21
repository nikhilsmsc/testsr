const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const users_controller = require('../controllers/users.controller');
// a simple test url to check that all of our files are communicating correctly.
router.post('/register', users_controller.user_create);
router.post('/getusers', users_controller.users_details_exceptone);
router.post('/remove', users_controller.user_delete);
router.get('/:id', users_controller.user_details);
router.get('/', users_controller.users_details);
module.exports = router;