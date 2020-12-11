import React from 'react';

import { FooterContainer, FooterText } from './Footer.styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        For Educational Purpose Only <br />
        This product uses API from <a href="https://disease.sh/">disease.sh</a>
      </FooterText>
    </FooterContainer>
  )
}

export default Footer;
