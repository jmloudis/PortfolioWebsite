import React from 'react';
import {Section, SectionDivider, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import { Img, HeaderImage } from './BackgroundStyles';
// import "./styles.css";
import { UserPicture } from '../../constants/constants';
import {ReverseSVG, reverseSVG} from '../../styles/GlobalComponents';
import '../../styles/globals';

const BackgroundAnimation = () => (
    <Section>
        <HeaderImage>
            {/*<SectionDivider />*/}
        <Img src="/images/IMG_3793-2.jpg"></Img>

        </HeaderImage>
        <br />


    </Section>
);

export default BackgroundAnimation;