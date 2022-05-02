import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

// const Hero = (props) => (
//   <div>
//     Hero
//   </div>
// );

function Hero(props) {

    return (
        <Section row nopadding>
            <leftSection>
                <SectionTitle main center>
                    Hello, I'm  <br />
                    Jordan Loudis
                </SectionTitle>
                <SectionText>
                    Software Developer: Java, Python, JS <br/>
                    C++, C#, SQL, HTML, CSS, PHP & More
                </SectionText>
                <Button onClick={() => window.location = "#about"}>About Me</Button>
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


            </leftSection>

        </Section>

    );
}

export default Hero;