// Import Node.js modules for HTTP requests, files, and safe path handling.
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

// Build absolute paths so the server works from any launch directory.
const publicDirectory = path.join(__dirname, "public");
const data = fs.readFileSync(path.join(__dirname, "questions.json"), "utf8");
const questions = JSON.parse(data);

// Tell the browser how to interpret each supported static file type.
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
};

// Create the HTTP server and route incoming requests.
const server = http.createServer((req, res) => {
  // Serve the main quiz page.
  if (req.url === "/" && req.method === "GET") {
    const html = fs.readFileSync(
      path.join(publicDirectory, "index.html"),
      "utf8",
    );

    res.writeHead(200, {
      "Content-Type": contentTypes[".html"],
    });

    res.end(html);

    return;
  }

  // Serve the CSS and JavaScript files used by the quiz page.
  if (req.method === "GET" && ["/app.js", "/style.css"].includes(req.url)) {
    const filePath = path.join(publicDirectory, path.basename(req.url));
    const extension = path.extname(filePath);

    res.writeHead(200, {
      "Content-Type": contentTypes[extension],
    });

    res.end(fs.readFileSync(filePath));
    return;
  }

  // Return all quiz questions as JSON for the browser application.
  if (req.url === "/questions" && req.method === "GET") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(JSON.stringify(questions));

    return;
  }

  // Return a JSON error for unknown routes.
  res.writeHead(404, {
    "Content-Type": "application/json",
  });

  res.end(
    JSON.stringify({
      error: "Route not found",
    }),
  );
});

// Use PORT when provided; otherwise use the default development port.
const port = Number(process.env.PORT) || 3001;

// Start listening for browser requests.
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
