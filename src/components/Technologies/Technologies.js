import React from 'react';
import {DiFirebase, DiGithubFull, DiReact, DiZend, DiPython, DiGitCompare} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
    <Section nopadding id="tech">
        <SectionDivider/>

        <br/>
        <br/>
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>
            I have worked with a wide range of technologies in the IT and Dev world.
            From design to deployment
        </SectionText>
        <List>
            <ListItem>
                <DiReact size="3rem" />
                <ListContainer>
                    <ListTitle>Front-End</ListTitle>
                    <ListParagraph>
                        Experience with: <br />
                        React <br/>
                        Angular <br/>
                        Bootstrap

                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiFirebase size="3rem" />
                <ListContainer>
                    <ListTitle>Back-End</ListTitle>
                    <ListParagraph>
                        Experience with: <br />
                        Node <br/>
                        Spring Boot <br />
                        Entity Framework
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiGitCompare size="3rem" />
                <ListContainer>
                    <ListTitle>Design</ListTitle>
                    <ListParagraph>
                        Experience with: <br />
                        Visio <br/>
                        Adobe XD <br/>
                        AutoCAD

                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default Technologies;
