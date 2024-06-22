
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

const username = fs.readFileSync('github_username.txt', 'utf8').trim()

module.exports = {
    SESSION_ID:  process.env.PRABATH-MD~YulwxLJa#Jshm3c0DLiuc3t9KP1QGK5k0W5preTp4a_X7ISBzRh8,    
    BOT_NUMBER:  process.env.947175236988,
    GITHUB_USERNAME: buste12,
    GITHUB_AUTH_TOKEN: process.env.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,
};
