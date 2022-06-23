import { Formik } from "formik";
import { Link } from "react-router-dom";
import { MainButton, SecondaryContainer } from "../../global.style";
import {
    useHistory,
  } from "react-router-dom";

function LoginComponent(){
    return (
        <>
            <Formik
                initialValues={{ username: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.username) {
                      errors.username = 'Required';
                    }
                    if(!values.password){
                        errors.password = 'Required'
                    }
                    return errors;
                  }}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true);
                    // history.push("/home");
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
                                    <input 
                                        name="username"
                                        type="text"
                                        placeholder="Enter username"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.username}/>
                                </div>
                                {errors.username && touched.username && errors.username}
                                <div>
                                    <input 
                                        name="password" 
                                        type="password"
                                        placeholder="Password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}/>
                                    {errors.password && touched.password && errors.password}
                                </div>
                                <button className="btnLogin" type="submit" onClick={handleSubmit}>
                                    <text>Login</text>
                                    <div className="icon"></div>
                                </button>
                            </div>
                        </>
                        // </form>
                    )}
            </Formik>
            <Link to="/Auth/Signup">
                <MainButton>
                    Sign up
                </MainButton>
            </Link>
        </>
    )
}

export default LoginComponent;
