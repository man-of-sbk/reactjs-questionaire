import styled from "styled-components";

export const InputContainerSection = styled.div`
  margin-top: 78px;
  text-align: ${props => props.textAlign};
`;

export const SubmitBtn = styled.div`
  border: none;
  padding: 13px 20px;
  font-size: 16px;
  border-radius: 8px;
  background: #02bad6;
  display: table;
  color: white;
  cursor: pointer;

  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
  transition: 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1.2);
  }
`;

export const BotWarningLabel = styled.label`
  color: #bbb8c5;
  font-size: 15px;
  display: inline-block;
  margin-top: 20px;
`;
