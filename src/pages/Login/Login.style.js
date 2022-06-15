import styled from "styled-components";
import { FlexBox, FlexContainerCol } from "../../global.style";

export const InsideContainer = styled(FlexContainerCol)`
    background: ${props => props.bgColor? props.bgColor : "#f3f3f3"};
    width: ${props => props.width};
    height: 100%;
`

export const CustomImg = styled('img')`
    src: ${props => props.src};
`