import React from "react";
import PropTypes from "prop-types";

import {
  Panel,
  PanelHeader,
  Header,
  Button,
  Group,
  Cell,
  Div,
  Avatar,
} from "@vkontakte/vkui";
import "../style/global.css";

const Home = ({ id, go, fetchedUser }) => (
  <Panel id={id}>
    <PanelHeader>Главная</PanelHeader>
    {fetchedUser && (
      <Group
        className="greetings-group"
        header={<Header mode="secondary">Приветсвие нашего сообщества</Header>}
        sizeY="100"
      >
        <Cell
          before={
            fetchedUser.photo_200 ? (
              <Avatar src={fetchedUser.photo_200} />
            ) : null
          }
          description={
            "Это твоя статистка на данный момент"
          }
        >
          <h3 className="greetings-title">{`Привет, ${fetchedUser.first_name} 👋`}</h3>
          <h4 className="greetings-balance">Баланс: 0 плюшек 🍬</h4>
          <h4 className="greetings-rate">Рейтинг: 0 баллов 🎳</h4>
        </Cell>
        <p className="greetings-description">
          За активность в нашем сообществе тебе начисляются баллы, они
          аннулируются каждый месяц, но набранные баллы ежедневно переходят во
          внутреннюю валюту - валероны, которых ты можешь тратить на вкладке
          «магазин». А на вкладке «рейтинг» ты можешь ознакомиться с текущей
          статистикой конкурса активности. P.S: такой же кабинет пользователя ты
          можешь добавить в свою группу, придумать вместо валеронов свою валюту,
          добавлять свои товары. Конкуренты, честное слово, будут в шоке, а
          подписчики в радости.
        </p>
      </Group>
    )}
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

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

export default Home;
