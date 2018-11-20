const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
// var async = require('async');

router.post('/', (req, res) => {
    console.log(req.body);
    const queryText1 = `INSERT INTO "student_info" 
                        ("name", "student_pic")
                       VALUES ($1, $2) RETURNING id;`;
                    
    const queryText2 = `INSERT INTO "user_student" 
                       ("user_id", "student_id")
                       VALUES ($1, $2);`;
    pool.query(queryText1, [req.body.name, req.body.student_pic])
        .then((results) => {
            console.log('pool results', results.rows);
            
            pool.query(queryText2, [req.body.user_id, results.rows[0].id])
            .then((results) => {
                res.sendStatus(201);
            })
            .catch((error) => {
                console.log(error);
                res.sendStatus(500);
            })
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
    
});

module.exports = router;