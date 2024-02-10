import React from 'react';
import './Home.css';
import  '../Components/footerdata.css';
import styles from './Home.css';
export const Home = () => {
  return (
    <>
    <div className={styles.container}>
      <div className="homepage">
        <div className="Content">
          <div className="intro">
            <h1>MediStore: Streamlined Medicine Inventory Management</h1>
            <p>
              Welcome to PharmaSync, the leading online platform for medical
              professionals and pharmacies to effortlessly store and manage
              their medicine inventory.
            </p>
          </div>

          <div className="image">
            <img src="./inv.jpg" alt="MediStore Image" />
          </div>
        </div>
      </div>

      <div className="Services">
        <div className="ServicesHeader">
            <h3>Our Services</h3>
        </div>
        <div className="ServiceCardContainer">
          {/* service 1 */}
          <div className="ServiceCard">
            <div className="ServiceCard__Image">
              <img src="./inv.jpg" alt="Service 1" />
            </div>
            <div className="ServiceCard__Info">
              <h2>Service 1 Title</h2>
              <p>
              Welcome to PharmaSync, the leading online platform for medical
              professionals and pharmacies to effortlessly store and manage
              their medicine inventory.
              </p>
              <button>Learn More</button>
            </div>
          </div>

          {/* service 2 */}
          <div className="ServiceCard">
            <div className="ServiceCard__Image">
              <img src="./inv.jpg" alt="Service 2" />
            </div>
            <div className="ServiceCard__Info">
              <h2>Service 2 Title</h2>
              <p>
              Welcome to PharmaSync, the leading online platform for medical
              professionals and pharmacies to effortlessly store and manage
              their medicine inventory.
              </p>
              <button>Learn More</button>
            </div>
          </div>

          {/* service 3 */}
          <div className="ServiceCard">
            <div className="ServiceCard__Image">
              <img src="./inv.jpg" alt="Service 3" />
            </div>
            <div className="ServiceCard__Info">
              <h2>Service 3 Title</h2>
              <p>
              Welcome to PharmaSync, the leading online platform for medical
              professionals and pharmacies to effortlessly store and manage
              their medicine inventory.
              </p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>

      <div className="features-benefits">
        <div className="lined-wrapper">
          <div className="line"></div>
          <div className="lined-text">Features and Benefits</div>
          <div className="line"></div>
        </div>
        <div className='Details'>
            <div>
              <h3>Features</h3>
              <br/>
              <ul>
                <li>User-friendly interface for easy navigation and efficient management of medicine inventory.</li><br/>
                <li>Secure online storage of medicine-related information, ensuring confidentiality and privacy.</li><br/>
                <li>Advanced search and filter options to quickly locate specific medicines based on various parameters.</li><br/>
                <li>Automated alerts and reminders for low stock levels, expiry dates, and medication recalls.</li><br/>
                <li>Integrated barcode scanning functionality for seamless and accurate medicine tracking.</li><br/>
              </ul>
            </div>

            <div>
              <h3>Benefits</h3>
              <br/>
              <ul>
                <li>Efficient and organized inventory management: Our website provides medicals and pharmacies with a convenient platform to store and manage their medicine-related information online. This enables them to maintain an efficient and organized inventory, ensuring that medicines are readily available when needed.</li>
              </ul>
            </div>
        </div>
      </div>
      <div className="Header">
            <h3>Our Team</h3>
        </div>
      
      <div className='ourteamdiv'>
     

        <div className='user-container'>
          {/* user2 */}
            <div className='user-details'>
                <div className='user-pic'>
                    <img src="./inv.jpg" alt="Service 3" />
                </div>
                <div className='user-info'>
                  <h2>Prasad Pansare</h2>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </div>
        
            </div>
            {/* user2 */}
            <div className='user-details'>
                <div className='user-pic'>
                        <img src="./inv.jpg" alt="Service 3" />
                    </div>
                    <div className='user-info'>
                    <h2>Mansi Mulik</h2>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 

 </div>     
            </div>
            <div className='user-details'>
                <div className='user-pic'>
                        <img src="./inv.jpg" alt="Service 3" />
                    </div>
                    <div className='user-info'>
                    <h2>Pranav Hare</h2>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
</div>     
            </div>
            <div className='user-details'>
                <div className='user-pic'>
                        <img src="./inv.jpg" alt="Service 3" />
                    </div>
                    <div className='user-info'>
                    <h2>Divya Jagtap</h2>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
 </div>     
            </div>
            <div className='user-details'>
                <div className='user-pic'>
                        <img src="./inv.jpg" alt="Service 3" />
                    </div>
                    <div className='user-info'>
                    <h2>Anish Panwala</h2>
                        Mr Prasad has over a decade of experience as a licensed pharmacist, 
                        specializing in patient counseling, drug interactions, and medication 
                        therapy management, which has earned him a reputation for providing
                        compassionate care and accurate pharmaceutical advice to his patients.
                    </div>     
            </div>
        
        </div>
      </div>

      <footer className="footer">
  <div className="footer-content">
    <div className="contact-info">
      <h3>Contact Us</h3>
      <p>K/401,Hillview Residency,Kothrud,Pune </p>
      <p>Phone: (+91)9765559032</p>
      <p>Email: info@pharmasynx.com</p>
    </div>
    <div className="footer-links">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
      <a href="#">Facebook</a>
      <a href="#">Twitter</a>
      <a href="#">Instagram</a>
    </div>
  </div>
  
</footer>


</div>
    </>
    
  );
};
