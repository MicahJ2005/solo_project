const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


router.post('/', (req, res) => {
    const queryText = `INSERT INTO "tasks" 
                        ("task_name", "student_id", "image")
                       VALUES ($1, $2, $3)`;
                    
    pool.query(queryText, [req.body.task_name, req.body.student_id, req.body.image])
        .then((results) => {
            res.sendStatus(201);
         }).catch((error) => {
                console.log(error);
                res.sendStatus(500);
        })
});

module.exports = router;