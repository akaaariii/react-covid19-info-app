import React from 'react';

import { FooterContainer, FooterText, APIlink } from './Footer.styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        For Educational Purpose Only <br />
        This product uses API from <APIlink href="https://disease.sh/">disease.sh</APIlink>
      </FooterText>
    </FooterContainer>
  )
}

export default Footer;
