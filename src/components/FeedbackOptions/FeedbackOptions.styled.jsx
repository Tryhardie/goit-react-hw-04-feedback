import styled from 'styled-components';

const Button = styled.button`
  font-size: 18px;
  text-transform: capitalize;
  width: 80px;
  height: 30px;
  color: #cbe368;
  background-color: #22311d;
  border: none;
  border-radius: 4px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export { ButtonWrapper, Button };
