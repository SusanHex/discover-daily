function myFunction() {
  var authOptions = {
    method: "POST",
    headers: {
      'Authorization': 'Basic ' + PropertiesService.getScriptProperties().getProperty("basic_auth")
    },
    payload: {
      grant_type: 'client_credentials'
    },
};

let response = UrlFetchApp.fetch('https://accounts.spotify.com/api/token', authOptions);
Logger.log(`Response Content: "${response.getContentText()}"`);
}
