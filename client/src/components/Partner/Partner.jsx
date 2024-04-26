import React from "react";
import Card from "../UI/Card";
import "./Partner.css";

const Partner = () => {
  const data = [
    {
      id: 1,
      name: "producers",
      img: "https://source.unsplash.com/1600x900/?musician,guitar,music,art,performance",
      description:
       ""
    },
    {
      id: 2,
      name: "Aritsts",
      img: "https://source.unsplash.com/1600x900/?musician,guitar,music,art,performance",
      description:
      ""
        
    },
    {
      id: 3,
      name: "Others",
      img: "https://source.unsplash.com/1600x900/?musician,guitar,music,art,performance",
      description:
      ""
        
    },
  ];
  return (
    <div className="partner-page">
      <div className="title">
        <h1>Our Partnered NGO's</h1>
      </div>
      <div className="partner">
        {data.map((partner) => {
          return (
            <Card
              name={partner.name}
              des={partner.description}
              img={partner.img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Partner;
