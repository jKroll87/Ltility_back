const express = require('express');
const router = express.Router();
const parseSkillCooldown = require("../parseSkillCooldown.js");

router.get('/rank', async (req, res) => {
    let entries = await parseSkillCooldown.getLeagueEntries('challenger');
    res.send(entries);
});

module.exports = router;