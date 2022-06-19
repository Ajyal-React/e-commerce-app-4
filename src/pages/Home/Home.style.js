import styled from "styled-components";
import { MainButton } from "../../global.style";

export const StartShoppingBtn = styled(MainButton)`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #FFFFFF5C;
    border: 0.25px solid #999999;
    border-radius: 5.9px;
    font: normal normal 600 13px/46.5px Poppins;
    letter-spacing: -0.6px;
    color: #000000;
    opacity: 1;
    box-sizing: border-box;
    width: 9.45rem;
    height: 2.5rem;
    padding: 0;
    &:after {
        content: '  >>>';
        font-size: 20px;
        letter-spacing: -4px;
        font-weight: 400;
        width: 22px;
        height: 21px;
        transform: matrix(0, -1, 1, 0, 0, 0);
        /* UI Properties */
        opacity: 1;
        /* transform: matrix(0, -1, 1, 0, 0, 0); */
        /* UI Properties */
        /* background: #1E232D 0% 0% no-repeat padding-box; */
    }

    &:hover {
        background: #FFFFFF8F 0% 0% no-repeat padding-box;
        width: 10rem;
        transition-delay: 100ms;
        border: 0.4000000059604645px solid #999999;
    }
`;