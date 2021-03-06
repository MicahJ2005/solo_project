const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/:id', (req, res) => {
    let reqId = req.params.id;
    const queryText = `SELECT * FROM student_info WHERE id=${reqId}`;
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT project query', err);
        res.sendStatus(500);
      });
  });

module.exports = router;