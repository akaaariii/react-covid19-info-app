import React from 'react';

import { HeaderContainer, LogoContainer, Icon, Title } from './Header.styles';

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Icon className="fas fa-viruses"></Icon>
        <Title>COVID-19</Title>
      </LogoContainer>
    </HeaderContainer>
  )
}

export default Header;
