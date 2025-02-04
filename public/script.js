
document.addEventListener("DOMContentLoaded", async () => {
    async function getSongs() {
        let response = await fetch("/songs"); // Assuming the server is set up to serve song data
        let songs = await response.json(); // Assuming songs are served as a JSON array
        return songs;
    }

    async function singleClick() {
        let songs = await getSongs();
        console.log(songs);

        let cards = document.getElementsByClassName('card');
        let audio = null;

        function handleCardClick(songIndex){
            return function () {
                if (audio) {
                    audio.pause();
                    audio.currentTime = 0;
                }

                audio = new Audio(songs[songIndex]);
                audio.play();
            };
        }

        function addEventListenersToCards() {
            for (let i = 0; i < cards.length; i++) {
                cards[i].addEventListener("click", handleCardClick(i));
            }
        }

        addEventListenersToCards();
    }

    singleClick();
});
















































// const { JSDOM } = require("jsdom");
// const express = require('express');

// // Create an instance of the Express application
// const app = express();

// // Define the port number
// const port = 3000;
// app.use(express.static('public'));

// app.get('/', (req, res) => {
//     // res.render(__dirname + '/public/index.html');
//     res.sendFile("index.ejs",{ root: __dirname});
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
//   });
// // Create a new DOM environment
// const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
// const document = dom.window.document;


// async function getSongs() {
//     let dir = await fetch("http://127.0.0.1:5500/songs/");
//     let text = await dir.text();
//     let div = document.createElement("div");
//     div.innerHTML = text;
//     let as = div.getElementsByTagName("a"); // Changed to 'div' to correctly parse the fetched HTML
//     let songs = [];
//     for (let index = 0; index < as.length; index++) {
//         const element = as[index];
//         if (element.href.endsWith(".mp3")) {
//             songs.push(element.href); // Changed to push the href property
//         }
//     }
//     return songs;
// }
// async function singleClick() {
//     let songs = await getSongs(); // Await the getSongs function to retrieve the songs array
//     console.log(songs);

//     let cards = document.getElementsByClassName('card'); // Retrieve the cards elements
//     let audio = null;

//     // Function to handle card click and play the song
//     function handleCardClick(songIndex){
//         return function () {
//             // If there is an audio playing, stop it
//             if (audio) {
//                 audio.pause();
//                 audio.currentTime = 0;
//             }

//             // Play the selected song
//             audio = new Audio(songs[songIndex]);
//             audio.play();
//         };
//     }

//     // Function to add event listeners to all cards
//     function addEventListenersToCards() {
//         for (let i = 0; i < cards.length; i++) {
//             cards[i].addEventListener("click", handleCardClick(i));
//         }
//     }

//     // Call the function to add event listeners to all cards
//     addEventListenersToCards();
// }

// singleClick();


























// document.querySelectorAll(".songsPlaylist a").forEach(item => {
    
//     const songName = item.getAttribute('data-song');
//     const singer = item.getAttribute('data-singer');
//     const components = item.getAttribute('data-components');
//     const date = item.getAttribute('data-date');
//     const src = item.getAttribute('data-src');

//     document.getElementById('song-name').innerText = `Song Name: ${songName}`;
//     document.getElementById('singer').innerText = `Singer: ${singer}`;
//     document.getElementById('components').innerText = `Music Components: ${components}`;
//     document.getElementById('date').innerText = `Added on: ${date}`;
//     document.getElementById('audio-player').src = src;
// });
    
    // document.querySelectorAll("a").forEach(item => {
    //     item.addEventListener('click', event => {
    //         event.preventDefault();
    //         const songName = item.getAttribute('data-song');
    //         const singer = item.getAttribute('data-singer');
    //         const components = item.getAttribute('data-components');
    //         const date = item.getAttribute('data-date');
    //         const src = item.getAttribute('data-src');
    
    //         document.getElementById('song-name').innerText = `Song Name: ${songName}`;
    //         document.getElementById('singer').innerText = `Singer: ${singer}`;
    //         document.getElementById('components').innerText = `Music Components: ${components}`;
    //         document.getElementById('date').innerText = `Added on: ${date}`;
    //         document.getElementById('audio-player').src = src;
    //     });
    // });
   




















































// Call the singleClick function to set everything up


// async function play() {
//     let songs = await getSongs(); // Await the getSongs function
//     console.log(songs);

//     var cards = document.getElementsByClassName('card');

// cards[0].addEventListener("click" , function(){
//     let audio = new Audio(songs[0]);
//     audio.play();
// })   
// cards[1].addEventListener("click" , function(){
//     let audio = new Audio(songs[1]);
//     audio.play();
// })  
// cards[2].addEventListener("click" , function(){
//     let audio = new Audio(songs[2]);
//     audio.play();
// })  
// cards[3].addEventListener("click" , function(){
//     let audio = new Audio(songs[3]);
//     audio.play();
// })  
// cards[4].addEventListener("click" , function(){
//     let audio = new Audio(songs[4]);
//     audio.play();
// })  
// cards[5].addEventListener("click" , function(){
//     let audio = new Audio(songs[5]);
//     audio.play();
// })  
// cards[6].addEventListener("click" , function(){
//     let audio = new Audio(songs[6]);
//     audio.play();
// })  
// cards[7].addEventListener("click" , function(){
//     let audio = new Audio(songs[7]);
//     audio.play();
// })  
// cards[8].addEventListener("click" , function(){
//     let audio = new Audio(songs[8]);
//     audio.play();
// })  
// cards[9].addEventListener("click" , function(){
//     let audio = new Audio(songs[9]);
//     audio.play();
// }) 
// }
// play();











// async function singleClick() {
    
//     let audio = null;

//     // Function to handle card click and play the corresponding song
//     function handleCardClick(songs[i]) {
//         return function () {
//             // If there is an audio playing, stop it
//             if (audio) {
//                 audio.pause();
//                 audio.currentTime = 0;
//             }

//             // Play the selected song
//         audio = new Audio(songs[i]);
//             audio.play();
//         };
//     }

//     // Function to add event listeners to all cards
//     function addEventListenersToCards() {
//         for (let i = 0; i < cards.length; i++) {
//             cards[i].addEventListener("click", handleCardClick(songs[i]));
//         }
//     }

//     // Call the function to add event listeners to all cards
//     addEventListenersToCards();
// }



// async function play(){
//     let songs = await getSongs(); // Await the getSongs function
//     console.log(songs);

//     var cards = document.getElementsByClassName('card');
// cards[0].addEventListener("click" , function(){
//     let audio = new Audio(songs[0]);
//     audio.play();
// })   
// cards[1].addEventListener("click" , function(){
//     let audio = new Audio(songs[1]);
//     audio.play();
// })  
// cards[2].addEventListener("click" , function(){
//     let audio = new Audio(songs[2]);
//     audio.play();
// })  
// cards[3].addEventListener("click" , function(){
//     let audio = new Audio(songs[3]);
//     audio.play();
// })  
// cards[4].addEventListener("click" , function(){
//     let audio = new Audio(songs[4]);
//     audio.play();
// })  
// cards[5].addEventListener("click" , function(){
//     let audio = new Audio(songs[5]);
//     audio.play();
// })  
// cards[6].addEventListener("click" , function(){
//     let audio = new Audio(songs[6]);
//     audio.play();
// })  
// cards[7].addEventListener("click" , function(){
//     let audio = new Audio(songs[7]);
//     audio.play();
// })  
// cards[8].addEventListener("click" , function(){
//     let audio = new Audio(songs[8]);
//     audio.play();
// })  
// cards[9].addEventListener("click" , function(){
//     let audio = new Audio(songs[9]);
//     audio.play();
// }) 
// }
// play()
