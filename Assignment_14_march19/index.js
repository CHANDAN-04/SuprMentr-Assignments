const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());

const baseDir = path.join(__dirname, "data");

if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir);
}

app.post("/folders", (req, res) => {
  const { name } = req.body;

  if (!name) return res.status(400).send("Folder name required");

  const folderPath = path.join(baseDir, name);

  fs.mkdir(folderPath, { recursive: true }, (err) => {
    if (err) return res.status(500).send("Error creating folder");
    res.send("Folder created successfully");
  });
});

app.post("/folders/:folderName/files", (req, res) => {
  const { folderName } = req.params;
  const { filename, content } = req.body;

  if (!filename) return res.status(400).send("Filename required");

  const filePath = path.join(baseDir, folderName, filename + ".txt");

  fs.writeFile(filePath, content || "", (err) => {
    if (err) return res.status(500).send("Error writing file");
    res.send("File created successfully");
  });
});

app.get("/folders", (req, res) => {
  fs.readdir(baseDir, (err, folders) => {
    if (err) return res.status(500).send("Error reading folders");
    res.json(folders);
  });
});

app.get("/folders/:folderName", (req, res) => {
  const folderPath = path.join(baseDir, req.params.folderName);

  fs.readdir(folderPath, (err, files) => {
    if (err) return res.status(404).send("Folder not found");
    res.json(files);
  });
});

app.get("/folders/:folderName/files/:fileName", (req, res) => {
  const filePath = path.join(
    baseDir,
    req.params.folderName,
    req.params.fileName,
  );

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) return res.status(404).send("File not found");
    res.send(data);
  });
});

app.delete("/folders/:folderName/files/:fileName", (req, res) => {
  const filePath = path.join(
    baseDir,
    req.params.folderName,
    req.params.fileName,
  );

  fs.unlink(filePath, (err) => {
    if (err) return res.status(404).send("File not found");
    res.send("File deleted");
  });
});

app.delete("/folders/:folderName", (req, res) => {
  const folderPath = path.join(baseDir, req.params.folderName);

  fs.rm(folderPath, { recursive: true, force: true }, (err) => {
    if (err) return res.status(500).send("Error deleting folder");
    res.send("Folder deleted");
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
