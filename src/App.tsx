import { useState } from "react";

import { Board, Header, UserModal } from "components";
import styled from "styled-components";
import { COLORS } from "styles";

function App() {
  const [name, setName] = useState(localStorage.getItem("userName") || "");

  const showName = (name: string) => {
    setName(name);
  };

  return (
    <Container>
      {localStorage.getItem("userName") ? null : (
        <>
          <UserModal showName={showName} />
        </>
      )}
      <Header userName={name} />
      <Board userName={name} />
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
