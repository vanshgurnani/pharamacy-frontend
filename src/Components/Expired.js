// Expired.js
import React, { useState, useEffect } from "react";

import './Expiry.css';

const Expired = () => {
  const [medicineData, setMedicineData] = useState([]);

  useEffect(() => {
    const fetchMedicineData = async () => {
      try {
        const response = await fetch('https://pharmacy-six-drab.vercel.app/api/getexpirymedicines');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setMedicineData(data);
      } catch (error) {
        console.error('Error fetching medicine data:', error);
      }
    };

    fetchMedicineData();
  }, []);



  
  return (
    <>
      <div className="lined-wrap">
        <div className="line-text"><h3>About to Expire</h3></div>
        <div className="line"></div>
      </div>

      <div className='expiry-container'>
        {medicineData.map((medicine, index) => (
          <div className='expiry-card' key={index}>
            <div className='content'>
              <div className='expiry-image'>
                <img src={`./companylogo/7514751.jpg`} height='100' width='100' alt={medicine.name} />
              </div>
              <div className='medicine-details'>
                <h3 className='heading'  style={{  fontSize:"14px" }}>Medicine Name</h3>
            
                <h3>{medicine.med_name}</h3>
                <p style={{ color: "#FF0000" }}>{medicine.expiry_date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add more spacing or other content below if needed */}
    </>
  );
};

export default Expired;
