import React from "react";


const Card = (props) => {
  return (
      <div style={{ marginLeft: "4%" }}>
          <div className="card" style={{width: "18rem"}}>
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}...</p>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <a href={props.moreInfo} target="_blank" className="btn btn-primary">Read More</a>
                        <a href="#" target="_blank" className="btn btn-primary">Save</a>
                  </div>
            </div>
          </div>
      </div>
  )

};

export default Card;
