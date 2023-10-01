import { ICard } from "types";
import { CardItem } from "components";
import { Space } from "antd";

interface Props {
  items: ICard[];
  openModalCard: (id: string) => void;
}
export const CardList: React.FC<Props> = ({ items, openModalCard }) => {
  return (
    <Space direction="vertical" style={{ display: "flex" }}>
      {items.map((card) => (
        <CardItem key={card.id} openModalCard={openModalCard} {...card} />
      ))}
    </Space>
  );
};
