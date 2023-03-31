import styled from "styled-components";
import { COLORS } from "styles";
import { ICard } from "types";
import { Button } from "ui";

interface Props extends ICard {
  openModalCard: (id: string) => void;
  findCountComments: (id: string) => number | undefined;
  deleteCard: (id: string) => void;
}

export const CardItem: React.FC<Props> = ({
  id,
  title,
  openModalCard,
  findCountComments,
  deleteCard,
}) => {
  return (
    <Root>
      <Card onClick={() => openModalCard(id)}>
        <Span>{title}</Span>
        <span>&#9993; {findCountComments(id)}</span>
      </Card>
      <Button variant="close" onClick={() => deleteCard(id)}>
        &#10006;
      </Button>
    </Root>
  );
};

const Card = styled.div`
  border: 1px solid ${COLORS.lightgrey};
  background-color: ${COLORS.white};
  padding: 5px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${COLORS.lightgrey};
  }
  display: flex;
  justify-content: space-between;
  width: 80%;
`;
const Root = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Span = styled.span`
  overflow: hidden;
  width: 70%;
`;
