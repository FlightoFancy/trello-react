import { useAppDispatch, useAppSelector } from "hooks";
import { exitUser } from "redux/ducks/User";
import { clearCardState } from "redux/ducks/Card";
import { clearCommentState } from "redux/ducks/Comment";
import styled from "styled-components";
import React, { useMemo } from "react";
import { notification, Button, Space, Typography } from "antd";
import type { NotificationPlacement } from "antd/es/notification/interface";

const Context = React.createContext({ name: "default" });

export const Header: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();
  const { Title } = Typography;
  const userName = useAppSelector((state) => state.user.user.name);

  const contextValue = useMemo(() => ({ name: userName }), [userName]);

  const isUserAuth = useAppSelector((state) => state.user.user.isAuth);
  const dispatch = useAppDispatch();

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `Уведомление`,
      description: (
        <Context.Consumer>{() => `Пока, ${userName}!`}</Context.Consumer>
      ),
      placement,
      duration: 3,
    });
  };

  const handlerClick = () => {
    dispatch(exitUser());
    dispatch(clearCardState());
    dispatch(clearCommentState());
    openNotification("bottomRight");
  };

  return (
    <Root>
      <Context.Provider value={contextValue}>{contextHolder}</Context.Provider>
      <Space>
        <Typography>
          <Title level={5}>Пользователь: {userName}</Title>
        </Typography>
        {isUserAuth ? (
          <Button onClick={handlerClick} type="primary">
            Выйти
          </Button>
        ) : null}
      </Space>
    </Root>
  );
};

const Root = styled.header`
  display: flex;
  align-items: flex-end;
  margin: 0 0 1em 0;
`;
