const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from Node.js CI/CD Demo App! This is Elevate Labs Internship 23/07/2026");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});