import React, { useState } from 'react';
import './EmployeePage.css';

function EmployeePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    address: ''
  });
  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({ name: '', email: '', phone: '', gender: '', address: '' }); // Reset form
  };

  return (
    <div className="employee-container">
      <h2>Employee Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label>Phone:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div className="input-group gender-group">
          <label>Gender:</label>
          <label>
            <input type="radio" name="gender" value="Male" onChange={handleChange} />
            Male
          </label>
          <label>
            <input type="radio" name="gender" value="Female" onChange={handleChange} />
            Female
          </label>
          <label>
            <input type="radio" name="gender" value="Other" onChange={handleChange} />
            Other
          </label>
        </div>
        <div className="input-group">
          <label>Address:</label>
          <textarea name="address" value={formData.address} onChange={handleChange}></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>

      {submittedData.length > 0 && (
        <div className="table-container">
          <table className="table-display">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>{data.gender}</td>
                  <td>{data.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default EmployeePage;
