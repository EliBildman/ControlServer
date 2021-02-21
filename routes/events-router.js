const express = require('express');
const router = express.Router();

const activity = require('../scheduling/activity');


router.post('/room-active', (req, res) => {
    let d = new Date();
    activity.set_active();
    res.end('OK');
});

module.exports = router;