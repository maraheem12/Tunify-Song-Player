# Tunify Project

## Overview

Tunify is a web application that allows users to browse and listen to a curated playlist of songs. The application is built using Node.js, Express, and EJS templating engine.

## Project Structure

- `index.ejs`: The main page of the application displaying the playlist.
- `indexTab.ejs`: The detailed view of a selected song.
- `server.js`: The server-side code handling routes and rendering views.
- `package.json`: Contains project metadata and dependencies.
- `package-lock.json`: Contains the exact versions of dependencies used in the project.

## Endpoints

### GET `/`

Renders the main page (`index.ejs`) which displays the playlist.

**Example Request:**

```http
GET http://localhost:3000/
```

**Example Response:**
Renders the `index.ejs` file displaying the list of songs.

### GET `/indexTab`

Renders the detailed view of a selected song (`indexTab.ejs`).

**Query Parameters:**

- `songName`: The name of the song to display details for.

**Example Request:**

```http
GET http://localhost:3000/indexTab?songName=Bohemian%20Rhapsody
```

**Example Response:**
Renders the `indexTab.ejs` file displaying details of the song "Bohemian Rhapsody".

## Detailed Explanation

### `index.ejs`

This file contains the HTML structure for the main page of the application. It includes:

- A sidebar with navigation links.
- A list of songs with links to their detailed views.
- A main content area displaying the playlist.

### `indexTab.ejs`

This file contains the HTML structure for the detailed view of a selected song. It includes:

- The song's name, singer, components, and the date it was added.
- Links to share the song on social media.
- An audio player to play the song.

### `server.js`

This file sets up the Express server and defines the routes for the application. It includes:

- Middleware to serve static files.
- A route to render the main page (`index.ejs`).
- A route to render the detailed view of a selected song (`indexTab.ejs`).

### `package.json`

This file contains metadata about the project and its dependencies. Key dependencies include:

- `ejs`: Templating engine for rendering HTML.
- `express`: Web framework for Node.js.
- `jsdom`: JavaScript implementation of the DOM.

### `package-lock.json`

This file contains the exact versions of dependencies used in the project, ensuring consistency across different environments.

## How to Run the Project

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the server using `node server.js`.
4. Open `http://localhost:3000` in your web browser to view the application.
#   T u n i f y - S o n g - P l a y e r -  
 