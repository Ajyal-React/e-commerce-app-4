import React from 'react'
import Login from '../Login/Login'
import "../../App.css"

import {
    BrowserRouter as Router,
    Route,
    BrowserRouter,
    Routes,
    useHistory,
    Outlet
  } from "react-router-dom";

import { CenterFlexCol, Container, FlexBox, FlexContainer, FlexContainerCol } from '../../global.style';
import {CustomImg, InsideContainer, AuthTitle, AuthParagraph, Article} from './Auth.style';

function Auth() {
  return (
    <Container height="100vh">
        <FlexContainer gap="0px" justify="unset">
            <InsideContainer flex="flex" width="36%" bgColor="#cb5e00">
                <CenterFlexCol>
                  <InsideContainer flex='flex' bgColor="none" height="30%" width="66%">

                    <CustomImg width="90%" src='/images/Group 14849.png'></CustomImg>
                    <Article>
                      <AuthTitle>
                        Welcome Back!
                      </AuthTitle>
                      <AuthParagraph>
                        Login to your account and start your shopping NOW!
                      </AuthParagraph>
                    </Article>
                  </InsideContainer>
                </CenterFlexCol>
            </InsideContainer>
            <InsideContainer width="64%" bgColor="#F3F3F3">
              <CenterFlexCol>
                <Outlet>
                </Outlet>
              </CenterFlexCol>
            </InsideContainer>
        </FlexContainer>
    </Container>
  )
}

export default Auth