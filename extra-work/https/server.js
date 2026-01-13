const http = require("http");
const url = require("url");
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;
  if (req.method === "GET" && pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to Node.js HTTP Server");
  }
  else if (req.method === "GET" && pathname === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end;
  }
  else if (req.method === "GET" && pathname === "/user") {
    const { name, age } = query;

    const userData = {
      name: name || "Unknown",
      age: age || "Not provided"
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(userData));
  }
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Page Not Found");
  }
});
server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
