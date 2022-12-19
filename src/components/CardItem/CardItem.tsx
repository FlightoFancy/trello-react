import styled from "styled-components";
import { ICard } from "types";

interface CardItemProps extends ICard {
  openModalCard: (detail: ICard) => void;
}

export const CardItem: React.FC<CardItemProps> = ({
  id,
  title,
  description,
  openModalCard,
}) => {
  return (
    <Root onClick={() => openModalCard({ id, title, description })}>
      {title}
    </Root>
  );
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
