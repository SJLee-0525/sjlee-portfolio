import "./Introduction.css";

import React from "react";

const Introduction: React.FC = () => {
  return (
    <div id="introduction-page">
      <div className="introduction">
        <h1>안녕하세요.</h1>
        <h1>
          <span>이성준</span>입니다?.
        </h1>
        {/* <p>This is a simple React app that demonstrates the use of React Router.</p> */}
      </div>
    </div>
  );
};

export default Introduction;
