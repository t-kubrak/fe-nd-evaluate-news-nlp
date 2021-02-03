const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const mockAPIResponse = require('./mockAPI.js')
const fetch = require('node-fetch');

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

const apiBaseUrl = 'https://api.meaningcloud.com/sentiment-2.1';

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/analyse', async function (req, res) {
    const endpoint = `${apiBaseUrl}?key=${process.env.API_KEY}&lang=en&txt=${req.body.text}`;

    const apiRes = await fetch(encodeURI(endpoint), {
        method: 'POST',
    });

    try {
        const jsonRes = await apiRes.json();
        res.send({
            score_tag: jsonRes.score_tag,
            agreement: jsonRes.agreement,
            subjectivity: jsonRes.subjectivity,
            confidence: jsonRes.confidence
        });
    } catch (error) {
        console.log("error", error);
    }
})


