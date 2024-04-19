const express = require("express");
const app = express();
const port = 3000;

// app.listen(port, () => {
//   console.log(`Server listening on port: ${port}.`);
// });

// app.get("/", (req, res) => {
//   res.send("Hello Express!");
// });

// app.get("/express", (req, res) => {
//   res.send("Creating routes with Express is simple!");
// });

// app.get("/user", (req, res) => {
//   res.send("Received a GET request for user!");
// });

// app.post("/user", (req, res) => {
//   res.send("Received a POST request for user!");
// });

// app.listen(port, () => {
//   console.log(`Server listening on port: ${port}.`);
// });

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});

app.get("/", (req, res) => {
  res.send("Try navigating to /user.");
});

app.get("/user", (req, res) => {
  res.send(`Received a GET request for user!
Try navigating to /user/somevalue/profile/somevalue.`);
});

app.get("/user/:userID", (req, res) => {
  res.send(`Navigated to the user page for: ${req.params.userID}.`);
});

app.get("/user/:userID/profile", (req, res) => {
  res.send(`Navigated to the user profile page for: ${req.params.userID}.`);
});

app.get("/user/:userID/profile/:data", (req, res) => {
  res.send(
    `Navigated to the user profile page for: ${req.params.userID}, with the data: ${req.params.data}.`
  );
});


//COMMON JS
// module.exports = router;