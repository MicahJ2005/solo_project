const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
// var async = require('async');

router.get('/:id', (req, res) => {
  console.log('req.params.id', req.params.id);
  
    let reqId = req.params.id;
    console.log('GET TAGS request for id', reqId);
    
    const queryText = `SELECT * FROM student_info WHERE id=${reqId}`;
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT project query', err);
        res.sendStatus(500);
      });
  });

module.exports = router;