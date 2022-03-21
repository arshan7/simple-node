const express = require("express");
const path = require("path");
const { getUser } = require("./DBConnect");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, "../react-routing/build")));

console.log(path.resolve(__dirname), "path");

app.get("/api", async (req, res) => {
  console.log("api requested");

  const result = getUser("arshan");
  result.then((data) => {
    res.json({ message: data.username });
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
