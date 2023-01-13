import { useEffect } from "react";
import { useState } from "react";
import bridge from "@vkontakte/vk-bridge";
import { Avatar, SimpleCell } from "@vkontakte/vkui";

export const Username = (props) => {
  const { userId } = props;
  const [userData, setUserData] = useState();
  useEffect(() => {
    if (userId) {
      bridge
        .send("VKWebAppGetUserInfo", {
          user_id: +userId,
        })
        .then((data) => setUserData(data));
    }
  }, [userId]);
  if (!userData) {
    return null;
  }
  return (
    <a href={`https://vk.com/id${userData?.id}`} target="_blank">
      <SimpleCell before={<Avatar src={userData?.photo_100} />}>
        {userData?.first_name} {userData?.last_name}
      </SimpleCell>
    </a>
  );
};
