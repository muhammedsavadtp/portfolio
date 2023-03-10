import React from "react";
import "./style.css";

const Rating = () => {


  return (
    <div id="rating">
      <div className="ratingBox" style={{}}>
        <div className="rating_img">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50px"
            height="50px"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10 15.9706L5.70492 17.8855C5.00142 18.1991 4.22234 17.6331 4.30325 16.8671L4.79719 12.1905L1.64874 8.69737C1.13305 8.12523 1.43063 7.20937 2.18413 7.04961L6.78449 6.07423L9.13372 2.00044C9.5185 1.33319 10.4815 1.33319 10.8663 2.00044L13.2155 6.07423L17.8159 7.04961C18.5694 7.20937 18.8669 8.12523 18.3513 8.69737L15.2028 12.1905L15.6967 16.8671C15.7777 17.6331 14.9986 18.1991 14.2951 17.8855L10 15.9706Z"
              fill="#fff"
            />
          </svg>
        </div>
        <h1>15 National</h1>
        <p>Awards</p>
      </div>
      <div className="ratingBox" style={{}}>
        <div className="rating_img">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            fill="#fff"
            width="50px"
            height="50px"
            viewBox="0 0 36 36"
            version="1.1"
            preserveAspectRatio="xMidYMid meet"
          >
            <title>blocks-group-solid</title>
            <path
              d="M33.53,18.76,26.6,15.57V6.43A1,1,0,0,0,26,5.53l-7.5-3.45a1,1,0,0,0-.84,0l-7.5,3.45a1,1,0,0,0-.58.91v9.14L2.68,18.76a1,1,0,0,0-.58.91v9.78h0a1,1,0,0,0,.58.91l7.5,3.45a1,1,0,0,0,.84,0l7.08-3.26,7.08,3.26a1,1,0,0,0,.84,0l7.5-3.45a1,1,0,0,0,.58-.91h0V19.67A1,1,0,0,0,33.53,18.76ZM25.61,22,20.5,19.67l5.11-2.35,5.11,2.35Zm-1-6.44-6.44,3V10.87a1,1,0,0,0,.35-.08L24.6,8v7.58ZM18.1,4.08l5.11,2.35L18.1,8.78,13,6.43ZM10.6,17.31l5.11,2.35L10.6,22,5.49,19.67Zm6.5,11.49-6.5,3h0V24.11h0A1,1,0,0,0,11,24l6.08-2.8Zm15,0-6.46,3V24.11A1,1,0,0,0,26,24l6.08-2.8Z"
              class="clr-i-solid clr-i-solid-path-1"
            />
            <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
          </svg>
        </div>
        <h1>1500+ Happy</h1>
        <p>Customers</p>
      </div>
      <div
        className="ratingBox"
        style={{
          borderRight: "none",
          width: " 19rem",
        }}
      >
        <div className="rating_img">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect width="24" height="24" fill="" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.36129 3.46995C6.03579 3.16081 6.76287 3 7.50002 3C8.23718 3 8.96425 3.16081 9.63875 3.46995C10.3129 3.77893 10.9185 4.22861 11.4239 4.78788C11.7322 5.12902 12.2678 5.12902 12.5761 4.78788C13.5979 3.65726 15.0068 3.00001 16.5 3.00001C17.9932 3.00001 19.4021 3.65726 20.4239 4.78788C21.4427 5.91515 22 7.42425 22 8.9792C22 10.5342 21.4427 12.0433 20.4239 13.1705L14.2257 20.0287C13.0346 21.3467 10.9654 21.3467 9.77429 20.0287L3.57613 13.1705C3.07086 12.6115 2.67474 11.9531 2.40602 11.2353C2.13731 10.5175 2 9.75113 2 8.9792C2 8.20728 2.13731 7.44094 2.40602 6.72315C2.67474 6.00531 3.07086 5.34694 3.57613 4.78788C4.08157 4.22861 4.68716 3.77893 5.36129 3.46995Z"
              fill="#fff"
            />
          </svg>
        </div>
        <h1>2700+ Lovely</h1>
        <p>Feedbacks</p>
      </div>
    </div>
  );
};

export default Rating;
