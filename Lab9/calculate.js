const express = require("express");
const url = require("url");
const app = express();

app.get("/calculate", function (req, res) {
  var vals = url.parse(req.url, true).query;
  var result;
  if (vals.operation === "sum") {
    result = parseInt(vals.first) + parseInt(vals.second);
  } else if (vals.operation === "extraction") {
    result = parseInt(vals.first) - parseInt(vals.second);
  } else if (vals.operation === "multiply") {
    result = parseInt(vals.first) * parseInt(vals.second);
  } else if (vals.operation === "division") {
    result = parseInt(vals.first) / parseInt(vals.second);
  }

  res.writeHead(200, { "Content-Type": "text-plain" });
  res.write(`<!DOCTYPE html>
    <html>
    <head>
    </head>
    <body>
    <p>The Answer is: ${String(result)}</p>
    <button onclick="window.history.go(-1)" >Another Calculation</button>
    </body>
    </html> `);
  return res.end();
});

app.listen(8080, function () {});
