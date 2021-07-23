import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { SAVE_CATEGORY } from '../../utils/mutations';

const SimilarResultCard = (props) => {

  const [saveCategory] = useMutation(SAVE_CATEGORY);
  const [text, setText] = useState("Save")

  const changeBtnText = () => {
    setText("SAVED!")
  }

  const saveTheCategory = (e) => {
    e.preventDefault();
    changeBtnText()
    try {
      saveCategory({
        variables: {
          title: props.title,
          type: props.type,
          description: props.description,
          wikiUrl: props.moreInfo,
          youtubeUrl: props.video
        }
      })
    } catch(err) {
      console.error(err)
    }
  }

  if (props.video !== null) {
    return (
        <div style={{ marginLeft: "4%" }}>
            <div className="card" style={{width: "18rem"}}>
              <iframe width="285" height="315"
                  src={props.video}>
              </iframe>
              <div className="card-body">
                  <h5 className="card-title">{props.title}</h5>
                  <p className="card-text">{props.description}...</p>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <a href={props.moreInfo} target="_blank" className="btn btn-primary">Read More</a>
                        <a href="#" target="_blank" className="btn btn-primary" onClick={saveTheCategory}>{text}</a>
                  </div>
              </div>
            </div>
        </div>
    )
  } else {
    return (
        <div style={{ marginLeft: "4%" }}>
            <div className="card" style={{width: "18rem"}}>
              <div className="card-body">
                  <h5 className="card-title">{props.title}</h5>
                  <p className="card-text">{props.description}...</p>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <a href={props.moreInfo} target="_blank" className="btn btn-primary">Read More</a>
                        <a href="#" target="_blank" className="btn btn-primary" onClick={saveTheCategory}>{text}</a>
                  </div>
              </div>
            </div>
        </div>
    )
  }


};

export default SimilarResultCard;
