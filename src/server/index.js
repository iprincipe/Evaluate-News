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

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

function sendData (req, res) {
  res.send(projectData);
};

app.post('/', function (req,res){
    res.sendFile('dist/index.html');
})

//POST 
app.post('/callAPI', postAPIdata);

function postAPIdata (req,res){
	/*
    From Weather Journal...
    Idea of what to do hopefully


	let newData = req.body;
	console.log(req.body);
	let newEntry = {
		temp: newData.temp,
		date: newData.date,
		feeling: newData.feeling
	}
	projectData = newEntry;

	console.log(projectData);
    */
}
