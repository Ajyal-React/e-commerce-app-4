import styled from "styled-components";


export const ImagesContainer = styled('div')`
    width: 90%;
`

export const SliderImage = styled('img')`
    src: ${props => props.src};
    width: 90%;
    height: 7rem;
`
export const SliderImageBox = styled('div')`
    width: 14%;
`