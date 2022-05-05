import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  
  
 
  
  
  
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    br {
      display: none;
    }
    
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    .br {
      display: none;
    }
    margin: 0 auto;
  }

  
  
`;

export const Section = styled.div`
    

    
    
`;



