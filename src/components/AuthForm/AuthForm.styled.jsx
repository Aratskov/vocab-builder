import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Modal = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;

  box-sizing: border-box;
  width: 100%;
  padding: 32px 16px;

  margin-top: 8px;

  border-radius: 25px 25px 0px 0px;
  background: rgba(133, 170, 159, 0.1);
`;

export const ContainerModal = styled.div`
  margin: 0 auto;
  max-width: 343px;
`;

export const Title = styled.h2`
  color: #121417;
  margin-bottom: 16px;
  font-size: 30px;
  font-weight: 600;
  line-height: 1.07;
  letter-spacing: -0.6px;
`;

export const SecondText = styled.p`
  margin-bottom: 16px;

  color: rgba(18, 20, 23, 0.8);
  font-size: 16px;
  line-height: 1.5;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  max-width: 343px;
  height: 56px;
  padding: 16px 18px;

  border-radius: 15px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  outline: transparent;

  color: #121417;
  background-color: transparent;
  font-family: Roboto;
  font-size: 16px;
  line-height: 1.5;

  cursor: pointer;

  &::placeholder {
    color: #121417;
    font-family: Roboto;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 56px;
  margin-top: 32px;

  border-radius: 30px;
  background: #85aa9f;
  border: none;

  color: #fcfcfc;
  font-family: Roboto;
  font-weight: 700;
  line-height: 1.5;

  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #a5c0b8;
  }
`;

export const SecondButton = styled(Link)`
  display: block;
  margin-top: 16px;
  text-align: center;

  color: rgba(18, 20, 23, 0.5);
  font-weight: 700;
  line-height: 1.5;
  text-decoration-line: underline;

  cursor: pointer;

  &:hover {
    color: #121417;
  }
`;

export const TextError = styled.p`
  position: absolute;
  color: red;
  font-size: 10px;
`;

export const ToggleBtn = styled.svg`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;

  stroke: currentColor;
  fill: currentColor;

  opacity: 0.5;

  cursor: pointer;
`;
