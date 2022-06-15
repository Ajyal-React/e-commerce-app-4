import React from 'react'
import { CustomButton, CustomList, FlexBox, SecondaryContainer } from '../../global.style'
import { LangSelect, MainNav, SignBtn } from './Nav.style'
import { FaSearch } from "react-icons/fa";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Nav() {
  const [naveMenu, setNavMenu] = React.useState(["Home","New arrival","Mobiles","Laptops","Headphones","Accessories"])
  return (
    <MainNav width="100%" padding="1.5rem 0">
      <SecondaryContainer width="85%">
        <FlexBox justifyContent="space-between" alignItems="center">
          <FlexBox width="187.5px" justifyContent="space-between" alignItems="center">
            <LangSelect>
              <option value="English">English</option>
              <option value="Arabic">Arabic</option>
            </LangSelect>
            <FaSearch className='searchIcon' />
          </FlexBox>

          <CustomList>
            <FlexBox gap="25px" justifyContent="space-between" alignItems="center">
              {naveMenu.map((item,index) => {
                return (index===0?
                  <li fontColor="var(--main-color)" fontSize="22px" key={index}>{item}</li>
                  :
                  <li fontColor="var(--header-nav-text-color)" fontSize="22px" key={index}>{item}</li>
                )
                })}
            </FlexBox>

          </CustomList>
          <Link to="/auth/login">
            <SignBtn color="var(--main-color)" background="#F9F8F8" width="122px" height="48px" borderRadius="25px" opacity="1">
              Sign In
            </SignBtn>
          </Link>
        </FlexBox>
      </SecondaryContainer>
    </MainNav>
  )
}

export default Nav