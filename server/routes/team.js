let express = require('express');
let router = express.Router();

let teamController = require('../controllers/team');

/* GET - display a list of team list */
router.get('/', teamController.displayTeamList)

/* POST - processes to add team */
router.post('/add', teamController.processAddTeam);

module.exports = router;