const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const apiKey = '7d25b97d22b8555d82fc4dee54fce27e&of=json&url=<' + urlInput + '>&lang=en"';
let urlInput = '';

function handleSubmit(event) {
    //event.preventDefault()

    console.log("handlesubmit");

    let subjectivity = document.getElementById('subjectivity');
    let polarity = document.getElementById('polarity');
    let confidence = document.getElementById('confidence');
    let irony = document.getElementById('irony');



    // check what text was put into the form field
    /*let formText = document.getElementById('name').value
    checkForName(formText)

    if (ClientRect.checkForName(formText)) {

    postAPIdata(formtext, data)

        .then(function () {
            //updateUI()
        });

    }

    else {
        console.log("ERROR");
    }*/
}


const postAPIdata = async (url = '', data = {}) => {
    console.log(data);

    urlInput = url;
    console.log(baseURL + apiKey);

    const response = await fetch(baseURL + apiKey, {
        method: "POST",
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(data),
    })

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}

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
