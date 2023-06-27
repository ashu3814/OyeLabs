const Customer = require("../models/Customer");

async function insertOrUpdateCustomer(name, email) {
  try {
    const customer = await Customer.findOne({ email });

    if (customer) {
      customer.name = name;
      await customer.save();
      console.log("Successfully updated customer:", email);
    } else {
      const newCustomer = new Customer({ name, email });
      await newCustomer.save();
      console.log("Successfully inserted customer:", email);
    }
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
}

module.exports = {
  insertOrUpdateCustomer,
};
