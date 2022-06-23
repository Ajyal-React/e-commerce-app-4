import React from 'react'
import Login from '../../Login/Login'
import "../../../App.css"

import { Formik,useFormik } from 'formik';



import {
    BrowserRouter as Router,
    Route,
    BrowserRouter,
    Routes,
    useHistory,
    Outlet
} from "react-router-dom";

import {CenterFlexCol, Container, FlexBox, FlexContainer, FlexContainerCol, FormFlexCol} from '../../../global.style';
import {CustomImg, InsideContainer, AuthTitle, AuthParagraph, Article} from '../Auth.style';
import axios from "axios";

function Signup() {

    const [state,setstate] = React.useState([])
    // const frmi = useFormik([])

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
                <InsideContainer flex="flex" width="64%" bgColor="#F3F3F3">

                    <Formik
                        initialValues={{ email: '', password: '' ,confirmPassword:''}}
                        onSubmit={() => {
                            // axios.post("",va)
                        }
                        }
                    >
                        {({
                              values,
                              errors,
                              touched,
                              handleChange,
                              handleBlur,
                              handleSubmit,
                              isSubmitting,
                              /* and other goodies */
                          }) => (
                            <FormFlexCol width="40%" alignItems="start" onSubmit={handleSubmit}>
                                <div className="titleLogin">
                                    <div className="columnBox"></div>
                                    <h2>SIGN UP</h2>
                                </div>
                                <div className="inputsDiv">
                                    <div>
                                        <input onChange={handleChange} onBlur={handleBlur} value={values.email} type="text" name="email" placeholder="Enter username"/>
                                    </div>
                                    <div>
                                        <input type="password" onChange={handleChange} onBlur={handleBlur} value={values.password} name="password" placeholder="Password"/>
                                    </div>
                                    <div>
                                        <input type="password" onChange={handleChange} onBlur={handleBlur} value={values.confirmPassword} name="confirmPassword" placeholder="Confirm Password"/>
                                    </div>
                                    <button className="btnLogin">
                                        <text>Login</text>
                                        <div className="icon">-></div>
                                    </button>
                                </div>
                            </FormFlexCol>
                        )}
                    </Formik>
                </InsideContainer>
            </FlexContainer>
        </Container>
    )
}

export default Signup