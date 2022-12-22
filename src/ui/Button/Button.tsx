import styled, { css } from "styled-components";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

type Variant = "primary" | "addCard" | "close" | "center" | "cross" | "small";

const variantButtonOptions = {
  primary: `
    width: 100%;
    margin: 5px auto;
    `,
  center: `
    width: 90%;
    margin: 10px auto;
    display: block;
  `,
  addCard: `
    width: 60%;
    `,
  close: `
  border: none;
  font-size: 19px;
  margin: 5px;
    `,
  cross: `
  border: none;
  font-size: 19px;
  margin: 5px;
  position: absolute;
  right: 0;
  top: 0;
  padding: 0 5px;
    `,
  small: `
    width: 50%;
    margin: 5px 0;
    `,
};

export const Button: React.FC<Props> = ({ children, ...props }) => {
  return <Root {...props}>{children}</Root>;
};

const StyledButton = styled.button`
  padding: 5px;
  cursor: pointer;
  background-color: transparent;
  border-radius: 5px;
`;

const Root = styled(StyledButton)<{ variant?: Variant }>`
  ${({ variant = "primary" }) =>
    css`
      ${variantButtonOptions[variant]}
    `}
`;
