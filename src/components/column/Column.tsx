import { ICard } from "types";
import { AddCard, CardList } from "components";

interface Props {
  items: ICard[];
  openModalCard: (id: string) => void;
  columnId: string;
}

export const Column: React.FC<Props> = ({ openModalCard, columnId, items }) => {
  return (
    <>
      <CardList items={items} openModalCard={openModalCard} />
      <AddCard columnId={columnId} />
    </>
  );
};
