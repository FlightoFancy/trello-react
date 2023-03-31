import { ICard } from "types";
import { AddCard, CardList } from "components";

interface Props {
  items: ICard[];
  openModalCard: (id: string) => void;
  createCard: (card: ICard) => void;
  findCountComments: (id: string) => number | undefined;
  columnId: string;
}

export const Column: React.FC<Props> = ({
  openModalCard,
  createCard,
  items,
  findCountComments,
  columnId,
}) => {
  return (
    <>
      <CardList
        items={items}
        openModalCard={openModalCard}
        findCountComments={findCountComments}
      />
      <AddCard createCard={createCard} columnId={columnId} />
    </>
  );
};
