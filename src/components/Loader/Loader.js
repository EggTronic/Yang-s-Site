import React from 'react';
import './loader.css';

function Loader() {
  return (
    <div className="spinner-box">
      <div className="large-orbit w1 leo"></div>
      <div className="short-orbit w2 leo"></div>
      <div className="short-orbit w3 leo"></div>
    </div>
  );
}

export default Loader;
