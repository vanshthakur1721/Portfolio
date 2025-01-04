// import React from 'react'
// import './FormStyle.css'
// function Formerf() {
//   return (
//     <div className='form'>
      
//       <form>
//         <label>Your Name</label>
//         <input type="text" />
//         <label>Email</label>
//         <input type="email" />
//         <label>Subject</label>
//         <input type="text" />
//         <label>Message</label>
//       <textarea rows='6' placeholder='Type your message here'></textarea>
//       <button className='btn'>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default Formerf

import React, { useState } from 'react';
import { Client, Databases } from 'appwrite';
import './FormStyle.css';

function Formerf() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const client = new Client();
    client
      .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
      .setProject('67790b950023fb69bcaa'); // Replace with your Project ID

    const databases = new Databases(client);

    const databaseId = '67790bcf001345a98f1f'; // Replace with your Database ID
    const collectionId = '6779123d001894179bfb'; // Replace with your Collection ID

    const data = {
      name,
      email,
      subject,
      message,
    };

    console.log('Submitting data:', data);

    try {
      const response = await databases.createDocument(
        databaseId,
        collectionId,
        'unique()',
        data
      );
      console.log('Document created successfully:', response);
    } catch (error) {
      console.error('Error submitting document:', error);
      if (error.response) {
        console.error('Error response:', error.response);
      }
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Subject</label>
        <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
        <label>Message</label>
        <textarea
          rows="6"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here"
        ></textarea>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Formerf;




