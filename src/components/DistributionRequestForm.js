// import React, { useState } from 'react';
// import 'bootstrap/dist/js/bootstrap.bundle.js'
// import 'bootstrap/dist/css/bootstrap.css'
// import './DistributionRequestForm.css';

// const DistributionRequestForm = () => {
//   const [organization, setOrganization] = useState('');
//   const [requestDetails, setRequestDetails] = useState('');

//   const handleRequestSubmission = (e) => {
//     e.preventDefault();

    
//     console.log(`Organization: ${organization}`);
//     console.log(`Request Details: ${requestDetails}`);

    
//     setOrganization('');
//     setRequestDetails('');
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === 'organization') {
//       setOrganization(value);
//     } else if (name === 'requestDetails') {
//       setRequestDetails(value);
//     }
//   };

//   return (
//     <div className="distribution-request-form-container mt-5">
//       <h2>Distribution Request Form</h2>
//       <form className="distribution-request-form" onSubmit={handleRequestSubmission}>
//         <label htmlFor="organization">Organization:</label>
//         <input
//           type="text"
//           id="organization"
//           name="organization"
//           placeholder="Enter your organization"
//           value={organization}
//           onChange={handleChange}
//         />

//         <label htmlFor="requestDetails">Request Details:</label>
//         <textarea
//           id="requestDetails"
//           name="requestDetails"
//           placeholder="Provide details about your distribution request"
//           value={requestDetails}
//           onChange={handleChange}
//         ></textarea>

//         <button type="submit">Submit Request</button>
//       </form>
//     </div>
//   );
// };

// export default DistributionRequestForm;

import React, { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';
import './DistributionRequestForm.css';

const DistributionRequestForm = () => {
  const [organization, setOrganization] = useState('');
  const [requestDetails, setRequestDetails] = useState('');

  const handleRequestSubmission = (e) => {
    e.preventDefault();

    console.log(`Organization: ${organization}`);
    console.log(`Request Details: ${requestDetails}`);

    setOrganization('');
    setRequestDetails('');

    // Display an alert when the request is successfully submitted
    alert('Your request has been successfully submitted!');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'organization') {
      setOrganization(value);
    } else if (name === 'requestDetails') {
      setRequestDetails(value);
    }
  };

  return (
    <div className="distribution-request-form-container mt-5">
      <h2>Distribution Request Form</h2>
      <form className="distribution-request-form" onSubmit={handleRequestSubmission}>
        <label htmlFor="organization">Organization:</label>
        <input
          type="text"
          id="organization"
          name="organization"
          placeholder="Enter your organization"
          value={organization}
          onChange={handleChange}
        />

        <label htmlFor="requestDetails">Request Details:</label>
        <textarea
          id="requestDetails"
          name="requestDetails"
          placeholder="Provide details about your distribution request"
          value={requestDetails}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default DistributionRequestForm;
