import React from "react";
import "./styles/card.css";

export default function Card(props) {
  return (
    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
      <div className="card h-100 hover-shadow">
        <img
          src={props.src}
          className="tinggi card-img"
          alt="Card Influencer"
        />
        {props.top ? (
          <div className="card-img-overlay float-end p-2 fw-bold fs-6">top</div>
        ) : null}

        <div className="card-body">
          <div className="fw-bolder fs-5">{props.name}</div>
          <div className="text-secondary">{props.jenis}</div>
          <div className="fw-bolder mt-2 textColor">{props.fllwr}</div>
        </div>
      </div>
    </div>
  );
}
