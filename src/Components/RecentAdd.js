

import React, { useState, useEffect } from 'react';
import '../Components/Recentcss.css';

const RecentAdd = () => {
  const [medicineData, setMedicineData] = useState([]);

  useEffect(() => {
    const fetchMedicineData = async () => {
      try {
        const response = await fetch('https://pharmacy-six-drab.vercel.app/api/getmedicines');
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
      <h3>Recently Added</h3>
      <div className='container'>
        <div className='card-container'>
          {medicineData.map((medicine, index) => (
            <div className="card" key={index}>
              <img src={medicine.imageUrl} height="300" alt="Medicine" />
              <div className="card-content">
                <h3 className="card-header">{medicine.med_name}</h3>
                <div className="card-meta">
                  <span className="date">{medicine.date_of_arrival}</span>
                </div>
                <p className="card-description">{medicine.Med_type}</p>
                <div className="card-det">
                  <span className="expiry"><b>Expiry Date: {medicine.expiry_date}</b></span>
                </div>
                {/* Render other medicine details as needed */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecentAdd;
