import styled from "styled-components";
import { ICard } from "types";

interface Props extends ICard {
  openModalCard: (id: number) => void;
}

export const CardItem: React.FC<Props> = ({ id, title, openModalCard }) => {
  return <Root onClick={() => openModalCard(id)}>{title}</Root>;
};

const Root = styled.div`
  border: 1px solid lightgrey;
  background-color: #fff;
  padding: 5px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: lightgrey;
  }
`;
