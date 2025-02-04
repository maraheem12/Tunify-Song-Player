const { JSDOM } = require("jsdom");
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to serve static files
app.use(express.static('public'));

// Route to render the index.ejs file
app.get('/', (req, res) => {
    res.render("index.ejs",{ root: __dirname});
});

const songs = [
    { songName: "Bohemian Rhapsody", singer: "Mohammed Abdul Raheem", components: "Piano, Guitar, Drums", addedOn: "2024-01-01" },
    { songName: "Love Hotel", singer: "Mohammed Abdul Raheem", components: "Synthesizer, Guitar", addedOn: "2024-02-01" },
    { songName: "Hotel California", singer: "Mohammed Abdul Raheem", components: "Guitar, Percussion", addedOn: "2024-03-01" },
    { songName: "Purple Rain", singer: "Mohammed Abdul Raheem", components: "Guitar, Strings", addedOn: "2024-04-01" },
    { songName: "Stairway to Heaven", singer: "Mohammed Abdul Raheem", components: "Guitar, Flute", addedOn: "2024-05-01" },
    { songName: "Thriller Night", singer: "Mohammed Abdul Raheem", components: "Synthesizer, Drums", addedOn: "2024-06-01" },
    { songName: "Blackbird Sing", singer: "Mohammed Abdul Raheem", components: "Guitar, Vocals", addedOn: "2024-07-01" },
    { songName: "Sweet Caroline", singer: "Mohammed Abdul Raheem", components: "Piano, Bass", addedOn: "2024-08-01" },
    { songName: "Dancing in September", singer: "Mohammed Abdul Raheem", components: "Synthesizer, Guitar", addedOn: "2024-09-01" },
    { songName: "Hello Goodbye", singer: "Mohammed Abdul Raheem", components: "Guitar, Drums", addedOn: "2024-10-01" }
];

// Route to render the EJS file with song details
app.get('/indexTab', (req, res) => {
    
    const songName = decodeURIComponent(req.query.songName);
    console.log(`Requested song: ${songName}`);  // Log the requested song name
    const song = songs.find(s => s.songName === songName);

    if (song) {
        res.render('indexTab', { song: song });
    } else {
        res.send('Song not found');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
