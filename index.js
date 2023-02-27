const express = require("express");
const server = express();

server.use(express.json()); // <-- enable reading of JSON fomratted request payloads

// this is an example of a very simple back end that handles C.R.U.D. actions to the root domain (http://localhost:3000/)

// CREATE - receives a data payload, often used to upload to database
server.post("/", (req, res) => {
  console.log(req.body); // <-- this is the data payload from the client
  res.send("data received"); // <-- sending back confirmation message
});

// READ - used to send data/content to client, is the default behaviour fo a browser visiting a page
server.get("/", (req, res) => {
  res.send("Welcome to the article website");
});

// UPDATE - receives a data payload and usually an id, overwrites old entry in database
server.put("/", (req, res) => {
  console.log(req.body); // <-- this is the data payload from the client
  res.send("data received"); // <-- sending back confirmation message
});

// DELETE - usually receives an id, deletes entry in database
server.delete("/", (req, res) => {
  res.send("deleted"); // <-- sending back confirmation message
});

const port = 3000;
server.listen(port, () => {
  console.log("server listening on port: " + port);
});
