const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
// var async = require('async');

router.post('/', (req, res) => {
    console.log(req.body);
    const queryText = `INSERT INTO "student_task_profile" 
                        ("task_name", "image", "student_id")
                       VALUES ($1, $2, $3)`;
                    
    pool.query(queryText, [req.body.task_name, req.body.image, req.body.student_id])
        .then((results) => {
            res.sendStatus(201);
         }).catch((error) => {
                console.log(error);
                res.sendStatus(500);
        })
});

module.exports = router;