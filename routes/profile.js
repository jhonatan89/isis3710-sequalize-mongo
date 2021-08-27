var express = require('express');
var router = express.Router();
const { addProfile, getProfileById } = require('../controllers/profile.controller');


router.post('/', async function(req, res, next) {
  const profile = await addProfile(req.body);
  res.json(profile);
});
router.get('/:id', async function(req, res, next) {
  const profile = await getProfileById(req.params.id);
  res.json(profile);
});


module.exports = router;