const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const survey_controller = require('../controllers/survey.controller');
// a simple test url to check that all of our files are communicating correctly.
router.post('/add', survey_controller.addSurvey);
router.post('/update', survey_controller.updateSurvey);
module.exports = router;