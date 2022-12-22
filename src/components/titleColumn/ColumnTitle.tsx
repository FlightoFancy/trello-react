import styled from "styled-components";
import { COLORS } from "styles";

interface Props {
  title: string;
  onClick: () => void;
}

export const ColumnTitle: React.FC<Props> = ({ title, onClick }) => {
  return <Root onClick={onClick}>{title}</Root>;
};

const Root = styled.h3`
  color: ${COLORS.white};
  text-align: center;
  margin-bottom: 0.7em;
`;
