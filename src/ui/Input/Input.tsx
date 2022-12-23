import styled from "styled-components";
import { COLORS } from "styles";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<Props> = ({ ...props }) => {
  return <Root {...props}></Root>;
};

const Root = styled.input`
  width: 100%;
  padding: 5px;
  border: 2px solid ${COLORS.darkblue};
  &:focus {
    border: 2px solid ${COLORS.darkblue};
    outline: none;
  }
`;
