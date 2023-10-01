import { Divider } from "antd";
import { Board, Header, UserModal } from "components";
import { useAppSelector } from "hooks";
import styled from "styled-components";
import { COLORS } from "styles";

function App() {
  const isUserAuth = useAppSelector((state) => state.user.user.isAuth);

  return (
    <Container>
      {isUserAuth ? null : <UserModal />}
      <Header />
      <Divider />
      <Board />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${COLORS.blue};
  max-width: 100%;
  min-height: 100vh;
  padding: 1.5em;
`;
