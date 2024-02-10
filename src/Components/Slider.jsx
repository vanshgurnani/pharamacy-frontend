
import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../Components/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
};

const SlideItem = ({ medicine }) => (
  <div className="slider" style={{ backgroundColor: "white" }}>
    <div className="card">
      <img src={`./companylogo/7514751.jpg`} height="300" alt={medicine.name} />
      <div className="card-content">
        <h3 className="card-header">{medicine.med_name}</h3>
        <div className="card-meta">
          <span className="date"><b>Arrival Date</b><br></br>{medicine.date_of_arrival}</span>
        </div>
        <p className="card-description"><b>Medicine Type</b><br></br>{medicine.Med_type}</p>
        <div className="card-det">
          <span className="expiry">
            <b>Expiry Date<br/>{medicine.expiry_date}</b>
          </span>
        </div>
      </div>
    </div>
  </div>
);

const SliderComponent = () => {
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
    <div className="parent">
      <div className="lined-wrap">
        <div className="line-text"><h3>Recently Added</h3></div>
        <div className="line"></div>
      </div>
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        itemClass="carousel-item-padding-40-px"
      >
        {medicineData.map((medicine, index) => (
          <SlideItem key={index} medicine={medicine} />
        ))}
      </Carousel>
    </div>
  );
};

export default SliderComponent;
