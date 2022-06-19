import styled from "styled-components";
import {CustomList, CustomListItem, CustomButton, Icon, Nav, Select, MainButton} from "./../../global.style";
import { Link, NavLink } from "react-router-dom";
export const MainNav = styled(Nav)`
    position: fixed;
    background: #e7e4e4 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #d9d6d6;
    opacity: 0.8;
    z-index: 1000;
`

export const LangSelect = styled(Select)`
    background: #e1e1e1;
    border: 0.5px solid #7B77770F;
    font: normal normal normal 22px/30px;
    color: #32353C;
`

export const SignBtn = styled(MainButton)`
    box-shadow: 0px 3px 6px #F9F8F88A;
    letter-spacing: 0px;
    border: 0.30000001192092896px solid #ebebeb;
    width: 122px;
    height: 48px;
    border-radius: 25px;
    opacity: 1;
    color: var(--main-color);
`

export const SearchIcon = styled(Icon)`
    background: transparent url('img/search.png') 0% 0% no-repeat padding-box;
`

export const CustomNavLink = styled(NavLink)`
    text-decoration: none !important;
`