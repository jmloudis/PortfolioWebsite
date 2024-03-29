import React from 'react';

import { Section, SectionText, SectionTitle, SpaceSection } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import {HeaderImage, Img} from "../BackgrooundAnimation/BackgroundStyles";

// const Hero = (props) => (
//   <div>
//     Hero
//   </div>
// );



function Hero(props) {

    return (
        <Section row nopadding>
            <leftSection>
                <SectionTitle main>
                    Hello, I'm  <br />
                    Jordan Loudis
                </SectionTitle>
                <SectionText>
                    Software Developer: Java, Python, JS <br/>
                    C++, C#, SQL, HTML, CSS, PHP & More
                </SectionText>
                <Button onClick={() => window.location = "#about"}>About Me</Button>
                <SpaceSection>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                </SpaceSection>


            </leftSection>

        </Section>


    );
}

export default Hero;