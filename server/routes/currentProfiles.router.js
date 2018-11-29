const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
// var async = require('async');

router.get('/:id', (req, res) => {
  
    let reqId = req.params.id;
    const queryText = `SELECT student_info.*, person.id AS user_id FROM student_info
    JOIN user_student ON student_info.id=user_student.student_id
    JOIN person ON user_student.user_id=person.id
    WHERE user_student.user_id = ${reqId};`;
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT tasks query', err);
        res.sendStatus(500);
      });
  });

module.exports = router;