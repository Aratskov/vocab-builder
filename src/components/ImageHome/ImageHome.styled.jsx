import styled from 'styled-components';
import image from '../../assets/images/illustration.png';

export const Wrap = styled.section`
display: flex;
justify-content: center;
`

export const BgImg = styled.div`
  display: block;
  width: 247px;
  height: 191px;
  background-image: url(${image});
  background-size: cover;
`;
