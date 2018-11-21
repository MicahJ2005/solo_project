const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
// var async = require('async');

router.get('/:id', (req, res) => {
  console.log('req.params.id', req.params.id);
  
    let reqId = req.params.id;
    console.log('GET Individual Tasks request for id', reqId);
    
    const queryText = `SELECT tasks.*, student_info.id FROM tasks
    JOIN student_info ON tasks.student_id=student_info.id
    WHERE tasks.student_id=${reqId};`;
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT project query', err);
        res.sendStatus(500);
      });
  });

module.exports = router;