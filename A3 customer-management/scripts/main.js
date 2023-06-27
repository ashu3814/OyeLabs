const express = require("express");
const bodyParser = require("body-parser");
const { insertOrUpdateCustomer } = require("../utils/customerUtils");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// POST /customers - Insert or update customer
app.post("/customers", (req, res) => {
  const { name, email } = req.body;

  insertOrUpdateCustomer(name, email)
    .then(() => {
      res.status(200).json({ message: "Customer inserted/updated successfully" });
    })
    .catch((error) => {
      console.log("Error:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
