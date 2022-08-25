import styled from 'styled-components';

// import myImage from '/public/images/profile.jpeg';

export const HeaderImage = styled.div`
  //align-items: center;
  
  //background-image: url("/public/images/2.png");
  

  @media ${(props) => props.theme.breakpoints.norm} {
    height: 100vh;
  }
  
`


export const Img = styled.img`
  width: 100%;
  //height: 100%;
  // changed
  //margin-bottom: 75px;
  transform: translateY(75px);
  //
  
  border-radius: 50px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  //max-width:100%;
  //height:auto;

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 0%;
  }
  //border: 1px solid blue;
`



