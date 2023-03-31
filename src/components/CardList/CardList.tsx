import { ICard } from "types";
import { CardItem } from "components";

interface Props {
  items: ICard[];
  openModalCard: (id: string) => void;
  findCountComments: (id: string) => number | undefined;
}
export const CardList: React.FC<Props> = ({
  items,
  openModalCard,
  findCountComments,
}) => {
  return (
    <>
      {items.map((card) => (
        <CardItem
          key={card.id}
          openModalCard={openModalCard}
          findCountComments={findCountComments}
          {...card}
        />
      ))}
    </>
  );
};
