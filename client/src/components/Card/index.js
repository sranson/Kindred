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

  const deleteTheCategory = (e) => {
    e.preventDefault();
    changeBtnText("DELETED!");
    try {
      removeCategory({
        // variables: {
        //   categoryId,
        // },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (props.image) {
    return (
      <div style={{ marginLeft: "4%" }}>
        <div className="card" style={{ width: "18rem" }}>
          <img
            width="285"
            height="315"
            src={props.image}
            className="card-img-top"
            alt="..."
          />
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
                <a
                  href="#"
                  target="_blank"
                  className="btn btn-primary"
                  onClick={deleteTheCategory}
                >
                  {text}
                </a>
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
                <a
                  href="#"
                  target="_blank"
                  className="btn btn-primary"
                  onClick={deleteTheCategory}
                >
                  {text}
                </a>
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

export default Card;

// return (
//   <div style={{ marginLeft: "4%" }}>
//     <div className="card" style={{ width: "18rem" }}>
//       <img src={props.image} className="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title">{props.title}</h5>
//         <p className="card-text">{props.description}...</p>
//         <div style={{ display: "flex", justifyContent: "space-between" }}>
//           <a href={props.moreInfo} target="_blank" className="btn btn-primary">
//             Read More
//           </a>
//           {props.profile ? (
//             <a href="#" target="_blank" className="btn btn-primary" onClick={deleteTheCategory}>
//               {text}
//             </a>
//           ) : (
//             <a href="#" target="_blank" className="btn btn-primary" onClick={saveTheCategory}>
//               {text}
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   </div>
// );
