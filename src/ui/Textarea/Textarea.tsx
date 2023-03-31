import styled from "styled-components";
import { COLORS } from "styles";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea: React.FC<Props> = ({ ...props }) => {
  return <Root {...props}></Root>;
};

const Root = styled.textarea`
  width: 100%;
  resize: none;
  padding: 5px;
  border: 2px solid ${COLORS.darkblue};
  &:focus {
    border: 2px solid ${COLORS.darkblue};
    outline: none;
  }
`;
