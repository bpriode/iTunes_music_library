/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play

let results = document.getElementById('results');
let submitButton = document.getElementById('submitButton');
let searchBar = document.getElementById('searchBar');


submitButton.addEventListener('click', function() {

  results.innerHTML = "";

  let searchBar = document.getElementById('searchBar');
  let value = searchBar.value.split("").join("+");
  let search = "https://itunes.apple.com/search?term=" + value + "&entity=song&limit=15";

  let searchResults = document.getElementById('results');

    fetch(search)

    .then(function(response){
        response.json().then(function(data) {


      for (var i = 0; i < data.results.length; i++) {
         let songs = document.createElement("div");
         songs.setAttribute("class", "songs");
            results.appendChild(songs);

         let albumCover = document.createElement("img");
            albumCover.setAttribute("src", `${data.results[i].artworkUrl100}`);
              songs.appendChild(albumCover);
         let songTitle = document.createElement("h3");
            songTitle.textContent = `${data.results[i].trackName}`;
              songs.appendChild(songTitle);
         let artistName = document.createElement("p");
            artistName.textContent = `${data.results[i].artistName}`;
            songs.appendChild(artistName);

         albumCover.value = i;
         albumCover.addEventListener("click", function(event) {
           music(event.target.value);
       })
// music playing functionality//
       function music(index) {
           let songToPlay = data.results[index].previewUrl;
           music_player.setAttribute("src", songToPlay);
           music_player.load();
           music_player.play();
         }
        }
      })
    })
});
