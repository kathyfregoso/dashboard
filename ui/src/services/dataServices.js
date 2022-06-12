import axios from "axios";

const url = "http://localhost:8080";

export const getCustomers = () => {
  // GET REQ
  const request = axios.get(`${url}/customers`);

  return request.then((response) => {
    return response.data;
  });
};

export const addCustomer = (newCustomer) => {
  // POST REQ
  const request = axios.post(`${url}/customers`, newCustomer);
  return request.then((response) => {
    return response.data;
  });
};
