const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
// var async = require('async');

router.get('/:id', (req, res) => {
    let reqId = req.params.id; 
    const queryText = `SELECT student_info.id, student_task_profile.* FROM student_task_profile
    JOIN student_info ON student_task_profile.student_id=student_info.id
    WHERE student_task_profile.student_id=${reqId};`;
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT tasks query', err);
        res.sendStatus(500);
      });
  });

module.exports = router;