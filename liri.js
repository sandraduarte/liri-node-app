var keys = require('./keys.js');

// libraries
var request = require('request');
var Twitter = require('twitter');
var fs = require('fs');
var spotify = require('spotify');
var client = new Twitter(keys.twitterKeys);


// the first & second commands to be entered following node filename
var command = process.argv[2];
var input = process.argv[3];

commands(command);


function commands(command) {
  console.log("You chose: " + command);
  console.log ("__________________");
    switch (command) {
      case "my-tweets":
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

      default: 
      console.log("Enter a command");
      break;

}

}
  
  // TWITTER

function myTweets (){
  // var client = new Twitter(keys.twitterKeys);
  var params = {
    screen_name: "lash411info", 
    count:20
  };
  client.get('statuses/user_timeline', params, function(error, tweets, response) {

      if (!error) {
        for (var i=0; i<tweets.length; i++){
          var tweet=tweets[i].created_at + ' ' + tweets[i].text + ' ';
          console.log(tweet);
          console.log("_____________________________________");
        }

      }
      else {
        console.log("there's a TWEET error");
        console.log(error);
      }
});
}

//SPOTIFY

function spotifyThisSong(){
  var songName=input;

  spotify.search({ type: 'track', query: songName }, function(err, data) {
      if (err) {
          console.log('Error occurred: ' + err);
          return;
      }

      // Do something with 'data' 
  });

  }
  
// // OMDB REQUEST

function movieThis(){
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



// myTweets();
// spotifyThisSong();
// movieThis();
// justDoIt();


