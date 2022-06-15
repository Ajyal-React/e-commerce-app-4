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
    transform: Uppercase;
`;


export const Container = styled('main')`
    width: 100vw;
    max-width: 1950px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: ${props => props.height};
`

export const SecondaryContainer = styled(Container)`
    width: ${props => props.width};
    box-sizing: border-box;
    margin: 0 auto;
    padding: ${props => props.padding};
`


export const FlexContainer = styled('div')`
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: ${props => props.height?props.height:"100%"};
`

export const FlexContainerCol = styled(FlexContainer)`
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
    color: ${props => props.color};
`

export const CustomList = styled('ol')`
    /* display: ${props => props.diplay}; */
    list-style-type: none;
`
export const CustomListItem = styled('li')`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};

`
