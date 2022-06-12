import React, { useState, useEffect } from "react";
import Table from "./components/Table";
import Form from "./components/Form";
import { getCustomers } from "./services/dataServices.js";

function App() {
  const [customers, setCustomers] = useState([]);

  const columns = [
    { name: "Customer ID", property: "customer_id" },
    { name: "Company Name", property: "company_name" },
    { name: "Contact Name", property: "contact_name" },
    { name: "Contact Title", property: "Contact Title" },
    { name: "Address", property: "address" },
    { name: "City", property: "city" },
    { name: "Region", property: "region" },
    { name: "Postal Code", property: "postal_code" },
    { name: "Country", property: "country" },
    { name: "Phone", property: "phone" },
    { name: "Fax", property: "fax" },
  ];

  useEffect(() => {
    // get an array of objects (customers)
    getCustomers()
      .then((initialCustomers) => {
        setCustomers(initialCustomers);
        console.log(customers);
      })
      .catch((err) => console.log(err));
  }, [customers]);

  return (
    <div className='App'>
      <h1>Customers</h1>
      <Table className='customers-table' columns={columns} rows={customers} />
      <Form />
    </div>
  );
}

export default App;
