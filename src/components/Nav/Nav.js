import React from 'react'
import { FlexContainerItemsCenter, CustomListItem, InsideContainer, CustomList, SecondaryContainer, CenterFlex, Image } from '../../global.style';
import { LangSelect, MainNav, SearchIcon, SignBtn, CustomNavList, CustomNavLink, SignOutBtn } from './Nav.style';
import { FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { UserStateSelector } from "../../redux/user/user.selectors";
import { useDispatch } from 'react-redux';
import { Logout } from '../../redux/user/user.actions';

function Nav() {
  const [naveMenu, setNavMenu] = React.useState(["Home","NewArrival","Mobiles", "","Laptops","Headphones","Accessories"]);
  const userData = UserStateSelector();

  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(Logout());
  }

  return (
    <MainNav width="100vw" padding="1.5rem 0">
      <SecondaryContainer width="85%">
        <FlexContainerItemsCenter>
          <InsideContainer width="175px">
            <CenterFlex gap="26px">
              <LangSelect>
                <option value="English">English</option>
                <option value="Arabic">Arabic</option>
              </LangSelect>
              <SearchIcon>
                <FaSearch className='searchIcon' />
              </SearchIcon>
            </CenterFlex>
          </InsideContainer>
          <CustomList>
            <FlexContainerItemsCenter gap="26px">
              {naveMenu.map((item,index) => {
                return (index== 0?
                  <CustomNavLink to="/Home" activeclassname="active" key={index}>
                    <CustomListItem >{item}</CustomListItem>
                  </CustomNavLink>
                  :
                  (index== 3?
                    <CustomListItem key={index}>
                      <Image height="28px" src="./images/Group 14849.png"></Image>
                    </CustomListItem>
                    :
                    <CustomNavLink to={'/'+item} key={index}>
                      <CustomListItem fontColor="var(--header-nav-text-color)">{item}</CustomListItem>
                    </CustomNavLink>
                  )
                )
              })}
            </FlexContainerItemsCenter>
          </CustomList>
          <InsideContainer width="100px">
            {/* <button style={{background: '#fff'}}>Sign In</button> */}
            {!userData ?
              <Link to="/Auth/Login">
                <SignBtn>
                  Sign In
                </SignBtn>
              </Link>
              :
              // <Link to="/Auth/Login">
                <SignOutBtn onClick={() => signOut()}>
                  Sign out
                </SignOutBtn>
              // </Link>
            }
          </InsideContainer>
        </FlexContainerItemsCenter>
      </SecondaryContainer>
    </MainNav>
  )
}

export default Nav