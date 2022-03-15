import styled from 'styled-components';

// import myImage from '/public/images/profile.jpeg';

export const HeaderImage = styled.div`

  
  //background-image: url("/public/images/2.png");
`


export const Img = styled.img`
  width:100%;
  height:100%;
  transform: translateY(75px);
  border-radius: 50px;
  //max-width:100%;
  //height:auto;

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 0%;
  }
  //border: 1px solid blue;
`



