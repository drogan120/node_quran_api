const Data = require("../models/quranModels");

async function getData(req, res) {
  try {
    const data = await Data.findAll();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
}

async function getSurah(req, res, id) {
  try {
    const data = await Data.findSurah(id);
    console.log(data);
    if (typeof data != undefined) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ messages: "not found" }));
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getData,
  getSurah,
};
