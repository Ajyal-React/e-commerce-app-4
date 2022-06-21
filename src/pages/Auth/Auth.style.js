import styled from "styled-components";
import { FlexBox, FlexContainerCol, Paragraph, Title1 } from "../../global.style";



export const InsideContainer = styled("div")`
    background: ${props => props.bgColor? props.bgColor : "#f3f3f3"};
    width: ${props => props.width};
    height: ${props => props.height? props.height :"100%"};
    display: ${props => props.flex ? "flex" : "inline"};
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    gap: 50px;
    box-sizing: border-box;
`

export const CustomImg = styled('img')`
  max-width: 100%;
  margin: 0;
  padding: 0;
    
`

export const AuthParagraph = styled(Paragraph)`
    font: normal normal normal 18px/24px Open Sans;
    letter-spacing: ${props => props.spacing?props.spacing:"0px"};
    color: #F3F3F3;
    opacity: 60%;
    font-weight: ${props => props.weight};
`

export const AuthTitle = styled(Title1)`
    /* font: normal normal 600 35px/46.5px Poppins;
    letter-spacing: -1.65px; */
    font: normal normal bold 25px/33.5px Open Sans;
    letter-spacing: 0px;

`

export const Article = styled('article')`
display: flex;
  flex-direction: column;
`