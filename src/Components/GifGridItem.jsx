import React from "react";

function GifGridItem({ url, titile}) {
  return (
    <div className={`card`}>
      <img src={url} alt={titile}></img>
      <p>{titile}</p>
    </div>
  );
}

export default GifGridItem;
