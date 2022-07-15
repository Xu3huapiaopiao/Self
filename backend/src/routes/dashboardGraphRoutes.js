const router = require('express').Router();
const graphData = require('../controllers/dashboardGraphController');

router.get('/topawarded/:year', graphData.topAwarded);

router.get('/topparentagency/:year', graphData.topParentAgency);

router.get('/topbidded/:year', graphData.topBidded);

module.exports = router;