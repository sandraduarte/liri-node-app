
// the first command to be entered following node filename
var command = process.argv[2];

var item = process.argv[3];

switch (command) {
    case "my-tweets":
        tweets();
        break;

    case 'spotify-this-song':
        spotifySong();
        break;

    case 'movie-this':
        movieSearch();
        break;

    case 'do-what-it-says':
        justDoIt();
        break;

}


function tweets (){}
function spotifySong(){}
function movieSearch(){}
function justDoIt() {}
//LOAD FS PACKAGE TO READ/WRITE
var fs = require('fs');

// // TWITTER
// var Twitter = require('twitter');

// var client = require('./keys.js');

// var params = { screen_name: 'lash411info' };
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//     if (!error) {
//         console.log(tweets);
//     }
// });

// OMDB REQUEST
var request = require('request');

// Grab the movieName which will always be the third node argument. 
var movieName = process.argv[2];

// Then run a request to the OMDB API with the movie specified 
var queryUrl = 'http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&r=json';

request(queryUrl, function(error, response, body) {

    // If the request is successful (i.e. if the response status code is 200)
    if (!error && response.statusCode == 200) {

        // Parse the body of the site and recover just the imdbRating
        // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it). 
        console.log("Title: " + JSON.parse(body)["Title"]);
        console.log("Release Year: " + JSON.parse(body)["Year"]);
        console.log("Rating: " + JSON.parse(body)["Rated"]);
        console.log("Country: " + JSON.parse(body)["Country"]);
        console.log("Language: " + JSON.parse(body)["Language"] );
        console.log("Plot: " + JSON.parse(body)["Plot"]);
        console.log("Actors: " + JSON.parse(body)["Actors"]);
        // console.log("Rotten Tomates Rating: " + );
        // console.log("Rotten Tomates URL: " + );
        console.log("______________________");
    
    }
    

    
  });


//SPOTIFY
var spotify = require('spotify');

spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if (err) {
        console.log('Error occurred: ' + err);
        return;
    }

    // Do something with 'data' 
});

