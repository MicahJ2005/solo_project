const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
// var async = require('async');

router.post('/', (req, res) => {
    
    const queryText = `INSERT INTO "completed_tasks" 
                        ("task_name", "student_id", "note")
                       VALUES ($1, $2, $3)`;
                    
    pool.query(queryText, [req.body.taskName, req.body.taskUserId, req.body.note])
        .then((results) => {
            res.sendStatus(201);
         }).catch((error) => {
                console.log(error);
                res.sendStatus(500);
        })
});

module.exports = router;