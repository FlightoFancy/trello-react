import styled from "styled-components";
import { COLORS } from "styles";
import { ICard } from "types";

interface Props extends ICard {
  openModalCard: (id: string) => void;
}

export const CardItem: React.FC<Props> = ({ id, title, openModalCard }) => {
  return <Root onClick={() => openModalCard(id)}>{title}</Root>;
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
`;
