import styled from "styled-components";
import {CustomButton, Nav} from "./../../global.style";

export const MainNav = styled(Nav)`
    position: fixed;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    opacity: 0.79;
`

export const LangSelect = styled('select')`
    background: #7B77770F 0% 0% no-repeat padding-box;
    border: 0.5px solid #7B77770F;
    border-radius: 3px;
    opacity: 1;
    font: normal normal normal 22px/30px;
    opacity: 1;
    color: #32353C;
    font-size: 22px;
    width: 125px;
    height: 43px;
    text-align: center;
`

export const SignBtn = styled(CustomButton)`
    box-shadow: 0px 3px 6px #F9F8F88A;
    letter-spacing: 0px;
    border: 0.30000001192092896px solid #AFAFAF;
`