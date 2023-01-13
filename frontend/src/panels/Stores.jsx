import React from "react";
import { Panel, PanelHeader } from "@vkontakte/vkui";

const Stores = ({ id, go, storesArray }) => {
  return (
    <Panel id={id}>
      <PanelHeader>Магазины</PanelHeader>
      <h1 className="panel-title">Список магазинов которые откроются в январе</h1>

      <table className="stats-table stores">
        <thead>
          <tr>
            <td className="thead-td-1"> Название магазина</td>
            <td>Адрес</td>
          </tr>
        </thead>
        <tbody className="stats-body">{storesArray}</tbody>
      </table>
      <div style={{textAlign: 'center', fontSize: 17, fontWeight: 200}}>Кодовое слово, чтобы получить подарок в новом магазине</div>
      <div style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold', marginTop: 6}}>ПОДАРОЧЕК</div>
      <div className="buttons-container">
        <button onClick={() => go("home")} className="route-button">
          Главная
        </button>
        <button onClick={() => go("stats")} className="route-button">
          Статистика
        </button>
        <button onClick={() => go("stores")} className="route-button">
          Магазин
        </button>
      </div>
    </Panel>
  );
};

export default Stores;
