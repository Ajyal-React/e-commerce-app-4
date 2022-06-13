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

`

export const Container = styled('main')`
    width: 100vw;
    max-width: 1950px;
    margin: 0 auto;
    padding: 0;
`

export const SecondaryContainer = styled(Container)`
    width: 80%;
`

export const FlexBox = styled('div')`
    width: 100%;
    display: flex;
`

export const FlexBoxColumn = styled(FlexBox)`
    flex-direction: column;
`
export const FlexBoxColumnJustifyContentCenter = styled(FlexBoxColumn)`
    justify-content: center;
`

export const FlexBoxColumnJustifyContentBetween = styled(FlexBoxColumn)`
    justify-content: space-between;
`

export const FlexBoxJustifyContentCenter = styled(FlexBox)`
    justify-content: center;
`

export const FlexBoxJustifyContentBetween = styled(FlexBox)`
    justify-content: space-between;
`


export const Paragraph = styled('p')`
    font-size: var(--main-font-size);
    color: ${props => props.color};
`
