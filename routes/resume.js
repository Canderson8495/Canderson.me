﻿'use strict';
var express = require('express');
var router = express.Router();

/* GET About page. */
router.get('/', function (req, res) {
    res.render('resume', {
        title: 'Resume'
    });
});

module.exports = router;
