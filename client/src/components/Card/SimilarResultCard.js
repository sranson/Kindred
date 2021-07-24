import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { SAVE_CATEGORY } from "../../utils/mutations";
import { REMOVE_CATEGORY } from "../../utils/mutations";

const SimilarResultCard = (props) => {
  const [saveCategory] = useMutation(SAVE_CATEGORY);
  const [removeCategory, { error }] = useMutation(REMOVE_CATEGORY);

  const [text, setText] = useState();

  useEffect(() => {
    console.log("SIMILAR RESULT CARD HERE");
    if (props.profile) {
      setText("Delete");
    } else {
      setText("Save");
    }
  }, []);

  const changeBtnText = (text) => {
    setText(text);
  };

  const saveTheCategory = (e) => {
    e.preventDefault();
    changeBtnText("SAVED!");
    try {
      saveCategory({
        variables: {
          title: props.title,
          type: props.type,
          description: props.description,
          wikiUrl: props.moreInfo,
          youtubeUrl: props.video,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTheCategory = async (categoryTitle) => {
    changeBtnText("DELETED!");
    try {
      const { data } = await removeCategory({ variables: { categoryTitle } });

      if (!data) {
        throw new Error("something went wrong!");
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (props.video !== null) {
    return (
      <div style={{ marginLeft: "4%" }}>
        <div className="card" style={{ width: "18rem" }}>
          <iframe width="285" height="315" src={props.video}></iframe>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}...</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <a
                href={props.moreInfo}
                target="_blank"
                className="btn btn-primary"
              >
                Read More
              </a>
              {props.profile ? (
                <button
                  href="#"
                  target="_blank"
                  className="btn btn-primary"
                  onClick={() => deleteTheCategory(props.title)}
                >
                  {text}
                </button>
              ) : (
                <a
                  href="#"
                  target="_blank"
                  className="btn btn-primary"
                  onClick={saveTheCategory}
                >
                  {text}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ marginLeft: "4%" }}>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}...</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <a
                href={props.moreInfo}
                target="_blank"
                className="btn btn-primary"
              >
                Read More
              </a>
              {props.profile ? (
                <button
                  href="#"
                  target="_blank"
                  className="btn btn-primary"
                  onClick={() => deleteTheCategory(props.title)}
                >
                  {text}
                </button>
              ) : (
                <a
                  href="#"
                  target="_blank"
                  className="btn btn-primary"
                  onClick={saveTheCategory}
                >
                  {text}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default SimilarResultCard;
