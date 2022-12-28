import styled from "styled-components";
import { COLORS } from "styles";
import { ICard } from "types";

interface Props extends ICard {
  openModalCard: (id: string) => void;
  findCountComments: (id: string) => number | undefined;
}

export const CardItem: React.FC<Props> = ({
  id,
  title,
  openModalCard,
  findCountComments,
}) => {
  return (
    <Root onClick={() => openModalCard(id)}>
      {title}
      <span>&#9993; {findCountComments(id)}</span>
    </Root>
  );
};

const Root = styled.div`
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
`;
