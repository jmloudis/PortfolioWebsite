import styled from 'styled-components';

export const LeftSection = styled.div`
  //width: 50%;
  width: 100%;
  //height: 100%;
  //height: 100vh;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    //justify-items: center;

    
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
   
    margin: 0 auto;
  }

  
  
`;








