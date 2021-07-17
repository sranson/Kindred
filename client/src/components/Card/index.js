import React from "react";
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
      <div style={{ marginLeft: "4%" }}>
          <div className="card" style={{width: "18rem"}}>
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <Link to={props.moreInfo} className="btn btn-primary">Read More</Link>
            </div>
          </div>
      </div>
  )

};

export default Card;
