import { useAppDispatch, useAppSelector } from "hooks";
import { exitUser } from "redux/ducks/User";
import { clearCardState } from "redux/ducks/Card";
import { clearCommentState } from "redux/ducks/Comment";
import styled from "styled-components";
import { Button } from "ui";

export const Header: React.FC = () => {
  const userName = useAppSelector((state) => state.user.user.name);
  const isUserAuth = useAppSelector((state) => state.user.user.isAuth);
  const dispatch = useAppDispatch();

  const handlerClick = () => {
    dispatch(exitUser());
    dispatch(clearCardState());
    dispatch(clearCommentState());
  };

  return (
    <Root>
      <span>Имя пользователя: {userName}</span>
      {isUserAuth ? (
        <Button onClick={handlerClick} variant="small">
          Выйти
        </Button>
      ) : null}
    </Root>
  );
};

const Root = styled.header`
  display: flex;
  align-items: flex-end;
  margin: 0 0 1em 0;
`;
