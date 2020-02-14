var express = require('express');
var router = express.Router();
const authenticateUser = require('./Controllers/authenticateUser');
/* GET users listing. */

router.route('/authenticateuser').post(
  authenticateUser.authenticate
);

router.route('/tableDetails').get(
  authenticateUser.getTableData
);
router.route('/linktableDetails').get(
  authenticateUser.getLinkTableData
);

module.exports = router;
