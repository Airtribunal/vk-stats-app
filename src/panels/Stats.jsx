import React from "react";
import PropTypes from "prop-types";

import { Panel, PanelHeader } from "@vkontakte/vkui";

import "../style/global.css";

const Stats = ({ id, go }) => (
  <Panel id={id}>
    <PanelHeader>Статистика</PanelHeader>
    <h1 className="stats-title">Статистика всех наших подписчиков</h1>
    <table className="stats-table">
      <thead>
        <tr>
          <td></td>
          <td>Имя участника</td>
          <td>Место</td>
          <td>💗</td>
          <td>💬</td>
          <td>Баллы</td>
        </tr>
      </thead>
      <tbody className="stats-body">
        <tr>
          <td className="first-td">
            <a href="https://ramazanov-web.ru"></a>
          </td>
          <td className="user-name">Рамазанов Рамазан</td>
          <td>1</td>
          <td>2</td>
          <td>0</td>
          <td>20</td>
        </tr>
        <tr>
          <td className="first-td">
            <a href="https://ramazanov-web.ru"></a>
          </td>
          <td className="user-name">Мусаев Амир</td>
          <td>1</td>
          <td>2</td>
          <td>0</td>
          <td>20</td>
        </tr>
        <tr>
          <td className="first-td">
            <a href="https://ramazanov-web.ru"></a>
          </td>
          <td className="user-name">Рамазанов Рамазан</td>
          <td>1</td>
          <td>2</td>
          <td>0</td>
          <td>20</td>
        </tr>
        <tr>
          <td className="first-td">
            <a href="https://ramazanov-web.ru"></a>
          </td>
          <td className="user-name">Мусаев Амир</td>
          <td>1</td>
          <td>2</td>
          <td>0</td>
          <td>20</td>
        </tr>
        <tr>
          <td className="first-td">
            <a href="https://ramazanov-web.ru"></a>
          </td>
          <td className="user-name">Рамазанов Рамазан</td>
          <td>1</td>
          <td>2</td>
          <td>0</td>
          <td>20</td>
        </tr>
        <tr>
          <td className="first-td">
            <a href="https://ramazanov-web.ru"></a>
          </td>
          <td className="user-name">Мусаев Амир</td>
          <td>1</td>
          <td>2</td>
          <td>0</td>
          <td>20</td>
        </tr>
        <tr>
          <td className="first-td">
            <a href="https://ramazanov-web.ru"></a>
          </td>
          <td className="user-name">Рамазанов Рамазан</td>
          <td>1</td>
          <td>2</td>
          <td>0</td>
          <td>20</td>
        </tr>
        <tr>
          <td className="first-td">
            <a href="https://ramazanov-web.ru"></a>
          </td>
          <td className="user-name">Мусаев Амир</td>
          <td>1</td>
          <td>2</td>
          <td>0</td>
          <td>20</td>
        </tr>
        <tr>
          <td className="first-td">
            <a href="https://ramazanov-web.ru"></a>
          </td>
          <td className="user-name">Рамазанов Рамазан</td>
          <td>1</td>
          <td>2</td>
          <td>0</td>
          <td>20</td>
        </tr>
        <tr>
          <td className="first-td">
            <a href="https://ramazanov-web.ru"></a>
          </td>
          <td className="user-name">Мусаев Амир</td>
          <td>1</td>
          <td>2</td>
          <td>0</td>
          <td>20</td>
        </tr>
        <tr>
          <td className="first-td">
            <a href="https://ramazanov-web.ru"></a>
          </td>
          <td className="user-name">Рамазанов Рамазан</td>
          <td>1</td>
          <td>2</td>
          <td>0</td>
          <td>20</td>
        </tr>
        <tr>
          <td className="first-td">
            <a href="https://ramazanov-web.ru"></a>
          </td>
          <td className="user-name">Мусаев Амир</td>
          <td>1</td>
          <td>2</td>
          <td>0</td>
          <td>20</td>
        </tr>
        <tr>
          <td className="first-td">
            <a href="https://ramazanov-web.ru"></a>
          </td>
          <td className="user-name">Рамазанов Рамазан</td>
          <td>1</td>
          <td>2</td>
          <td>0</td>
          <td>20</td>
        </tr>
        <tr>
          <td className="first-td">
            <a href="https://ramazanov-web.ru"></a>
          </td>
          <td className="user-name">Мусаев Амир</td>
          <td>1</td>
          <td>2</td>
          <td>0</td>
          <td>20</td>
        </tr>
        <tr>
          <td className="first-td">
            <a href="https://ramazanov-web.ru"></a>
          </td>
          <td className="user-name">Рамазанов Рамазан</td>
          <td>1</td>
          <td>2</td>
          <td>0</td>
          <td>20</td>
        </tr>
        <tr>
          <td className="first-td">
            <a href="https://ramazanov-web.ru"></a>
          </td>
          <td className="user-name">Мусаев Амир</td>
          <td>1</td>
          <td>2</td>
          <td>0</td>
          <td>20</td>
        </tr>
        <tr>
          <td className="first-td">
            <a href="https://ramazanov-web.ru"></a>
          </td>
          <td className="user-name">Рамазанов Рамазан</td>
          <td>1</td>
          <td>2</td>
          <td>0</td>
          <td>20</td>
        </tr>
        <tr>
          <td className="first-td">
            <a href="https://ramazanov-web.ru"></a>
          </td>
          <td className="user-name">Мусаев Амир</td>
          <td>1</td>
          <td>2</td>
          <td>0</td>
          <td>20</td>
        </tr>
        <tr>
          <td className="first-td">
            <a href="https://ramazanov-web.ru"></a>
          </td>
          <td className="user-name">Рамазанов Рамазан</td>
          <td>1</td>
          <td>2</td>
          <td>0</td>
          <td>20</td>
        </tr>
        <tr>
          <td className="first-td">
            <a href="https://ramazanov-web.ru"></a>
          </td>
          <td className="user-name">Мусаев Амир</td>
          <td>1</td>
          <td>2</td>
          <td>0</td>
          <td>20</td>
        </tr>
      </tbody>
    </table>
    <div className="buttons-container">
      <button onClick={() => go("home")} className="route-button">
        Главная
      </button>
      <button onClick={() => go("stats")} className="route-button">
        Статистика
      </button>
    </div>
  </Panel>
);

Stats.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Stats;
