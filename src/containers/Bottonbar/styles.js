import styled from 'styled-components';
import { Divider, Typography } from '@material-ui/core';

export const BottonbarWrapper = styled.footer`
  background: #7A8DFF;
  color: #CDD1D4;
  margin: 0 -10vw;
  padding: 2vh 10vw;

  @media screen and (max-width: 1200px){
    margin: 0 -5vw;
    padding: 0 5vw;
  }
`

export const Copyright = styled(Typography)`
  padding: 2vh 1vw 4vh;

  @media screen and (max-width: 1200px){
    padding-bottom: 2vh;
  }
`

export const DividerStyled = styled(Divider)`
  background: #CDD1D4;
`

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2vh 0;

  @media screen and (max-width: 1200px){
    flex-direction: column;
    justify-content: center;
  }
`

export const SocialMedia = styled.img`
  height: 12px;
  width: 12px;
  margin-right: 16px;
`
