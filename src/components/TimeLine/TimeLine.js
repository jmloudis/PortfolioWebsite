import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';
import {List, ListContainer, ListItem, ListParagraph, ListTitle} from "../Technologies/TechnologiesStyles";
import {DiReact, DiPython, DiJava, DiRasberryPi, DiGitBranch} from "react-icons/di";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  // const [activeItem, setActiveItem] = useState(0);
  // const carouselRef = useRef();

  // const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: 'smooth' });
  // }

  // const handleClick = (e, i) => {
  //   e.preventDefault();

  //   if (carouselRef.current) {
  //     const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
  //     scroll(carouselRef.current, scrollLeft);
  //   }
  // }

  // const handleScroll = () => {
  //   if (carouselRef.current) {
  //     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

  //     setActiveItem(index);
  //   }
  // }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  // useEffect(() => {
  //   const handleResize = () => {
  //     scroll(carouselRef.current, 0);
  //   }

  //   window.addEventListener('resize', handleResize);
  // }, []);

  return (
    <Section id="about">
        <SectionTitle>About Me</SectionTitle>
        <SectionText>
            I recently graduated form Penn State University in December 2021 with a B.S. in Information Sciences and Technology (IST): Information Systems - Design and Development. <br/> Aside from my profession and education. I love to travel, snowboard and rock climb! <br/>
        </SectionText>
        <List>
            <ListItem>
                <DiPython size="3rem" />
                <ListContainer>
                    <ListTitle>Languages</ListTitle>
                    <ListParagraph>
                        Experience with: <br />
                        Java <br/>
                        JavaScript <br/>
                        Python <br/>
                        C++ <br/>
                        C# (& More)



                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiGitBranch size="3rem" />
                <ListContainer>
                    <ListTitle>Software</ListTitle>
                    <ListParagraph>
                        Experience with: <br />
                        MS Office <br/>
                        Git <br/>
                        SQL Workbench <br/>
                        VS Code <br/>
                        JetBrains (& More)


                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiRasberryPi size="3rem" />
                <ListContainer>
                    <ListTitle>Hardware</ListTitle>
                    <ListParagraph>
                        Experience with: <br />
                        Windows <br/>
                        MacOS <br/>
                        Linux <br/>
                        Raspberry Pi <br/>
                        Arduino (& More)



                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>

    </Section>
  );
};

export default Timeline;
