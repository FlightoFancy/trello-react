import { useAppSelector } from "hooks";
import styled from "styled-components";

export const Header: React.FC = () => {
  const userName = useAppSelector((state) => state.user.user.name);

  return <Root>Имя пользователя: {userName}</Root>;
};

const Root = styled.header`
  margin: 0 0 1em 0;
`;
