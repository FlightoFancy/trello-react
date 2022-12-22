import styled from "styled-components";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<Props> = ({ ...props }) => {
  return <Root {...props}></Root>;
};

const Root = styled.input`
  width: 100%;
  padding: 5px;
`;
