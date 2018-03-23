const router = require('express').Router();
const projects = require('./projects.json');
const skills = require('./skills.json');

router.get('/projects', function(req, res) {
  res.send(projects);
});

router.get('/skills', function(req, res) {
  res.send(skills);
});

module.exports = router;
