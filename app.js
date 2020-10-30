const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>hello world</h1>");
  res.end();
});

const PORT = process.env.APP_PORT || 3000;
server.listen(PORT, () =>
  console.log(`Server is running on http://127.0.0.1:${PORT}`),
);
