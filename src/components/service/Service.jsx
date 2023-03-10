import React from "react";
import "./style.css";
const Service = () => {
  const service = [
    {
      symbols: "favorite",
      service: "web Developing",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, temporibus ab. In, necessitatibus consequuntur. Aspernatur quisquam minus ratione, corrupti possimus nulla voluptates dolore recusandae omnis delectus fuga veniam non? Fugit!",
    },
    {
      symbols: "code",
      service: "web Developing",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, temporibus ab. In, necessitatibus consequuntur. Aspernatur quisquam minus ratione, corrupti possimus nulla voluptates dolore recusandae omnis delectus fuga veniam non? Fugit! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, temporibus ab. In, necessitatibus consequuntur. Aspernatur quisquam minus ratione, corrupti possimus nulla voluptates dolore recusandae omnis delectus fuga veniam non? Fugit! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, temporibus ab. In, necessitatibus consequuntur. Aspernatur quisquam minus ratione, corrupti possimus nulla voluptates dolore recusandae omnis delectus fuga veniam non? Fugit! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, temporibus ab. In, necessitatibus consequuntur. Aspernatur quisquam minus ratione, corrupti possimus nulla voluptates dolore recusandae omnis delectus fuga veniam non? Fugit!",
    },
    {
      symbols: "html",
      service: "web designing",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, temporibus ab. In, necessitatibus consequuntur. Aspernatur quisquam minus ratione, corrupti possimus nulla voluptates dolore recusandae omnis delectus fuga veniam non? Fugit!",
    },
    {
      symbols: "javascript",
      service: "web Developing ",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, temporibus ab. In, necessitatibus consequuntur. Aspernatur quisquam minus ratione, corrupti possimus nulla voluptates dolore recusandae omnis delectus fuga veniam non? Fugit!",
    },
    {
      symbols: "css",
      service: "stylish web designing",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, temporibus ab. In, necessitatibus consequuntur. Aspernatur quisquam minus ratione, corrupti possimus nulla voluptates dolore recusandae omnis delectus fuga veniam non? Fugit!",
    },
    {
      symbols: "grade",
      service: "web Developing",
      content:
        "Lorem ipsLorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, temporibus ab. In, necessitatibus consequuntur. Aspernatur quisquam minus ratione, corrupti possimus nulla voluptates dolore recusandae omnis delectus fuga veniam non? Fugit! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, temporibus ab. In, necessitatibus consequuntur. Aspernatur quisquam minus ratione, corrupti possimus nulla voluptates dolore recusandae omnis delectus fuga veniam non? Fugit! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, temporibus ab. In, necessitatibus consequuntur. Aspernatur quisquam minus ratione, corrupti possimus nulla voluptates dolore recusandae omnis delectus fuga veniam non? Fugit! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, temporibus ab. In, necessitatibus consequuntur. Aspernatur quisquam minus ratione, corrupti possimus nulla voluptates dolore recusandae omnis delectus fuga veniam non? Fugit!um dolor sit amet consectetur, adipisicing elit. Impedit, temporibus ab. In, necessitatibus consequuntur. Aspernatur quisquam minus ratione, corrupti possimus nulla voluptates dolore recusandae omnis delectus fuga veniam non? dsf Fugit!",
    },
    {
      symbols: " download",
      service: "web Developing",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, temporibus ab. In, necessitatibus consequuntur. Aspernatur quisquam minus ratione, corrupti possimus nulla voluptates dolore recusandae omnis delectus fuga veniam non? Fugit!",
    },
    {
      symbols: " swap_vert",
      service: "web Developing",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, temporibus ab. In, necessitatibus consequuntur. Aspernatur quisquam minus ratione, corrupti possimus nulla voluptates dolore recusandae omnis delectus fuga veniam non? Fugit!",
    },
    {
      symbols: " heart_plus",
      service: "web Developing",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, temporibus ab. In, necessitatibus consequuntur. Aspernatur quisquam minus ratione, corrupti possimus nulla voluptates dolore recusandae omnis delectus fuga veniam non? Fugit!",
    },
  ];

  return (
    <div id="service">
      <h1>My Best Services</h1>
      <div className="grid_box">
        {service.map((res, index) => (
          <div key={index} className="services">
            <div className="box_services">
              <div className="img_icon_service">
                <span class="material-symbols-outlined">{res.symbols}</span>
                {/* <img src="" alt="img" /> */}
              </div>
              <span className="title_s">{res.service}</span>
              <p>{res.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
