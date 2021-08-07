
function handleSubmit(event) {
    event.preventDefault();

    console.log("handlesubmit");

    //check what text was put into the form field
    let formText = document.getElementById('name').value

    if(Client.checkForName(formText)){
        console.log("::: Form Submitted :::");
        postData("http://localhost:8080/callAPI", formText)
        
        .then(function (result) {
            updateUI(result);
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
        "Content-Type": "application/json","Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({data}),
    });
    try {
      const res = await response.json();
      return res;
    } catch (err) {
      console.log(err);
    }
  };

const updateUI = async (result) => {
    //const request = await fetch('/all');
    console.log('update ====> ', result);
    try {
        //Fill elements with  data to be displayed
        const allData = result;
        document.getElementById('subjectivity').innerHTML = "Subjectivity: " + allData.subjectivity;
        document.getElementById('polarity').innerHTML = "Agreement: " + allData.agreement;
        document.getElementById('confidence').innerHTML = "Confidence: " + allData.confidence;
        document.getElementById('irony').innerHTML = "Irony: " + allData.irony;

    } catch (error) {
        console.log("error", error);
    }
}

export { handleSubmit }
