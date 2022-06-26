import styled from "styled-components";
import { FlexContainerCol, MainButton } from "../../global.style";


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

export const ProductCard = styled('div')`
    width: 15rem;
    height: 22rem;
    padding: 1rem;
    box-sizing: border-box;
`

export const ImgCard = styled('div')`
    margin: 1rem auto; 
    width: 95%;
    height: 62%;
    
`

export const ProductImg = styled('img')`
    height: 100%;
    width: 100%;
`

export const CardDetails = styled(FlexContainerCol)`
    gap: unset;
    align-items: center;
    height: auto;
    width: auto;
    gap: 8px;
`

export const ProductName = styled('p')` 
    text-align: center;
    font: normal normal 600 10px/21px Poppins;
    letter-spacing: -0.35px;
    color: #111111;
`

export const ProductPrice = styled('p')` 
    text-align: center;
    font: normal normal medium 8.5px/11px Roboto;
    letter-spacing: -0.25px;
    color: var(--secondary-color-2);
    background: var(--secondary-color-1);
    width: auto;
    padding: 0.2rem 1rem;
    border-radius: 17px;

    &::before {
        content: '$';
    }
`

// export const ProductBtnMoreInfo = styled(MainButton)` 
//     text-align: center;
//     font: normal normal bold 12px/15px Raleway;
//     letter-spacing: 0px;
//     text-align: center;
    
//     border: none;
//     border-radius: none;
//     outline: none;
//     background: #fff;
//     color: #000000;

    /* &:after { */
        /* content: '\279D'; */
    /* } */

    /* &:hover{    
        color: var(--main-color);
    } */
// `

export const ProductBtnMoreInfo = styled('button')`
    /* font-size: var(--main-font-size); */
    opacity: var(--main-btn-opacity);
    box-shadow: none;
    outline: none;
    border: none;
    font: normal normal bold 12px/15px;
    letter-spacing: 0px;
    text-align: center;
    /* width: var(--main-btn-width);
    height: var(--main-btn-height); */
    border-radius: 0;
    cursor: pointer;
    background: #fff;
    color: #000000;
    
    &:hover{    
        color: var(--main-color);
        transform: scale(1.1);
        transition: transform .5s

    }
`

export const ArrowSpan = styled('span')`
    /* color: #000000;

    &:hover{    
        color: var(--main-color);
        transform: scale(1.1);
    } */
`