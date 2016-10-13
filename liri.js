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

commands(process.argv[2], process.argv[3]);



function commands(command,input) {
  console.log("You chose: " + command);
  console.log ("__________________");
    switch (command) {
      case "my-tweets":
          myTweets();
          break;

      case 'spotify-this-song':
          spotifyThisSong(input);
          break;

      case 'movie-this':
          movieThis(input);
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
// Take song input and return Name, Artist, Preview, etc results 

function spotifyThisSong(){


  spotify.search({ 
    type: 'track', 
    query: input, 
  }, 

    function(err, data) {
      if (err) {
          console.log('Error occurred: ' + err);
          return;
      }
      for(var i = 0; i < data.tracks.items.length; i++) {
        var track = data.tracks.items[i];

        if(track.name == input){
          var artists = [];
          for(var j = 0; j < track.artists.length; j++) {
            artists.push(track.artists[j].name);
          }
          
          console.log("Artist(s):  " + artists); 
          console.log("Name: " + track.name) ;
          console.log("Album:   " + track.album.name);
          console.log("Preview:  " + track.preview_url); 
          
          return;
        } 
  
  }
});

// If there is no song input, return "The Sign" by Ace of Base by default
   if (!input){
    input = "The Sign";
    
    spotify.search({ 
    type: 'track', 
    query: input 
  }, 

    function(err, data) {
      if (err) {
          console.log('Error occurred: ' + err);
          return;
      }
      for(var i = 0; i < data.tracks.items.length; i++) {
        var track = data.tracks.items[i];

        if(track.name == input){
          var artists = [];
          for(var j = 0; j < track.artists.length; j++) {
            artists.push(track.artists[j].name);
          }
          
          console.log("Artist(s):  " + artists); 
          console.log("Name: " + track.name) ;
          console.log("Album:   " + track.album.name);
          console.log("Preview:  " + track.preview_url); 
          
          return;
        } 
      
  }
});
  }
  
} //Finish Spotify

  
  
// // OMDB REQUEST

function movieThis(){
if (input){
// Then run a request to the OMDB API with the movie specified 
  var queryUrl = 'http://www.omdbapi.com/?t=' + input + '&y=&plot=short&r=json';

  request(queryUrl, 

    function(error, response, body) {

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
  }
 );

}
  

        // If there is no movie input, return "Mr. Nobody" by default

 else if (!input){
    input = "Mr.Nobody";

    var queryUrl2 = 'http://www.omdbapi.com/?t=' + input + '&y=&plot=short&r=json';


  request(queryUrl2, 

    function(error, response, body) {

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
  }
 );

}



  } //finish  movie-this
  

function justDoIt() {
  
  fs.readFile("random.txt", "utf8", 

    function(error, data) {
        // console.log(data);
      var parameters = data.split(",");    
         
      input = parameters[1].replace(/"/g ," ").trim();
     console.log(input);
            // commands(parameters[0],input);
    commands(parameters[0],input);
   

  });

}

// appending commands to log.txt
function log(data) {
  
  fs.appendFile('log.txt', data + ",", 
    function (error) {
      var parameters = data.split(",");
      for (var i=0; i<parameters.length; i++){
        // console.log(parameters);

      } 
      if(error){
      console.log(error);
    }
  });
}
log(command);
// myTweets();
// spotifyThisSong();
// movieThis();
// justDoIt();

