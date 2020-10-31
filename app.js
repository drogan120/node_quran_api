const http = require("http");
const data = require("./data/quran.json");
const { getData, getSurah } = require("./controller/quranController");

const server = http.createServer((req, res) => {
  if (req.url === "/api/quran" && req.method === "GET") {
    getData(req, res);
  } else if (
    req.url.match(/\/api\/quran\/surah\/([0-9]+)/) &&
    req.method === "GET"
  ) {
    const id = req.url.split("/")[4];
    getSurah(req, res, id);
  }
});

const PORT = process.env.APP_PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
