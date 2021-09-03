var express = require('express');
var router = express.Router();
const {getAllUsers, createUser} = require('../controllers/user.controller');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const users = await getAllUsers();
  res.json(users);
});

/**
 * POST create user
 */
 router.post("/", async function (req, res, next) {
    try {
      const result = await createUser(req.body);
      if (result.success) {
        res.cookie("token", result.token, { httpOnly: true });
        res.status(201).send(result);
      } else {
        res.status(401).send(result);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  
});

module.exports = router;
