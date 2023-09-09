import express from "express";
import path from "path";

const app = express();
const port = 1000;

// Serve static files (e.g., JavaScript, CSS) from the dist directory
app.use(express.static(path.join(process.cwd(), "dist")));

// Serve the main HTML file for all routes
app.get("*", (req, res) => {
  res.sendFile(path.join(process.cwd(), "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
