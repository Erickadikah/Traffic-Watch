"use client"
import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, SocialMedia } from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink href='/google.com'>How it works</FooterLink>
              <FooterLink href='/google.com'>Developers</FooterLink>
              <FooterLink href='/google.com'>Careers</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink href='/google.com'>How it works</FooterLink>
              <FooterLink href='/google.com'>Testimonials</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink href='/google.com'>Check out our socials</FooterLink>
              <FooterLink href='/google.com'>Link With us with Github</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink href='/google.com'>Instagram</FooterLink>
              <FooterLink href='/'>Facebook</FooterLink>
              <FooterLink href='/google.com'>Youtube</FooterLink>
              <FooterLink href='/google.com'>Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            {/* <SocialLogo>
              Wallet
            </SocialLogo> */}
            <WebsiteRights>Watch © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='/' aria-label='LinkedIn'>
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href='https://www.twitter.com/erick_adikah' aria-label='Twitter'>
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='https://www.github.com/erick-adikah' aria-label='GitHub'>
                <FaGithub />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
