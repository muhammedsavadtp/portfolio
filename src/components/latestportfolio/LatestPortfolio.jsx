import React from 'react'
import './style.css'


const LatestPortfolio = () => {
    const items = [
      "http://placehold.it/600x400",
      "http://placehold.it/600x400",
      "http://placehold.it/600x400",
      "http://placehold.it/600x400",
      "http://placehold.it/600x400",
      "http://placehold.it/600x400",
    ];
  return (
    <div id="portfolio">
      <div className="heading_portfolio">
        <h1>Latest Portfolio</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore optio
          cupiditate amet modi veniam reiciendis iusto deleniti fugit, maxime
          quos!
        </p>
      </div>
      <div className="portfolios">
        {items.map((res,index) => (
          <div key={index} className="portfolio_item">
            <div className="portfolio_item_image">
              <img src={res} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestPortfolio
