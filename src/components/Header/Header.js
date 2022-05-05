import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { DiTerminal } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, SpanTitle } from './HeaderStyles';

function Header() {



    return (
        <Container>
            <Div1>
                <Link href="/">
                    <a style={{display: "flex", alignItems: "center", color: "white", marginBottom: "15px"}}>
                        <DiTerminal size="3rem"></DiTerminal> <SpanTitle>Portfolio</SpanTitle>
                    </a>

                </Link>
            </Div1>
            <Div2>
                <li>
                    <Link href="#footer">
                        <NavLink>Contact</NavLink>
                    </Link>
                </li>
                <li>
                    <Link href="#projects">
                        <NavLink>Projects</NavLink>
                    </Link>
                </li>
                <li>
                    <Link href="/images/ResumeNew.pdf">
                        <NavLink>Resume</NavLink>
                    </Link>
                </li>
                <li>
                    <Link href="/images/Diploma.jpg">
                        <NavLink>Diploma</NavLink>
                    </Link>
                </li>
            </Div2>
            <Div3>
                <SocialIcons href="https://github.com/jmloudis">
                    <AiFillGithub size="3rem"></AiFillGithub>
                </SocialIcons>
                <SocialIcons href="https://linkedin.com/in/jordan-loudis-4856561ba/">
                    <AiFillLinkedin size="3rem"></AiFillLinkedin>
                </SocialIcons>
                <SocialIcons href="https://twitter.com/JordanDev7">
                    <AiFillTwitterCircle size="3rem"></AiFillTwitterCircle>
                </SocialIcons>
            </Div3>

        </Container>
    );

}

export default Header;
