/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play


let container = document.getElementById('container');
let searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', function(){
  rows.innerHTML = "";
  let search="https://itunes.apple.com/search?term=" + searchForm.value;

  fetch(search)

    .then(function(response) {
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function(data) {
        console.log("Here is the data:", data);
      });
    })
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
});
});

// .then(function(response) {
// response.json().then(function(data){
//   for (var i = 0; i < 12; i++) {
//       if (data.results[i].thumbnail === "") {
//       rows.innerHTML +=
//       `
//       <div class="box">
//       <h4>${data.results[i].title}</h4>
//       <img src="http://lorempixel.com/output/food-q-c-150-150-5.jpg"}>
//       <a href="${data.results[i].href}"><span></span></a>
//       </div>
//       `;
//     }else{
//
//     rows.innerHTML +=
//     `
//     <div class="box">
//     <h4>${data.results[i].title}</h4>
//     <img src=${data.results[i].thumbnail}>
//     <a href="${data.results[i].href}"><span></span></a>
//     </div>
//     `;
//
//   }
//   container.appendChild(rows);
// };
// }
// )
// .catch(function(err) {
//   console.log("Fetch Error :-S", err);
// })
// })
// })
