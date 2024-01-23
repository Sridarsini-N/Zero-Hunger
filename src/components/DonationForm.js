import React, { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';
import './DonationForm.css';

const DonationForm = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [upiId, setUpiId] = useState('');

  const handleDonation = (e) => {
    e.preventDefault();

    const formattedAmount = parseFloat(donationAmount).toFixed(2); 
    alert(`🎉 You have successfully donated ₹${formattedAmount}`);

    setDonationAmount('');
    setUpiId('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'donationAmount') {
      setDonationAmount(value);
    } else if (name === 'upiId') {
      setUpiId(value);
    }
  };

  return (
    <div className='donation-body mt-5'>
      <div className="donation-form-container">
        <h2>Make a Donation</h2>
        <form className="donation-form" onSubmit={handleDonation}>
          <label htmlFor="donationAmount">Donation Amount (₹):</label>
          <input
            type="number"
            id="donationAmount"
            name="donationAmount"
            placeholder="Enter the amount"
            value={donationAmount}
            onChange={handleChange}
          />

          <label htmlFor="upiId">Enter UPI ID:</label>
          <input
            type="text"
            id="upiId"
            name="upiId"
            placeholder="Enter your UPI ID"
            value={upiId}
            onChange={handleChange}
          />

          <button type="submit">Donate</button>
        </form>
      </div>
    </div>
  );
};

export default DonationForm;
