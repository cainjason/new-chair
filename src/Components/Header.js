import React from 'react';
import { TbArmchair2 } from "react-icons/tb";
import { CiMenuKebab } from "react-icons/ci";
import styled from 'styled-components';


function Header() {
  return (
    <HeaderContainer>
        <TbArmchair2 />
      <h2> Top Chair </h2>
      <CiMenuKebab />
    </HeaderContainer>
  )
}

export default Header;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 10px;
    margin-left: 10px;

    svg {
        height: 40px;
        width: 40px;
    }
`;
