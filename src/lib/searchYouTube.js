var searchYouTube = ({query = 'react', max = 5, key = YOUTUBE_API_KEY}, callback) => {
  // TODO
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet', //this is necessary in all YouTube API calls
    maxResults: max,
    q: query,
    type: 'video',
    videoEmbeddable: true,
    key: key //necessary, grab from YOUTUBE_API_KEY
  }).done(function(array) {
    console.log('array:', array);
    callback(array.items);
  });
};

export default searchYouTube;
window.searchYouTube = searchYouTube;


// GET https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json
// https://api.jquery.com/deferred.done/
// 1
// 2
// 3
// $.get( "test.php" ).done(function() {
//   alert( "$.get succeeded" );
// });