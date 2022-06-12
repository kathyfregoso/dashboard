import "dotenv/config";
import pkg from "pg";
const { Pool } = pkg;
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.HOST,
  database: process.env.DB,
  password: process.env.DB_PW,
  port: process.env.DB_PORT,
});

const getCustomers = (req, res) => {
  // GET request  for all customers - read endpoint
  pool.query(`SELECT * FROM customers;`, (error, results) => {
    if (error) {
      console.log(error);
      throw error;
    }
    res.status(200).json(results.rows);
  });
};
const addCustomer = (request, response) => {
  // POST Request to add new customer - write endpoint
  const {
    customer_id,
    company_name,
    contact_name,
    contact_title,
    address,
    city,
    region,
    postal_code,
    country,
    phone,
    fax,
  } = request.body;

  pool.query(
    "INSERT INTO customers (customer_id, company_name, contact_name, contact_title, address, city, region, postal_code, country, phone, fax) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *;",
    [
      customer_id,
      company_name,
      contact_name,
      contact_title,
      address,
      city,
      region,
      postal_code,
      country,
      phone,
      fax,
    ],
    (error, results) => {
      if (error) {
        console.log(error);
        throw error;
      }
      response.status(201).send(results.rows);
      console.log(`Customer added: ${results.rows[0].contact_name}`);
      console.log(results.rows);
    }
  );
};

const db = {
  getCustomers,
  addCustomer,
};

export default db;
