import React from "react";
import '../style/global.css'

const ButtonsGroup = () => {
  return (
    <div className="buttons-container">
      <button onClick={() => go("home")} className="route-button">
        Главная
      </button>
      <button onClick={() => go("stats")} className="route-button">
        Статистика
      </button>
    </div>
  );
};

export default ButtonsGroup;
