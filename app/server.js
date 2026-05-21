const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;
const ENVIRONMENT = process.env.ENVIRONMENT || "dev";

const employees = [
  { id: 1, name: "John" },
  { id: 2, name: "David" },
  { id: 3, name: "Sarah" }
];

app.get("/", (req, res) => {
  res.send(`
    <<h1>Employee App Version 3</h1>
    <h2>Environment: ${ENVIRONMENT}</h2>
    <pre>${JSON.stringify(employees, null, 2)}</pre>
  `);
});

app.get("/health", (req, res) => {
  res.json({
    status: "UP"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
