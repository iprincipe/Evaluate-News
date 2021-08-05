const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key=';
let urlInput = '';
const apiKey = '7d25b97d22b8555d82fc4dee54fce27e&of=json&url=<';
const endUrl = '>&lang=en"';

function handleSubmit(event) {
    event.preventDefault();

    console.log("handlesubmit");

    //check what text was put into the form field
    let formText = document.getElementById('name').value

    if(Client.checkForName(formText)){
        console.log("::: Form Submitted :::");
        postData("http://localhost:8080/callAPI", formText)
        
        .then(function () {
            updateUI();
        });
    } else{
        console.log("error: Invalid Url");
    }
}

const postData = async (url, data) => {
    const response = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json", "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    });
    try {
      const res = await response.json();
      return res;
    } catch (err) {
      console.log(err);
    }
  };

const updateUI = async () => {
    //const request = await fetch('/all');
    console.log('update');
    try {
        //Fill elements with weather data to be displayed
        const allData = await request.json();
        document.getElementById('subjectivity').innerHTML = allData.subjectivity;
        document.getElementById('polarity').innerHTML = allData.polarity;
        document.getElementById('confidence').innerHTML = allData.confidence;
        document.getElementById('irony').innerHTML = allData.irony;

    } catch (error) {
        console.log("error", error);
    }
}

export { handleSubmit }
