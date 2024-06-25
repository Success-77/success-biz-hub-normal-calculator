import React, { useState } from "react";
import Calculator from "./components/Single/components/Calculator";
import CalculateAll from "./components/All/components/CalculateAll";
import "./App.css";

const App = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);

    const tabsContainer = document.querySelector(".tabs");
    const homeHeader = document.querySelector(".tab-content");

    if (tab === "single") {
      tabsContainer.classList.add("tab-clicked");
      homeHeader.classList.add("move-tab-content");
    } else if (tab === "combine") {
      tabsContainer.classList.add("tab-clicked");
      homeHeader.classList.add("move-tab-content");
    }
  };

  return (
    <div className="calculate-single">
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === "single" ? "active" : ""}`}
          onClick={() => handleTabClick("single")}
          data-tab="single"
        >
          Single
        </button>
        <button
          className={`tab-button ${activeTab === "combine" ? "active" : ""}`}
          onClick={() => handleTabClick("combine")}
          data-tab="combine"
        >
          Combine
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "single" && <Calculator network="MTN" />}
        {activeTab === "combine" && <CalculateAll />}
      </div>
    </div>
  );
};

export default App;
