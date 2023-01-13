import React from "react";
import PropTypes from "prop-types";

import { Panel, PanelHeader } from "@vkontakte/vkui";

import { useEffect } from "react";
import { useState } from "react";
import { Username } from "../components/Username";

const token =
  "eb24396c030b4e2a743650fe522ed767e7327cb3fe6c39149d7fc4eb91518c4063bad17e";

const Stats = ({ id, go }) => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch(
      `https://pedestal.aiva-studio.ru/apiv1/ratingUserGet.php?access_token=${token}&details=1`
    )
      .then((res) => res.json())
      .then((stats) => setStats(stats.response));
  }, []);
  console.log(stats);

  return (
    <Panel id={id}>
      <PanelHeader>Статистика</PanelHeader>
      <h1 className="panel-title">Статистика всех наших подписчиков</h1>
      <div className="table-container">
        <table className="stats-table">
          <thead>
            <tr>
              <td className="thead-td-1">Имя участника</td>
              <td>Место</td>
              <td>💗</td>
              <td>💬</td>
              <td>Баллы</td>
            </tr>
          </thead>
          <tbody className="stats-body">
            {stats.map((row, i) => (
              <tr>
              <td className="user-name">
                {row?.id_user_vk && (
                  <Username userId={row.id_user_vk} />
                )}
              </td>
              <td>{i + 1}</td>
              <td>{row?.count_likes}</td>
              <td>{row?.count_comments}</td>
              <td>{row?.rating}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
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

Stats.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Stats;
