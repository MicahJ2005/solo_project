const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
// var async = require('async');

router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM student_info;';
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT tasks query', err);
        res.sendStatus(500);
      });
  });

module.exports = router;