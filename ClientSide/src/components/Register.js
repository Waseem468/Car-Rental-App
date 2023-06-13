import React, { useState } from "react";
import "../Styles/Register.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const Register = () => {
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Contact: '',
        Password: '',
        confirmPassword: ''
    })
    const [errorText, setErrorText] = useState('');
    function doValidate() {
        const { Name, Email, Contact, Password, confirmPassword } = formData
        if (!Name) {
            return 'name can not be blank'
        }
        if (!Email) {
            return 'Email can not be blank'
        }
        if (!Contact) {
            return 'contact can not be blank'
        }
        if (/\d+/.test(Name)) {
            return 'Name should contain small case and upper case alphabets'
        }
        if (!Email.includes('@')) {
            return 'Email should contain @'
        }
        if(!Password){
            return 'Password can not be blank'
        }
        if(!confirmPassword){
            return 'confirmPassword can not be blank'
        }
        if (Password !== confirmPassword || confirmPassword !== Password) {
            return 'password and confirm password must be same'
        }
        if (Password) {
            const uppercaseRegExp = /(?=.*?[A-Z])/;
            const lowercaseRegExp = /(?=.*?[a-z])/;
            const digitsRegExp = /(?=.*?[0-9])/;
            const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
            const minLengthRegExp = /.{8,}/;
            const passwordLength = Password.length;
            const uppercasePassword = uppercaseRegExp.test(Password);
            const lowercasePassword = lowercaseRegExp.test(Password);
            const digitsPassword = digitsRegExp.test(Password);
            const specialCharPassword = specialCharRegExp.test(Password);
            const minLengthPassword = minLengthRegExp.test(Password);

            if (passwordLength === 0) {
                return "Password is empty";
            } else if (!uppercasePassword) {
                return "At least one Uppercase";
            } else if (!lowercasePassword) {
                return "At least one Lowercase";
            } else if (!digitsPassword) {
                return "At least one digit";
            } else if (!specialCharPassword) {
                return "At least one Special Characters";
            } else if (!minLengthPassword) {
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
                Email: '',
                Contact: '',
                Password: '',
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
                        <h6 className="register-heading">Register Your Account</h6>
                        {errorText && <div className="error">{errorText}</div>}
                        <input onChange={(e) => updateData(e, 'Name')}
                            value={formData.Name}
                            type="text"
                            name="name"
                            className="register-login-admin"
                            placeholder="Name"
                        />
                        <input onChange={(e) => updateData(e, 'Email')}
                            value={formData.Email}
                            type="email"
                            name="email"
                            className="register-login-admin"
                            placeholder="Email"
                        />
                        <input onChange={(e) => updateData(e, 'Contact')}
                            value={formData.Contact}
                            type="number"
                            name="contact"
                            className="register-login-admin"
                            placeholder="contact"
                        />
                         <input onChange={(e) => updateData(e, 'Password')}
                        value={formData.Password}
                        type="text"
                        name="password"
                        className="register-login-admin"
                        placeholder="Password"
                    />
                    <input onChange={(e) => updateData(e, 'confirmPassword')}
                        value={formData.confirmPassword}
                        type="text"
                        name="confirm_password"
                        className="register-login-admin"
                        placeholder="confirm password"

                    />
                    <div className="register-button">
                        <Link to={'/'}>
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