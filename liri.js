
// the first command to be entered following node filename
var command = process.argv[2];
var input = process.argv[3];
switch (command) {
    case 'my-tweets':
        myTweets();
        break;

    case 'spotify-this-song':
        spotifyThisSong();
        break;

    case 'movie-this':
        movieThis();
        break;

    case 'do-what-it-says':
        justDoIt();
        break;

}

  // TWITTER

function myTweets (){
var Twitter = require('twitter');
var client = new Twitter({
    consumer_key: 'uWStbDRVIeAQ726pesIKAfjHv',
  consumer_secret: 'oLfDUQGJZYqEXONGcXjPOWlJSSqBbYXcqBzcsHUe3oQVQiZ8dT',
  access_token_key: '755516739409080320-R',
  access_token_secret: 'IS0fvjYeSJSsAeIwweBdAxgtdoDacXCH8W3uUEy1PV0OK',
});
// var client = require('./keys.js');

var params = { screen_name: 'lash411info'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        console.log(tweets);
    }
});
}

//SPOTIFY

function spotifyThisSong(){
  var spotify = require('spotify');
  var songName=input;

  spotify.search({ type: 'track', query: songName }, function(err, data) {
      if (err) {
          console.log('Error occurred: ' + err);
          return;
      }

      // Do something with 'data' 
  });

  }
  
// OMDB REQUEST

function movieThis(){
  var request = require('request');
  var movieName = input;

  // Then run a request to the OMDB API with the movie specified 
  var queryUrl = 'http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&r=json';

  request(queryUrl, function(error, response, body) {

      // If the request is successful (i.e. if the response status code is 200)
      if (!error && response.statusCode == 200) {

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
  }
  

function justDoIt() {}
//LOAD FS PACKAGE TO READ/WRITE
var fs = require('fs');



myTweets();
spotifyThisSong();
movieThis();
justDoIt();


