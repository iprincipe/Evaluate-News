var path = require('path');

const fetch = require('node-fetch');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

const bodyParser = require('body-parser');

var cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

const application_key = process.env.API_KEY;
console.log(`Your API key is ${process.env.API_KEY}`);

const app = express();

app.use(express.static('dist'));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const apiKey = application_key;

console.log(__dirname)

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})


app.get('/', function (req, res) {
  res.sendFile(path.resolve('dist/index.html'))
})


//test connection with this
//404 for some reason
app.get('/test', function (req, res) {
  console.log("test");
  res.send(mockAPIResponse)
});


app.post("/callAPI", async (req, res) => {
  const base = 'https://api.meaningcloud.com/sentiment-2.1';
  const requestUrl = `${base}?key=${apiKey}&lang=auto&url=${req.body.data}`;
  console.log('req.body ====+++> ', req.body)
  console.log(requestUrl);
  const result = await fetch(requestUrl)
  try {
    console.log(result)
    const response = await result.json();
    res.send(response)
    console.log(response)
  } catch (error) {
    console.log("error", err);
  }
  // const meaningCloudUrl = baseURL + apiKey + req.body.data + endUrl;
});

