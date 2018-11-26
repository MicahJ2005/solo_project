const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


router.delete('/:id', (req, res) => {
    let reqId = req.params.id;
    let sqlText = `DELETE FROM tasks WHERE id=$1;`;
    pool.query(sqlText, [reqId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); 
        })
})

module.exports = router;