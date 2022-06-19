import styled from "styled-components";
import { FlexContainerCol, InsideContainer, Paragraph, RelativeContainer, Title1 } from "../../global.style";

export const HeroContainer = styled('div')`
    background: url("/images/Group 14850.png");
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat, repeat;
    box-sizing: border-box;
    width: 100%;
`

export const HeroContent = styled(RelativeContainer)`
    top: 45%; 
    left: 12%;
`

export const HeroParagraph = styled(Paragraph)`
    font: normal normal normal 13px/32.5px Poppins;
    letter-spacing: -0.6px
`

export const HeroTitle = styled(Title1)`
    font: normal normal 600 35px/46.5px Poppins;
    letter-spacing: -1.65px;

`
