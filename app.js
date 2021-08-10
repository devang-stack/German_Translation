var btnTranslate = document.querySelector("#btn_translate");
var txtInput = document.querySelector("#txt_input");
var Output = document.querySelector("#output");


var serverURL = "https://api.funtranslations.com/translate/shakespeare.json";

function getTranslationURL(text) {

    return serverURL + "?" + "text=" + text
};

function errorHandler(error) {
    console.log("error occured", error);
    alert("Something Wrong With server try again after sometime");

};


function clickhandler() {
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            Output.innerText = translatedText;

        })

};



btnTranslate.addEventListener("click", clickhandler)