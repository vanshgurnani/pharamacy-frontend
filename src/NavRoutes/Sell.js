import React, { useState } from 'react';
import './SellMedi.css';
import QrReader from 'react-qr-scanner';
import axios from 'axios';

const Sell = () => {
  const [companyName, setCompanyName] = useState('');
  const [medicineName, setMedicineName] = useState('');
  const [medicineType, setMedicineType] = useState('');
  const [medicineExpiry, setMedicineExpiry] = useState('');
  const [medicineMFD, setMedicineMFD] = useState('');
  const [medicinePrice, setMedicinePrice] = useState('');
  const [medicineStock, setMedicineStock] = useState('');
  const [supplierNumber, setSupplierNumber] = useState('');

  const handleScan = (data) => {
    if (data) {
      let scannedData = data;
      if (typeof data !== 'string') {
        scannedData = JSON.stringify(data);
        console.log(scannedData);
      }

      const dataArray = scannedData.split(',');
      if (dataArray.length >= 8) {
        setCompanyName(dataArray[0]);
        setMedicineName(dataArray[1]);
        setMedicineType(dataArray[2]);
        setMedicineExpiry(dataArray[3]);
        setMedicineMFD(dataArray[4]);
        setMedicinePrice(dataArray[5]);
        setMedicineStock(dataArray[6]);
        setSupplierNumber(dataArray[7]);
      } else {
        console.error('Scanned data does not contain enough information');
      }
    } else {
      console.error('Scanned data is undefined or null');
    }
  };

  const handleConfirmButton = async () => {
    // Implement your confirmation logic here
    // Example: alert("STOCK UPDATED, MEDICINE : " + medicineName + " has been sold");
    try {
      const response = await axios.get(`https://pharmacy-six-drab.vercel.app/api/getmedicinename/${medicineName}/${companyName}`);
      // Handle the response data as needed
    } catch (error) {
      console.error('Error fetching medicine:', error);
      // Handle error here
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className="qr-scanner">
      <h2>QR Code Scanner</h2>
      <div className="scanner-container">
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
      </div>

      <div className="scanned-data">
        <table className="medicinedatatable">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Medicine Name</th>
              <th>Medicine Type</th>
              <th>Medicine Expiry</th>
              <th>Medicine MFD</th>
              <th>Medicine Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td id="COMPANY_NAME">{companyName.substring(9)}</td>
              <td id="MEDICINE_NAME">{medicineName}</td>
              <td>{medicineType}</td>
              <td>{medicineExpiry}</td>
              <td>{medicineMFD}</td>
              <td>{medicinePrice}</td>
              <td>
                <input
                  type="number"
                  id="medicinestock"
                  name="medicinestock"
                  value={medicineStock}
                  onChange={(e) => setMedicineStock(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button onClick={handleConfirmButton}>Confirm</button>
    </div>
  );
};

export default Sell;
