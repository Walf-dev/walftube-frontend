import styled from "styled-components";

const Button = styled.button`
  padding: 0.4rem 1rem;
  background: ${(props) => props.theme.red};
  color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.red};
  border-radius: 3px;
  letter-spacing: 1.1px;
`;

export default Button;
