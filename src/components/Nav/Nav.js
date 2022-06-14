import React from 'react'
import { CustomButton, CustomList, FlexBox, SecondaryContainer } from '../../global.style'
import { LangSelect, MainNav, SignBtn } from './Nav.style'
import { FaSearch } from "react-icons/fa";
function Nav() {
  return (
    <MainNav width="100%" padding="1.5rem 0">
      <SecondaryContainer width="85%">
        <FlexBox justifyContent="space-between">
          <FlexBox width="187.5px" justifyContent="space-between" alignItems="center">
            <LangSelect>
              <option value="English">English</option>
              <option value="Arabic">Arabic</option>
            </LangSelect>
            <FaSearch className='searchIcon' />
          </FlexBox>

          <CustomList>
            <FlexBox justifyContent="space-between" alignItems="center">
              <li>Home</li>
            </FlexBox>

          </CustomList>
          <SignBtn color="var(--main-color)" background="var(--secondary-color-8) 0% 0% no-repeat padding-box" width="122px" height="48px" borderRadius="25px" opacity="1">
            Sign In
          </SignBtn>
        </FlexBox>
      </SecondaryContainer>
    </MainNav>
  )
}

export default Nav