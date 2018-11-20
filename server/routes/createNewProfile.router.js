const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.post('/', (req, res) => {
    console.log(req.body);
    const queryText = `INSERT INTO "student_info" 
                        ("name", "student_pic")
                       VALUES ($1, $2);`;
    pool.query(queryText, [req.body.name, req.body.student_pic])
        .then((results) => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
    
});

module.exports = router;