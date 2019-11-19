var TMDB_KEY = "261dcd1c24069eadca07f9d2174be25c";
var genres = [12, 16, 35, 18, 14, 27, 9648, 10749, 878, 10752];
var genreIds = ["adventureImg", "animationImg", "comedyImg", "dramaImg", "fantasyImg", "horrorImg", "mysteryImg", "romanceImg", "scifiImg", "warImg"];
var http = new XMLHttpRequest();
var i;
genreIds.forEach(function (item, index) {
    var page = Math.floor(Math.random() * 10) + 1;
    var randMov = Math.floor(Math.random() * 19) + 1;
    var fetchreq = fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + TMDB_KEY + '&with_genres=' + genres[index] + '&sort_by=popularity.desc&language=en-US&region=US&page=' + page)
    fetchreq.then(response => response.json()).then(json => document.getElementById(item).src = "http://image.tmdb.org/t/p/w500/" + (json.results[randMov].poster_path))
});
