import { ICard } from "types";
import { AddCard, CardList } from "components";
import { Space } from "antd";

interface Props {
  items: ICard[];
  openModalCard: (id: string) => void;
  columnId: string;
}

export const Column: React.FC<Props> = ({ openModalCard, columnId, items }) => {
  return (
    <Space direction="vertical">
      <CardList items={items} openModalCard={openModalCard} />
      <AddCard columnId={columnId} />
    </Space>
  );
};
