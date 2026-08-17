import styled from 'styled-components';

export const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: transparent;
  font-size: 14px;
  color: ${(props) => props.theme['gray-300']};
  outline: none;
  cursor: pointer;
  outline: none;
  border: none;

   appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none; 

  &:focus {
    border-color: transparent;
    box-shadow: 0 0 0 2px transparent;
  }
`;

export const OptionStyled = styled.option`
    padding: 8px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
