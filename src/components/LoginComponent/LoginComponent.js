import { Formik, Field  } from "formik";
import { MainButton, SecondaryContainer } from "../../global.style";

import * as yup from 'yup';
import { ErrorSpan } from "./LoginComponent.style";
import { Login } from "../../redux/user/user.actions"
import { useDispatch, useSelector } from "react-redux"
import { TokenSelector } from "../../redux/user/user.selectors";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { BiLogInCircle } from "react-icons/bi";



function LoginComponent(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userToken = TokenSelector();
    useEffect(() => {
        if(!!userToken){
            navigate('/Home');
        }
    }, [userToken])
    
    const schema = yup.object().shape({
        password: yup.string().required('Password is required!').min(8,'Too Short!'),
        email: yup.string().email().required('email is required!').min(6,'Too Short!'),
    });
    return (
        <>
            <Formik
                initialValues={{ email: 'omaralhafni@gmail.com', password: 'omarAlhafni@123456' }}
                validationSchema={schema}
                onSubmit={values => {
                    // same shape as initial values
                    // console.log(values);
                    dispatch(Login(values));
                    // navigate("/home");

                    // console.log("user:",data)

                }}

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
                        <>
                            <div className="titleLogin">
                                <div className="columnBox"></div>
                                <h2>LOGIN</h2>
                            </div>
                            <div className="inputsDiv">
                                <div>
                                    <Field 
                                        name="email" 
                                        type="email"
                                        placeholder="Enter Email"
                                    /> 
                                    {(errors.email && touched.email) && <ErrorSpan>{errors.email}</ErrorSpan>}
                                </div>
                                
                                <div>
                                    <Field 
                                        name="password" 
                                        type="password"
                                        placeholder="Password"
                                    /> 
                                    {(errors.password && touched.password) && <ErrorSpan>{errors.password}</ErrorSpan>}
                                </div>
                                <button className="btnLogin" type="submit" onClick={handleSubmit}>
                                    <text>Login</text>
                                    <BiLogInCircle className="icon"/>
                                </button>
                            </div>
                        </>
                        // </form>
                    )}
            </Formik>
            {/* <Link to="/Auth/Signup">
                <MainButton>
                    Sign up
                </MainButton>
            </Link> */}
        </>
    )
}

export default LoginComponent;
