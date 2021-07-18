import React from "react";


const SimilarResultCard = (props) => {
  return (
      <div style={{ marginLeft: "4%" }}>
          <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}...</p>
                <a href={props.moreInfo} target="_blank" className="btn btn-primary">Read More</a>
            </div>
          </div>
      </div>
  )

};

export default SimilarResultCard;
