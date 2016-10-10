// REQUEST
var request = require('request');
request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body); // Show the HTML for the Google homepage. 
  }
});


//TWITTER
var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'uWStbDRVIeAQ726pesIKAfjHv',
  consumer_secret: 'oLfDUQGJZYqEXONGcXjPOWlJSSqBbYXcqBzcsHUe3oQVQiZ8dT',
  access_token_key: '755516739409080320-RtLsjFudy3lY4RqbbTFlC4w2S6x0x35',
  access_token_secret: 'IS0fvjYeSJSsAeIwweBdAxgtdoDacXCH8W3uUEy1PV0OK'
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

//SPOTIFY
var spotify = require('spotify');
 
spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    // Do something with 'data' 
});