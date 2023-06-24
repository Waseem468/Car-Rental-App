import React, { useState } from "react";
import "../../Styles/Register.css";
import Navbar from "../Navbar";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        Name: '',
        email: '',
        contact: '',
        password: '',
        confirmPassword: ''
    })
    const [loder, setLoder] = useState(false)
    const [errorText, setErrorText] = useState('');

    function doValidate() {
        const { Name, email, contact, password, confirmPassword } = formData
        if (!Name) {
            toast.error('name can not be blank')
        }
        else if (!email) {
            toast.error('email can not be blank')
        }
        else if (!contact) {
            toast.error('contact can not be blank')
        }
        else if (/\d+/.test(Name)) {
            toast.error('Name should contain small case and upper case alphabets')
        }
        else if (!email.includes('@')) {
            toast.error('email should contain @')
        }
        else if (!password) {
            toast.error('password can not be blank')
        }
        else if (!confirmPassword) {
            toast.error('confirmPassword can not be blank')
        }
        else if (password !== confirmPassword || confirmPassword !== password) {
            toast.error('password and confirm password must be same')
        }
        else if (password) {
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
                toast.error("password is empty");
            } else if (!uppercasepassword) {
                toast.error("At least one Uppercase");
            } else if (!lowercasepassword) {
                toast.error("At least one Lowercase");
            } else if (!digitspassword) {
                toast.error("At least one digit");
            } else if (!specialCharpassword) {
                toast.error("At least one Special Characters");
            } else if (!minLengthpassword) {
                toast.error("At least minumum 8 characters");
            }

            return ''
        }
    }

    let name, value
    function handleInputs(e) {
        name = e.target.name;
        value = e.target.value;
        setFormData({ ...formData, [name]: value })
    }

    const PostData = async (e) => {
        e.preventDefault();
        const { Name, email, contact, password, confirmPassword } = formData;
        const errorMessage = doValidate()
        if (errorMessage) {
            setErrorText(errorMessage)
            console.log('Validation failed! can not submit form.')
        } else {
            setLoder(true)
            const res = await fetch('https://car-rental-app-1-5tgr.onrender.com/admin/register', {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    Name, email, contact, password, confirmPassword
                })
            });
            const data = await res.json();
            if (data.status === 'Failed') {
                setLoder(false)
                toast.error("User Allready Exists")
                console.log("user already exist")
            }
            else {
                toast.success("Registration Successfull");
                console.log("Registration Successfull");
                window.alert("Registration Successfull")
                setErrorText("")
                setFormData({
                    Name: "",
                    email: "",
                    contact: "",
                    password: "",
                    confirmPassword: ""
                })
                navigate('/adminlogin')
            }
        }
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
                    <form method="POST" className="form-container">
                        <h6 className="register-heading">Register Your Admin Account</h6>
                        <input onChange={handleInputs}
                            value={formData.Name}
                            type="text"
                            name="Name"
                            className="register-login-admin"
                            placeholder="Name"
                        />
                        <input onChange={handleInputs}
                            value={formData.email}
                            type="email"
                            name="email"
                            className="register-login-admin"
                            placeholder="email"
                        />
                        <input onChange={handleInputs}
                            value={formData.contact}
                            type="number"
                            name="contact"
                            className="register-login-admin"
                            placeholder="contact"
                        />
                        <input onChange={handleInputs}
                            value={formData.password}
                            type="text"
                            name="password"
                            className="register-login-admin"
                            placeholder="password"
                        />
                        <input onChange={handleInputs}
                            value={formData.confirmPassword}
                            type="text"
                            name="confirmPassword"
                            className="register-login-admin"
                            placeholder="confirm password"

                        />
                        <div className="register-button">
                            <Link to={'/adminlogin'}>
                                <div type="submit" className="signin" >Signin</div></Link>
                            <button type="submit" className="register-btn2" onClick={PostData}>
                                Register
                            </button>
                        </div>
                    </form>

                </div>
                <ToastContainer
                    position="top-center"
                    autoClose={2500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    theme="dark"
                />
            </div>
        </>
    );

};
export default Register;