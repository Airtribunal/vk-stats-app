import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import { nanoid } from "nanoid";
import {
  View,
  ScreenSpinner,
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  SplitLayout,
  SplitCol,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import Home from "./panels/Home";
import Stats from "./panels/Stats";
import Stores from "./panels/Stores";

const App = () => {
  const [scheme, setScheme] = useState("bright_light");
  const [activePanel, setActivePanel] = useState("home");
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />);
  const [stores, setStores] = useState([]);

  useEffect(() => {
    bridge.subscribe(({ detail: { type, data } }) => {
      if (type === "VKWebAppUpdateConfig") {
        setScheme(data.scheme);
      }
    });

    async function fetchData() {
      const user = await bridge.send("VKWebAppGetUserInfo");
      setUser(user);
      setPopout(null);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function getStores() {
      fetch("https://vk.musaev.online/api/shops")
        .then((res) => res.json())
        .then((data) => setStores(data));
      console.log(stores);
    }
    getStores();
  }, []);

  const storesArray = stores.map((store) => {
    return (
      <tr key={nanoid}>
        <td className="store-name">{store.name}</td>
        <td>{store.address}</td>
      </tr>
    );
  });

  const go = (panel) => {
    setActivePanel(panel);
  };

  return (
    <ConfigProvider scheme={scheme}>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout popout={popout}>
            <SplitCol>
              <View activePanel={activePanel}>
                <Home id="home" fetchedUser={fetchedUser} go={go} />
                <Stats id="stats" go={go} />
                <Stores id="stores" go={go} storesArray={storesArray} />
              </View>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
