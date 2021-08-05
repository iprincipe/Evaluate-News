var path = require('path')

const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const bodyParser = require('body-parser');

var cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

const application_key = process.env.API_KEY;
console.log(`Your API key is ${process.env.API_KEY}`);

const app = express()

app.use(express.static('dist'))

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const endUrl = '>&lang=en"';

console.log(__dirname)

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})

//test connection with this
//404 for some reason
app.get('/test', function (req, res) {
  console.log("test");
  res.send(mockAPIResponse)
});


app.post("/callAPI", async (req, res) => {
  const meaningCloudUrl = baseURL + application_key + req.body + endUrl;
  const resp = await fetch(meaningCloudUrl);

  try {
    const data = await resp.json();
    res.send(data);
  } catch (err) {
    console.log("error", err);
  }
});
