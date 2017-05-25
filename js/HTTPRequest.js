const HTTPRequest = {

  get : function (URL, callback) {
    return $.get("https://cors-anywhere.herokuapp.com/" + URL);
  }

}
