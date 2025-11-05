const express = require("express");
const router = express.Router();

// Test route
router.get("/", (req, res) => {
  res.json([
    { id: 1, name: "Tanya" },
    { id: 2, name: "Alice" }
  ]);
});

module.exports = router;
