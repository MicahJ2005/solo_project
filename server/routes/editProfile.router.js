const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.put('/:id', (req, res) => {
    console.log('PUT req.body', req.body);
    
    const reqId = req.body.profileId
    const newNote = req.body.note;
    const newName = req.body.name;
    const newImage = req.body.student_pic;
    const queryText = `UPDATE student_info 
    SET ("name", "note", "student_pic") 
    = ($1, $2, $3)
    WHERE student_info.id=${reqId};`;
    const queryValues = [
        newNote,
        newName,
        newImage
    ];
    pool.query(queryText, queryValues)
      .then(() => { res.sendStatus(201); })
      .catch((error) => {
        console.log('Error completing SELECT project query', error);
        res.sendStatus(500);
      });
  });

  module.exports = router;