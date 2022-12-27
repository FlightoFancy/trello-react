import styled from "styled-components";
import { COLORS } from "styles";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  margin?: string;
}

export const Input: React.FC<Props> = ({ ...props }) => {
  return <Root {...props}></Root>;
};

const Root = styled.input<Props>`
  width: 100%;
  padding: 5px;
  margin: ${({ margin }) => margin};
  border: 2px solid ${COLORS.darkblue};
  &:focus {
    border: 2px solid ${COLORS.darkblue};
    outline: none;
  }
`;
