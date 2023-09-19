import styled from "styled-components";

export const ContainerWrap = styled.div`
position: relative;
padding: 0 16px;

min-height: 812px;
height: 100vh;
overflow: auto;

  @media screen and (min-width: 768px) {
padding: 0 32px;
    
  }

  @media screen and (min-width: 1440px) {
padding: 0 100px;
    
  }
`