import React from 'react'
import { Container, FlexBox, FlexContainer, FlexContainerCol, SecondaryContainer } from '../../global.style';
import { CustomImg, InsideContainer } from './Login.style';

function Login() {
  return (
    <Container height="100vh">
        <FlexContainer height="100%">
            <InsideContainer width="35%" bgColor="#cb5e00">
                <FlexContainerCol>
                    <CustomImg src='images/image-removebg-preview.png'>

                    </CustomImg>
                </FlexContainerCol>
            </InsideContainer>
            <InsideContainer width="65%">

            </InsideContainer>
        </FlexContainer>
    </Container>
  )
}

export default Login;