import React, { useState } from "react";
const FeedComponent = ({ id, title, body }) => {
  const [display, setDisplay] = useState(false);

  return (
    <article className="card p-2 m-2">
      <div className="d-flex justify-content-between ">
        <h5 className="card-title text-capitalize text-decoration-underline text-primary">
          {title}
        </h5>
        <figure style={{ cursor: "pointer" }}>
          <i
            className="bi bi-three-dots-vertical"
            onClick={() => setDisplay((prev) => !prev)}
          ></i>
        </figure>
      </div>
      <div className="card-body">{body}</div>

      {display && (
        <ul
          className="list-group position-absolute w-25"
          style={{ right: "2%", top: "23%" }}
        >
          {["Save", "Edit"].map((value, idx) => (
            <li key={idx} className="list-group-item list-group-item-action ">
              {value}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default FeedComponent;
