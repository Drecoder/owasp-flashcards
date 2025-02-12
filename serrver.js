const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

// Serve the Vite build folder as static files
app.use(express.static(path.join(__dirname, "dist")));

// Define an endpoint to display the game
app.get("/game", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Fallback route for other requests (for single-page app routing)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
