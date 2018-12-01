const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
// var async = require('async');

router.get('/:id', (req, res) => {
    let reqId = req.params.id;
    console.log('GET Individual Tasks request for id', reqId);
    
    const queryText = `SELECT completed_tasks.*, student_info.id FROM completed_tasks
    JOIN student_info ON completed_tasks.student_id=student_info.id
    WHERE completed_tasks.student_id=${reqId}
    ORDER BY date_completed DESC LIMIT 10;`;
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT project query', err);
        res.sendStatus(500);
      });
  });

module.exports = router;