import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { SAVE_CATEGORY } from "../../utils/mutations";
import { REMOVE_CATEGORY } from "../../utils/mutations";

const Card = (props) => {
  const [saveCategory] = useMutation(SAVE_CATEGORY);
  const [removeCategory, { error }] = useMutation(REMOVE_CATEGORY);

  const [text, setText] = useState("");

  useEffect(() => {
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
          image: props.image,
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

    return (
      <div style={{ marginLeft: "4%" }}>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description.substring(0, 80)}...</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <a href={props.moreInfo} target="_blank" className="btn btn-info">Read More</a>
              {props.profile ? (
                <button href="#" target="_blank" className="btn btn-info" onClick={() => deleteTheCategory(props.title)}>{text}</button>
              ) : (
                <button href="#" target="_blank" className="btn btn-info" onClick={saveTheCategory}>{text}</button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Card;

