/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = [ "Look Alive","Till I Collapse", "Drip too Hard" ,];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var artist=["Drake","Eminem","Lil Baby"];

var lengths=["3:01","4:58","2:25"];

var links=["https://youtu.be/aFYUfzcjuaw","https://youtu.be/Obim8BYGnOE","https://youtu.be/THcVOf1kNh0"];

var images=["https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2Fe7e7b150d3e07aee934b56fc1e510aa5.1000x1000x1.jpg","https://images-na.ssl-images-amazon.com/images/I/61jxguiMreL._SL1200_.jpg","https://images.genius.com/3a4755d14ac03360c25189e900b34867.1000x1000x1.jpg"]

songs.forEach(function(songs){
    $('#songs').append('<p>' + songs +'</p>');
    
    
});
artist.forEach(function(artist){
    $('#artists').append('<p>' + artist + '</p>');

});
lengths.forEach(function(length){
    $('#lengths').append('<p>' + length + '</p>');
});

images.forEach(function(image){
   $('#images').append('<img src=' +' " ' + image + ' " ' +'>');
});

links.forEach(function(links){
   $('#links').append('<a href=" ' + links + ' ">Song</a>');
});

$('img').click(function(){
$('img').attr("song");
    
});

function emptySongInfo(){
    $("#songs").empty();
    
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

/*$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
*/