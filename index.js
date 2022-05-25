const express = require("express");
const app = express();
const axios = require("axios");

app.use(express.json());

app.get("/", async (req, res) => {
  const { data } = await axios.get("https://swapi.dev/api/people");
  data.results.forEach((results) => {
    if (results.birth_year === "19BBY") {
      console.log("É do ano 19BBY: ", results);
    }
  });
  return res.json(data.results);
});

app.get("/filme1", async (req, res) => {
  params = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 18, 19, 81];
  const { data } = await axios.get("https://swapi.dev/api/films/1/");
  console.log(data.characters);
  return res.json(data.characters);
});

app.get("/xwing", async (req, res) => {
  const { data } = await axios.get("https://swapi.dev/api/starships/12/");
  return res.json(data);
});

app.post("/", (req, res) => {
  const body = req.body;
  console.log(req.body);
  return res.send("Funcionando");
});

app.listen(4000, () => {
  console.log("Rodando na porta 4000");
});
