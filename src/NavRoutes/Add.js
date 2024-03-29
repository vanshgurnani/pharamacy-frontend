import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import QrReader from 'react-qr-scanner';
import "../NavRoutes/AddData.css";

const Add = () => {


  const [result, setResult] = useState(null); 
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
  const handleExtractedData = (dataArray) => {
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
  };


  const handleError = (err) => {
    console.error(err);
  };
  const [showCamera, setShowCamera] = useState(false);



  const handleOverlayClick = () => {
    setShowCamera(true);
  };

  const handleConfirm = async () => {
    try {
      const response = await axios.post('https://pharmacy-six-drab.vercel.app/postmedicines', {
        company_name: companyName.substring(9),
        med_name: medicineName,
        med_type:medicineType,
        date_of_arrival: new Date(),
        expiry_date: new Date(medicineExpiry),
        stock: parseInt(medicineStock, 10),
        price: parseInt(medicinePrice, 10),
        manufacture_date: new Date(medicineMFD),
        supplier_number: parseInt(supplierNumber, 10),
      });

      if (response.ok) {
        console.log('Medicine added successfully');
        setCompanyName('');
        setMedicineName('');
      } else {
        const errorMessage = await response.text(); 
        console.error('Error adding medicine:', errorMessage);
      }
    } catch (error) {
      console.error('Error adding medicine:', error);
    }

  };


  return (
    <div>
      <div className='data-box'>
        <div className='data-medi-video'>
          <div className='data-video'>
            {showCamera ? (
              <div>
                <QrReader
                  delay={300}
                  onError={handleError}
                  onScan={handleScan}
                  style={{ width: '100%' }}
                />

              </div>
            ) : (
              <div className='overlay' onClick={handleOverlayClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="208" height="176" viewBox="0 0 208 176" fill="none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="208" height="176" viewBox="0 0 208 176" fill="none">
                    <path d="M208 12V52C208 55.1826 206.736 58.2348 204.485 60.4853C202.235 62.7357 
  199.183 64 196 64C192.817 64 189.765 62.7357 187.515 60.4853C185.264 
  58.2348 184 55.1826 184 52V24H156C152.817 24 149.765 22.7357 147.515 20.4853C145.264 
  18.2348 144 15.1826 144 12C144 8.8174 145.264 5.76515 147.515 3.51472C149.765 1.26428 152.817 
  0 156 0H196C199.183 0 202.235 1.26428 204.485 3.51472C206.736 5.76515 208 8.8174 208 12ZM52 152H24V124C24 
  120.817 22.7357 117.765 20.4853 115.515C18.2348 113.264 15.1826 112 12 112C8.8174 112 5.76516 113.264 3.51472 
  115.515C1.26428 117.765 0 120.817 0 124V164C0 167.183 1.26428 170.235 3.51472 172.485C5.76516 174.736 8.8174 176 12 
  176H52C55.1826 176 58.2348 174.736 60.4853 172.485C62.7357 170.235 64 167.183 64 164C64 160.817 62.7357 
  157.765 60.4853 155.515C58.2348 153.264 55.1826 152 52 152ZM196 112C192.817 112 189.765 113.264 187.515 
  115.515C185.264 117.765 184 120.817 184 124V152H156C152.817 152 149.765 153.264 147.515 155.515C145.264 157.765
   144 160.817 144 164C144 167.183 145.264 170.235 147.515 172.485C149.765 174.736 152.817 176 156 176H196C199.183 176 202.235 
   174.736 204.485 172.485C206.736 170.235 208 167.183 208 164V124C208 120.817 206.736 117.765 204.485 115.515C202.235 113.264 
   199.183 112 196 112ZM12 64C15.1826 64 18.2348 62.7357 20.4853 60.4853C22.7357 58.2348 24 55.1826
    24 52V24H52C55.1826 24 58.2348 22.7357 60.4853 20.4853C62.7357 18.2348 64 15.1826 64 12C64 8.8174 62.7357 
    5.76515 60.4853 3.51472C58.2348 1.26428 55.1826 0 52 0H12C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428
     5.76515 0 8.8174 0 12V52C0 55.1826 1.26428 58.2348 3.51472 60.4853C5.76516 62.7357 8.8174 64 12 64ZM64 40C60.8174 40 57.7652 41.2643
      55.5147 43.5147C53.2643 45.7652 52 48.8174 52 52V124C52 127.183 53.2643 130.235 55.5147 132.485C57.7652 134.736 
      60.8174 136 64 136C67.1826 136 70.2348 134.736 72.4853 132.485C74.7357 130.235 76 127.183 
      76 124V52C76 48.8174 74.7357 45.7652 72.4853 43.5147C70.2348 41.2643 67.1826 40 64 40ZM156 
      124V52C156 48.8174 154.736 45.7652 152.485 43.5147C150.235 41.2643 147.183 40 144 40C140.817 
      40 137.765 41.2643 135.515 43.5147C133.264 45.7652 132 48.8174 132 52V124C132 127.183 133.264 
      130.235 135.515 132.485C137.765 134.736 140.817 136 144 136C147.183 136 150.235 134.736 152.485 
      132.485C154.736 130.235 156 127.183 156 124ZM104 40C100.817 40 97.7652 41.2643 95.5147 43.5147C93.2643 
      45.7652 92 48.8174 92 52V124C92 127.183 93.2643 130.235 95.5147 132.485C97.7652 134.736 100.817 136 104
       136C107.183 136 110.235 134.736 112.485 132.485C114.736 130.235 116 127.183 116 124V52C116 48.8174 114.736
        45.7652 112.485 43.5147C110.235 41.2643 107.183 40 104 40Z" fill="black" />
                  </svg>
                </svg>
                <h2>Scan Medicine's Barcode</h2>
                <p>To Reveal</p>
                <p>The Details</p>
              </div>
            )}
          </div>

          <div className='data-medi'>
            <div className='medicine-info'>
              <table className='medicinedatatable'>
                <thead>
                  <tr>
                    <th>Company Name</th>
                    <th>Medicine Name</th>
                    <th>Medicine Type</th>
                    <th>Medicine Expiry</th>
                    <th>Medicine MFD</th>
                    <th>Medicine Price</th>
                    <th>Medicine Stock</th>
                    <th>Supplier Number</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{companyName.substring(9)}</td>
                    <td>{medicineName}</td>
                    <td>{medicineType}</td>
                    <td>{medicineExpiry}</td>
                    <td>{medicineMFD}</td>
                    <td>{medicinePrice}</td>
                    <td>{medicineStock}</td>
                    <td>{supplierNumber.substring(0, 10)}</td>
                  </tr>
                </tbody>
              </table>
           
              
              <div>


              </div>



            </div>
          </div>


          <div className='ConfirmButton'>
            <button className='Confirm' onClick={handleConfirm}>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
