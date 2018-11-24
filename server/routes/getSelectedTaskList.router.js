const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
// var async = require('async');

router.get('/:id', (req, res) => {
    console.log('req.params.id in GET TASK LIST', req.params);
  
    let reqId = req.params.id;
    console.log('GET SELECTED TASK LIST request for id', reqId);
    
    const queryText = `SELECT * FROM tasks WHERE student_id=${reqId};`;
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT tasks query', err);
        res.sendStatus(500);
      });
  });

module.exports = router;