import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to='/'>
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/1280px-LinkedIn_Logo_2013.svg.png"
        alt="linkedin icon"
        width="112px"
        height="28px"
        margin="0"
      />
    </Link>
  );
}
