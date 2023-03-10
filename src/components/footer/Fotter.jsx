import React from 'react'
import './style.css'

const Fotter = () => {
  const social = [
    "https://cdn.worldvectorlogo.com/logos/twitter-6.svg",
    "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",
    "https://cdn.worldvectorlogo.com/logos/whatsapp-business.svg",
    "https://cdn.worldvectorlogo.com/logos/telegram-1.svg",
    "https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg",
  ];
  return (
    <div id="footer">
      <div className="footer_box">
        <div className="dp_box">
          <div className="img">
            <img
              height={"80px"}
              width={"80px"}
              src="https://cdn-icons-png.flaticon.com/512/7199/7199666.png"
              alt="userName"
            />
          </div>
        </div>
        <h1>Let's Talk with Me!</h1>
        <p>
          I am always open to discuss your project, improve your online presence
          or help with your IJI/UX deesign
        </p>
      </div>
        {social.map((res, index) => (
      <div className="social_handle">
          <div key={index} className="dp_box">
            <div className="img">
              <img
                height={"40px"}
                width={"40px"}
                src={res}
                alt="social"
              />
            </div>
          </div>
      </div>
        ))}
      <div className="end_footer">
        <span>
          Created by <span className="userNameFooter">Savad</span>{" "}
          <span>I</span> All Reserved!{" "}
        </span>
      </div>
    </div>
  );
}

export default Fotter
