const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.put('/', (req, res) => {
    const reqId = req.body.id
    const newNote = req.body.note;
    const queryText = `UPDATE "completed_tasks"
    SET note = ($1)
    WHERE id=${reqId};`; 
    
    const queryValues = [
        newNote.note,
    ];
    pool.query(queryText, queryValues)
      .then(() => { res.sendStatus(201); })
      .catch((error) => {
        console.log('Error completing SELECT project query', error);
        res.sendStatus(500);
      });
  });

  module.exports = router;