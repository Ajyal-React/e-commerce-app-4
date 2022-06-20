import styled from "styled-components";

export const MainButton = styled('button')`
    font-size: var(--main-font-size);
    opacity: var(--main-btn-opacity);
    box-shadow: var(--main-btn-shadow);
    border: var(--main-btn-border-width) solid var(--secondary-color-6);
    width: var(--main-btn-width);
    height: var(--main-btn-height);
    border-radius: var(--main-btn-radius);
    color: var(--main-text-color);
    cursor: pointer;
    background: #fff;
`

export const CustomButton = styled(MainButton)`
    font-size: ${props => props.fontSize};
    border: ${props => props.borderWidth} ${props => props.borderStyle} ${props => props.borderColor};
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: ${props => props.borderRadius};
    color: ${props => props.color};
    background: ${props => props.background};
    padding: ${props => props.padding};
    box-shadow: ${props => props.boxShadow};
    opacity: ${props => props.opacity};;
`

export const Nav = styled('nav')`
    width: ${props => props.width};
    padding: ${props => props.padding};
    
`;

export const Title1 = styled.h1`
    text-transform: Uppercase;
    color: #fff;
    opacity: 1;
`;

export const Title2 = styled.h2`
    transform: Uppercase;
    color: #000
`;


export const Container = styled('main')`
    width: 100vw;
  min-width: 100%;
 height: 100vh;
  
    box-sizing: border-box;
`


export const SecondaryContainer = styled('div')`
    width: ${props => props.width? props.width: '100%'};
    margin: 0 auto;
    padding: ${props => props.padding? props.padding: '0'};
    height: ${props => props.height? props.height: '100%'};
    box-sizing: border-box;
`

export const InsideContainer = styled(SecondaryContainer)`
    width: auto;
    margin: 0;
    padding: 0;
    height: 100%;
    box-sizing: border-box;
`


export const FlexContainer = styled('div')`
    width: 100%;
  max-width: 100%;
    display: flex;
    justify-content: ${props => props.justify?props.justify: "space-between"};
    height: ${props => props.height?props.height:"100%"};
  flex-wrap: wrap;
    gap: ${props => props.gap? props.gap: '22px'};
    box-sizing: border-box;
  
`
export const FlexContainerItemsCenter = styled(FlexContainer)`
    align-items: center;
`
export const CenterFlex = styled(FlexContainerItemsCenter)`
   justify-content: center;
`

export const FlexContainerCol = styled(FlexContainer)`
    flex-direction: column;
`
export const CenterFlexCol = styled('div')`
  display: flex;
  align-items: center;
    flex-direction: column;
`

export const FlexBox = styled(FlexContainer)`
    width: ${props => props.width};
    display: flex;
    flex-direction: ${props => props.flexDirection};
    justify-content: ${props => props.justifyContent};
    flex-wrap: ${props => props.fleWrap};
    align-items: ${props => props.alignItems};
    gap: ${props => props.gap};
`


export const Paragraph = styled('p')`
    font-size: var(--main-font-size);
    color: ${props => props.color? props.color:"#fff"};
    text-transform: lowercase;
`

export const CustomList = styled('ol')`
    list-style-type: none;
    color: #32353C;
    margin: 0;
    padding: 0;
    text-align: center;
    width: auto;
`
export const CustomListItem = styled('li')`
    /* font-size: 22px; */
    color: ${props => props.color? props.color: '#32353C'};;
    margin: 0;
    padding: 0;
    cursor: pointer;
    /* font: normal normal normal; */
    letter-spacing: 0px;
`

export const Icon = styled('i')`
    background: transparent 0% 0% no-repeat padding-box;
    opacity: 1;
    color: #000;
`

export const Select = styled('select')`
    &:hover{
        cursor: pointer;
    }
    background: transparent 0% 0% no-repeat padding-box;
    border: 1px solid transparent;
    border-radius: 3px;
    opacity: 1;
    font-size: var(--main-font-size);
    width: 125px;
    height: 43px;
    text-align: center;

`

export const Image = styled('img')`
    src: ${props => props.src};
    opacity: 1;
`

export const RelativeContainer = styled('div')`
    box-sizing: border-box;
`

export const AbsoluteContainer = styled('div')`
    box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8vh;
  margin-top: 5vh;
    width: ${props => props.width?props.width:"auto"}
`
