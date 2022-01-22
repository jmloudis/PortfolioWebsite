import React from 'react';
import {AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle} from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
      <FooterWrapper id="footer">
          <LinkList>
              <LinkColumn>
                  <LinkTitle>Email</LinkTitle>
                  <LinkItem href="mailto:16jloudis@gmail.com">16jloudis@gmail.com</LinkItem>
              </LinkColumn>

              <LinkColumn>
                  <LinkTitle>Discord</LinkTitle>
                  <LinkItem href="">jmloudis#3760</LinkItem>
              </LinkColumn>
          </LinkList>
          <SocialIconsContainer>
              <CompanyContainer>
                  <Slogan>"It is not so important to know everything as to appreciate what we learn."</Slogan>
                  <Slogan>-Hannah More</Slogan>

              </CompanyContainer>
              <SocialIcons href="https://github.com/jmloudis">
                  <AiFillGithub size="3rem"></AiFillGithub>
              </SocialIcons>
              <SocialIcons href="https://linkedin.com/in/jordan-loudis-4856561ba/">
                  <AiFillLinkedin size="3rem"></AiFillLinkedin>
              </SocialIcons>
              <SocialIcons href="https://twitter.com/JordanDev7">
                  <AiFillTwitterCircle size="3rem"></AiFillTwitterCircle>
              </SocialIcons>
          </SocialIconsContainer>
      </FooterWrapper>
  );
};

export default Footer;
