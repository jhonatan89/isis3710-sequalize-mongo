var express = require('express');
var router = express.Router();
const {getAllUsers} = require('../controllers/user.controller');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const users = await getAllUsers();
  res.json(users);
});
/* router.post('/', async function(req, res, next) {
  const userSaved = await addUser(req.body);
  res.json(userSaved);
}); */

module.exports = router;
