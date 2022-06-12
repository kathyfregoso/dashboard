import React, { useState, useEffect } from "react";
import "./App.css";
import { getCustomers, addCustomer } from "./services/dataServices.js";
import { Route, Routes, Link } from "react-router-dom";
import Table from "./components/Table";
import Form from "./components/Form";

const App = () => {
  const initialCustomerState = {
    customer_id: "",
    company_name: "",
    contact_name: "",
    contact_title: "",
    address: "",
    city: "",
    region: "",
    postal_code: "",
    country: "",
    phone: "",
    fax: "",
  };

  const [customers, setCustomers] = useState([]);
  const [newCustomer, setNewCustomer] = useState(initialCustomerState);

  useEffect(() => {
    // get array of objects (customers)
    getCustomers()
      .then((initialCustomers) => {
        setCustomers(initialCustomers);
      })
      .catch((err) => console.log(err));
  }, [customers]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewCustomer({ ...newCustomer, [name]: value });
  };

  const createCustomer = async (e) => {
    e.preventDefault();
    const newCustomerData = {
      customer_id: newCustomer.customer_id,
      company_name: newCustomer.company_name,
      contact_name: newCustomer.contact_name,
      contact_title: newCustomer.contact_title,
      address: newCustomer.address,
      city: newCustomer.city,
      region: newCustomer.region,
      postal_code: newCustomer.postal_code,
      country: newCustomer.country,
      phone: newCustomer.phone,
      fax: newCustomer.fax,
    };
    addCustomer(newCustomerData)
      .then((response) => {
        console.log(response);
        setNewCustomer({
          customer_id: response[0].customer_id,
          company_name: response[0].company_name,
          contact_name: response[0].contact_name,
          contact_title: response[0].contact_title,
          address: response[0].address,
          city: response[0].city,
          region: response[0].region,
          postal_code: response[0].postal_code,
          country: response[0].country,
          phone: response[0].phone,
          fax: response[0].fax,
        });

        setCustomers(customers.concat(response[0]));
        setNewCustomer(initialCustomerState);
      })
      .catch((err) => console.log(err));
  };

  const columns = [
    { name: "Customer ID", property: "customer_id" },
    { name: "Company Name", property: "company_name" },
    { name: "Contact Name", property: "contact_name" },
    { name: "Contact Title", property: "contact_title" },
    { name: "Address", property: "address" },
    { name: "City", property: "city" },
    { name: "Region", property: "region" },
    { name: "Postal Code", property: "postal_code" },
    { name: "Country", property: "country" },
    { name: "Phone", property: "phone" },
    { name: "Fax", property: "fax" },
  ];

  return (
    <div className='App'>
      <header className='header'>
        <h1 className='title'>Customers</h1>
      </header>
      <ul>
        <li>
          <Link to='/'>All Customers</Link>
        </li>

        <li>
          <Link to='/addCustomer'>Add a Customer</Link>
        </li>
      </ul>
      <Routes>
        <Route
          path='/'
          element={
            <Table
              className='customers-table'
              columns={columns}
              rows={customers}
            />
          }
        ></Route>
        <Route
          path='/addCustomer'
          element={
            <Form
              className='add-customer-form'
              handleInputChange={handleInputChange}
              createCustomer={createCustomer}
              newCustomer={newCustomer}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
