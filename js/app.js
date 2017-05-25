const CORS_URL = "https://cors-anywhere.herokuapp.com/";
var URL = "http://numbersapi.com/"; // the Numbers-API URL
var consoleLogger = undefined;
var searchField = undefined;
var preloader = undefined;
var numberRegularExpression = undefined;
var numberToCheckFor = 0;

window.onload = function() {
  console.log("Window is loaded");
  consoleLogger = Utility.getElement("console"); // it's the container that shows the result
  searchField   = Utility.getElement("search"); // search-field, where user enter the number he/she is interested in
  preloader     = Utility.getElement("preloader"); // display this preloader while fetching the result

  // listeners
  search.addEventListener("keyup", onKeyUp);
  document.body.addEventListener("click", onClick);

  // make sure the value coming from the search-input is a number
  numberRegularExpression = new RegExp(/^\d+(?:\.\d{1,2})?$/);
}

function onKeyUp(event) {

  if (event.keyCode == 13) { // is the user hits the enter key

    numberToCheckFor = searchField.value; // get the value entered in the search-field

    if (numberRegularExpression.test(numberToCheckFor)) { // check if it's a number
      preloader.style.display = "block"; // display preloader
      HTTPRequest.get(CORS_URL + URL + numberToCheckFor).then(callback); // hit the URL
    } else {
      consoleLogger.innerHTML = "Please enter a number"; // user did not enter a number
    }

  }
}

function onClick(event) {
  Utility.getElement(searchField).focus(); // always focus on the search-field
}

function callback(result) {
  consoleLogger.innerHTML = result; // display the results
  preloader.style.display = "none"; // hide the preloader
}