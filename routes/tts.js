﻿'use strict';
var express = require('express');
const say = require('say')

// Use default system voice and speed

var router = express.Router();

/* GET TTS page. */
router.get('/', function (req, res) {
    res.render('tts', {
        title: 'Text To Speech'
    });
});

router.post('/', function (req, res) {
    console.log('submitted');
    console.log(req.body.ttsField);
    say.speak(req.body.ttsField);
    res.redirect('/tts');
    return;
})
module.exports = router;
