# Tunify Song Player

Tunify Song Player is a web-based application that allows users to play and manage their favorite songs. This README provides detailed documentation on the project, including setup instructions, endpoint details, and usage examples.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with Tunify Song Player, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Tunify-Song-Player.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Tunify-Song-Player
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

To start the application, run:

```bash
npm start
```

This will launch the application on `http://localhost:3000`.

## Endpoints

### 1. Get All Songs

**Endpoint:** `GET /api/songs`

**Description:** Retrieves a list of all songs.

**Response:**

```json
[
    {
        "id": 1,
        "title": "Song Title",
        "artist": "Artist Name",
        "album": "Album Name",
        "duration": "3:45"
    },
    ...
]
```

### 2. Get Song by ID

**Endpoint:** `GET /api/songs/:id`

**Description:** Retrieves details of a specific song by its ID.

**Response:**

```json
{
  "id": 1,
  "title": "Song Title",
  "artist": "Artist Name",
  "album": "Album Name",
  "duration": "3:45"
}
```

### 3. Add a New Song

**Endpoint:** `POST /api/songs`

**Description:** Adds a new song to the collection.

**Request Body:**

```json
{
  "title": "New Song Title",
  "artist": "New Artist Name",
  "album": "New Album Name",
  "duration": "4:00"
}
```

**Response:**

```json
{
  "id": 2,
  "title": "New Song Title",
  "artist": "New Artist Name",
  "album": "New Album Name",
  "duration": "4:00"
}
```

### 4. Update a Song

**Endpoint:** `PUT /api/songs/:id`

**Description:** Updates the details of an existing song.

**Request Body:**

```json
{
  "title": "Updated Song Title",
  "artist": "Updated Artist Name",
  "album": "Updated Album Name",
  "duration": "4:30"
}
```

**Response:**

```json
{
  "id": 1,
  "title": "Updated Song Title",
  "artist": "Updated Artist Name",
  "album": "Updated Album Name",
  "duration": "4:30"
}
```

### 5. Delete a Song

**Endpoint:** `DELETE /api/songs/:id`

**Description:** Deletes a song from the collection.

**Response:**

```json
{
  "message": "Song deleted successfully"
}
```

## Examples

### Example 1: Fetching All Songs

```bash
curl -X GET http://localhost:3000/api/songs
```

### Example 2: Adding a New Song

```bash
curl -X POST http://localhost:3000/api/songs -H "Content-Type: application/json" -d '{"title": "New Song", "artist": "New Artist", "album": "New Album", "duration": "4:00"}'
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
