const Form = ({ handleInputChange, createCustomer, newCustomer }) => {
  return (
    <div>
      <h2>Add a Customer</h2>
      <form>
        <div className='field'>
          <label>Customer ID:</label>
          <input
            type='text'
            value={newCustomer.customer_id}
            onChange={handleInputChange}
            name='customer_id'
          ></input>
        </div>
        <div className='field'>
          <label>Company Name:</label>
          <input
            type='text'
            value={newCustomer.company_name}
            onChange={handleInputChange}
            name='company_name'
          ></input>
        </div>
        <div className='field'>
          <label>Contact Name:</label>
          <input
            type='text'
            value={newCustomer.contact_name}
            onChange={handleInputChange}
            name='contact_name'
          ></input>
        </div>
        <div className='field'>
          <label>Contact Title:</label>
          <input
            type='text'
            value={newCustomer.contact_title}
            onChange={handleInputChange}
            name='contact_title'
          ></input>
        </div>
        <div className='field'>
          <label>Address:</label>
          <input
            type='text'
            value={newCustomer.address}
            onChange={handleInputChange}
            name='address'
          ></input>
        </div>
        <div className='field'>
          <label>City</label>
          <input
            type='text'
            value={newCustomer.city}
            onChange={handleInputChange}
            name='city'
          ></input>
        </div>
        <div className='field'>
          <label>Region:</label>
          <input
            type='text'
            value={newCustomer.region}
            onChange={handleInputChange}
            name='newCustomer.region'
          ></input>
        </div>
        <div className='field'>
          <label>Postal Code:</label>
          <input
            type='text'
            value={newCustomer.postal_code}
            onChange={handleInputChange}
            name='postal_code'
          ></input>
        </div>
        <div className='field'>
          <label>Country:</label>
          <input
            type='text'
            value={newCustomer.country}
            onChange={handleInputChange}
            name='country'
          ></input>
        </div>
        <div className='field'>
          <label>Phone:</label>
          <input
            type='text'
            value={newCustomer.phone}
            onChange={handleInputChange}
            name='phone'
          ></input>
        </div>
        <div className='field'>
          <label>Fax:</label>
          <input
            type='text'
            value={newCustomer.fax}
            onChange={handleInputChange}
            name='fax'
          ></input>
        </div>
        <button type='submit' onClick={createCustomer}>
          Save
        </button>
      </form>
    </div>
  );
};

export default Form;
