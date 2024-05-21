import React, { useState } from 'react';
import styled from 'styled-components';

interface IDropDownProps{
  children: string
}
interface IDropDownButtonProps{
  show: boolean
}

const Dropdown = ({ children }:IDropDownProps) => {
  const [show, setShow] = useState(false);

  return (
    <DropdownContainer>
      <DropdownButton onClick={() => setShow(!show)}>
        {children}
      </DropdownButton>
      <DropdownContent show={show}>
        <DropdownItem href="#action1">Действие 1</DropdownItem>
        <DropdownItem href="#action2">Действие 2</DropdownItem>
        <DropdownItem href="#action3">Действие 3</DropdownItem>
      </DropdownContent>
    </DropdownContainer>
  );
};

export default Dropdown;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

const DropdownContent = styled.div<IDropDownButtonProps>`
  display: ${props => (props.show ? 'block' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

const DropdownItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover{
    background-color: #00000054;
    transition: ease-in 0.15s
  }
`;
