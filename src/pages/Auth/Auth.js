import React from 'react'
import Login from '../Login/Login'
import {
    BrowserRouter as Router,
    Route,
    BrowserRouter,
    Routes,
    useHistory,
    Outlet
  } from "react-router-dom";

import { CenterFlexCol, Container, FlexBox, FlexContainer, FlexContainerCol } from '../../global.style';
import { CustomImg, InsideContainer, AuthTitle, AuthParagraph } from './Auth.style';

function Auth() {
  return (
    <Container height="100vh">
        <FlexContainer justify="start" gap="0" height="100%">
            <InsideContainer width="36%" bgColor="#cb5e00">
                <CenterFlexCol>
                  <InsideContainer bgColor="none" height="30%" width="66%">
                    
                    <CustomImg width="90%" src='/images/Group 14849.png'></CustomImg>
                    <article>
                      <AuthTitle>
                        Welcome Back!
                      </AuthTitle>
                      <AuthParagraph>
                        Login to your account and start your shopping NOW!
                      </AuthParagraph>
                    </article>
                  </InsideContainer>

                  
                  <CustomImg width="66%" height="50%" src='/images/image-removebg-preview.png'>

                  </CustomImg>
                </CenterFlexCol>
            </InsideContainer>
            <InsideContainer width="64%" bgColor="#F3F3F3">
              <CenterFlexCol>
                <Outlet/>
              </CenterFlexCol>
            </InsideContainer>
        </FlexContainer>
    </Container>
  )
}

export default Auth