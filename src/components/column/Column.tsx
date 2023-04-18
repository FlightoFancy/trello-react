import { ICard } from "types";
import { AddCard, CardList } from "components";

interface Props {
  items: ICard[];
  openModalCard: (id: string) => void;
  createCard: (columnId: string, newCardTitle: string) => void;
  findCountComments: (id: string) => number | undefined;
  columnId: string;
  deleteCard: (id: string) => void;
}

export const Column: React.FC<Props> = ({
  openModalCard,
  createCard,
  items,
  findCountComments,
  columnId,
  deleteCard,
}) => {
  return (
    <>
      <CardList
        items={items}
        openModalCard={openModalCard}
        findCountComments={findCountComments}
        deleteCard={deleteCard}
      />
      <AddCard createCard={createCard} columnId={columnId} />
    </>
  );
};
