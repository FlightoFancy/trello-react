import styled from "styled-components";

interface TitleProps {
  title: string;
  onClick: () => void;
}

export const ColumnTitle: React.FC<TitleProps> = ({ title, onClick }) => {
  return <Root onClick={onClick}>{title}</Root>;
};

const Root = styled.h3`
  color: #ffffff;
  text-align: center;
  margin-bottom: 0.7em;
`;
