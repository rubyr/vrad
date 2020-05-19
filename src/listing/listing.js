import React from "react";
import "./listing.css";
import { NavLink } from "react-router-dom";

export const Listing = ({ name, url, id, favorite }) => (
  <NavLink to={url} activeClassName="selected">
    <div className={`Listing${favorite ? " favorite" : ""}`}>
      <h3>{name}</h3>
      <img src={`/images/${id}_a.jpg`} alt={name} />
    </div>
  </NavLink>
);

export default Listing;
