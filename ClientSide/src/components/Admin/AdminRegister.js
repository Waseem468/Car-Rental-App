import React, { useState } from "react";
import "../../Styles/Register.css";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
const Register = () => {
    const [formData, setFormData] = useState({
        Name: '',
        email: '',
        contact: '',
        password: '',
        confirmPassword: ''
    })
    const [errorText, setErrorText] = useState('');
    function doValidate() {
        const { Name, email, contact, password, confirmPassword } = formData
        if (!Name) {
            return 'name can not be blank'
        }
        if (!email) {
            return 'email can not be blank'
        }
        if (!contact) {
            return 'contact can not be blank'
        }
        if (/\d+/.test(Name)) {
            return 'Name should contain small case and upper case alphabets'
        }
        if (!email.includes('@')) {
            return 'email should contain @'
        }
        if(!password){
            return 'password can not be blank'
        }
        if(!confirmPassword){
            return 'confirmPassword can not be blank'
        }
        if (password !== confirmPassword || confirmPassword !== password) {
            return 'password and confirm password must be same'
        }
        if (password) {
            const uppercaseRegExp = /(?=.*?[A-Z])/;
            const lowercaseRegExp = /(?=.*?[a-z])/;
            const digitsRegExp = /(?=.*?[0-9])/;
            const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
            const minLengthRegExp = /.{8,}/;
            const passwordLength = password.length;
            const uppercasepassword = uppercaseRegExp.test(password);
            const lowercasepassword = lowercaseRegExp.test(password);
            const digitspassword = digitsRegExp.test(password);
            const specialCharpassword = specialCharRegExp.test(password);
            const minLengthpassword = minLengthRegExp.test(password);

            if (passwordLength === 0) {
                return "password is empty";
            } else if (!uppercasepassword) {
                return "At least one Uppercase";
            } else if (!lowercasepassword) {
                return "At least one Lowercase";
            } else if (!digitspassword) {
                return "At least one digit";
            } else if (!specialCharpassword) {
                return "At least one Special Characters";
            } else if (!minLengthpassword) {
                return "At least minumum 8 characters";
            }

            return ''
        }
    }

    function submitForm(e) {
        e.preventDefault()
        const errorMessage = doValidate()
        if (errorMessage) {
            setErrorText(errorMessage)
            console.log('Validation failed! can not submit form.')
        } else {
            setErrorText('')
            setFormData({
                Name: '',
                email: '',
                contact: '',
                password: '',
                confirmPassword: ''
            })
            console.log('Submitting form', formData)
        }
    }

    function updateData(e, propName) {
        setFormData(data => ({
            ...data,
            [propName]: e.target.value
        }))
    }

    return (
        <>
            <Navbar />
            <div className="Home-page">
                <div className="Register">
                    <p className="text-of-the-register-page">
                        All you needed was a wheel
                        <br />
                        in Your hand and four on <br />
                        the road
                    </p>
                </div>
                <div className="register-login-form" id="form">
                    <form action="" method="POST" onSubmit={submitForm} className="form-container">
                        <h6 className="register-heading">Register Your Admin Account</h6>
                        {errorText && <div className="error">{errorText}</div>}
                        <input onChange={(e) => updateData(e, 'Name')}
                            value={formData.Name}
                            type="text"
                            name="name"
                            className="register-login-admin"
                            placeholder="Name"
                        />
                        <input onChange={(e) => updateData(e, 'email')}
                            value={formData.email}
                            type="email"
                            name="email"
                            className="register-login-admin"
                            placeholder="email"
                        />
                        <input onChange={(e) => updateData(e, 'contact')}
                            value={formData.contact}
                            type="number"
                            name="contact"
                            className="register-login-admin"
                            placeholder="contact"
                        />
                         <input onChange={(e) => updateData(e, 'password')}
                        value={formData.password}
                        type="text"
                        name="password"
                        className="register-login-admin"
                        placeholder="password"
                    />
                    <input onChange={(e) => updateData(e, 'confirmPassword')}
                        value={formData.confirmPassword}
                        type="text"
                        name="confirm_password"
                        className="register-login-admin"
                        placeholder="confirm password"

                    />
                    <div className="register-button">
                        <Link to={'/adminlogin'}>
                    <div type="submit" className="signin">Signin</div></Link>
                    <button type="submit" className="register-btn2">
                        Register
                    </button>
                </div>
                </form>
                
            </div>
        </div>
        </>
    );
};
export default Register;