const mongoose = require("../db/db");

const customerSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
