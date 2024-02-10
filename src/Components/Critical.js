// Expired.js
import React, { useState, useEffect } from "react";

import './CriticalStock.css';

const Critical = () => {
  const [medicineData, setMedicineData] = useState([]);

  useEffect(() => {
    const fetchMedicineData = async () => {
      try {
        const response = await fetch('https://pharmacy-six-drab.vercel.app/api/getmedicinesstock');
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
        <div className="line-text">
          <h3>Stock Alert</h3>
        </div>
        <div className="line"></div>
      </div>


      <div className='critical-container'>
        {medicineData.map((medicine, index) => (
          <div className='critical-card' key={index}>
            <div className='critical-content'>
              <div className='critical-image'>
                <img src={`./companylogo/7514751.jpg`} height='100' width='100' alt='Medicine' />
              </div>
              <div className='critical-medicine-details'>
                <div className='critical-medi-name'>
                  <h3 className='critical-heading' style={{ fontSize: "14px" }}>Medicine Name</h3>
                  <h3>{medicine.med_name}</h3>
                </div>
                <div className='critical-medi-stock'>
                  <h3 className='heading' style={{ fontSize: "14px" }}>Medicine Stock</h3>
                  <h3 style={{ color: "red" }}>{medicine.stock}</h3>
                </div>
                {/* Additional data to be displayed on hover */}
                <div className='critical-supplier'>
                  <p>Supplier:<br></br>{medicine.company_name}</p>
                  <p>Supplier Number:<br></br> {medicine.Supplier_contact}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      {/* Add more spacing or other content below if needed */}
    </>
  );
};

export default Critical;  