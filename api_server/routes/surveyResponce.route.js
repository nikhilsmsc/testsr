const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const survey_controller = require('../controllers/surveyResponce.controller');
// a simple test url to check that all of our files are communicating correctly.
router.post('/add', survey_controller.addSurvey);
router.post('/all', survey_controller.surveys_details);
router.get('/:id', survey_controller.survey_details);
router.post('/delete', survey_controller.survey_delete);
module.exports = router;