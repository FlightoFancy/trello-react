import { Board, Header, UserModal } from "components";
import styled from "styled-components";
import { COLORS } from "styles";

function App() {
  return (
    <Container>
      {
        <>
          <UserModal />
        </>
      }
      <Header />
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
  padding: 2em;
`;
