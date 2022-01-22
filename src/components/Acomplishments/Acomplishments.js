import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: "16jloudis@gmail.com", text: 'Open Source Projects'},
  { number: 180, text: 'Github Commits 2022', },
  { number: 3, text: 'Group Projects Finished', },
  { number: 1, text: 'Diploma', }
];

const Acomplishments = () => (
    <Section>
      {/*<SectionTitle>Contact Info</SectionTitle>*/}
      {/*<Boxes>*/}
          {/*<Box>*/}
          {/*    <BoxNum href="mailto:16jloudis@gmail.com">16jloudis@gmail.com</BoxNum>*/}
          {/*    <BoxText>Email Address</BoxText>*/}
          {/*</Box>*/}


        {/*{data.map((card, index) =>(*/}
        {/*    <Box key={index}>*/}
        {/*      <BoxNum>{card.number}</BoxNum>*/}
        {/*      <BoxText>{card.text}</BoxText>*/}
        {/*    </Box>*/}
        {/*))}*/}
      {/*</Boxes>*/}
    </Section>
);

export default Acomplishments;
