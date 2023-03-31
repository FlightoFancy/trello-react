import { ICard } from "types";
import { CardItem } from "components";

interface Props {
  items: ICard[];
  openModalCard: (id: string) => void;
  findCountComments: (id: string) => number | undefined;
  deleteCard: (id: string) => void;
}
export const CardList: React.FC<Props> = ({
  items,
  openModalCard,
  findCountComments,
  deleteCard,
}) => {
  return (
    <>
      {items.map((card) => (
        <CardItem
          key={card.id}
          openModalCard={openModalCard}
          findCountComments={findCountComments}
          deleteCard={deleteCard}
          {...card}
        />
      ))}
    </>
  );
};
