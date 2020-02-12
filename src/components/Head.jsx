import React from "react";

const Head = ({ banner, button_banner }) => {
  return (
    <div className="banner">
      <h3 className="bannerText">{banner}</h3>
      <button className="btn btn-primary  btn-lg bannerButton">
        {button_banner}
      </button>
    </div>
  );
};
export default Head;
