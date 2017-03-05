var axios = require('axios');

//New York Times API Key
var apiKey = '46ba128fd7fe4d9bb083047938f7d947';

var nytimeshelper = {
    //this function will make the request to the NYT api
    runQuery: function(Topic, StartYear, EndYear) {
        console.log(Topic, StartYear, EndYear);
    

    //figure out the geolocations
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + Topic + "?begin_date="+ StartYear + '0101' +  "?end_date=" + EndYear + '0101' + "&api-key=" + "46ba128fd7fe4d9bb083047938f7d947";
    return axios.get(queryURL).then(function(response) {
        if (response.data.results) {
            return response.data.results;
                console.log(response);
            }
            return "";
        });
    },

    //this function hits our server to retrieve the record of query results
    getHistory: function() {
        return axios.get("/api");
    },

    //this function posts new searches to our database
    postHistory: function(title, date, link) {
        return axios.post('/api', {title: response.body.title, date: response.body.date, link: response.body.link });
    }
};

//We export the API nytimeshelper
module.exports = nytimeshelper;


