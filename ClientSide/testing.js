import React, { useState } from "react";
import "../../Styles/Register.css";
import Navbar from "../Navbar";
import { Link,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

// import { addNewAdmin } from "../../Utils/AdminUtils";

const Register = () => {
    const navigate=useNavigate()
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
        if (!email) {
            toast.error('email can not be blank') 
        }
        if (!contact) {
            toast.error('contact can not be blank') 
        }
        if (/\d+/.test(Name)) {
            toast.error('Name should contain small case and upper case alphabets') 
        }
        if (!email.includes('@')) {
            toast.error('email should contain @') 
        }
        if (!password) {
            toast.error('password can not be blank') 
        }
        if (!confirmPassword) {
            toast.error('confirmPassword can not be blank') 
        }
        if (password !== confirmPassword || confirmPassword !== password) {
            toast.error('password and confirm password must be same') 
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
        }
        const res = await fetch('http://localhost:5000/admin/register', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                Name, email, contact, password, confirmPassword
            })
        });
        const data = await res.json();
        if(data.status===400 || !data){
            window.alert("user already exist");
            console.log("user already exist")
        }
        else{
            window.alert("Registration Successfull");
            console.log("Registration Successfull");
            navigate('/adminlogin')
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
                        {/* {errorText && <div className="error">{errorText}</div>} */}
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
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          theme="light"
        />
            </div>
        </>
    );

};
export default Register;



// import React, { useState } from "react";
// import "../../Styles/Register.css";
// import Navbar from "../Navbar";
// import { Link } from "react-router-dom";
// import Swal from 'sweetalert2';
// import { addNewAdmin } from "../../Utils/AdminUtils";

// const Register = () => {
//     const [formData, setFormData] = useState({
//         Name: '',
//         email: '',
//         contact: '',
//         password: '',
//         confirmPassword: ''
//     })
//     const [loder, setLoder] = useState(false)
//     const [errorText, setErrorText] = useState('');

//     function doValidate() {
//         const { Name, email, contact, password, confirmPassword } = formData
//         if (!Name) {
//             return 'name can not be blank'
//         }
//         if (!email) {
//             return 'email can not be blank'
//         }
//         if (!contact) {
//             return 'contact can not be blank'
//         }
//         if (/\d+/.test(Name)) {
//             return 'Name should contain small case and upper case alphabets'
//         }
//         if (!email.includes('@')) {
//             return 'email should contain @'
//         }
//         if (!password) {
//             return 'password can not be blank'
//         }
//         if (!confirmPassword) {
//             return 'confirmPassword can not be blank'
//         }
//         if (password !== confirmPassword || confirmPassword !== password) {
//             return 'password and confirm password must be same'
//         }
//         if (password) {
//             const uppercaseRegExp = /(?=.*?[A-Z])/;
//             const lowercaseRegExp = /(?=.*?[a-z])/;
//             const digitsRegExp = /(?=.*?[0-9])/;
//             const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
//             const minLengthRegExp = /.{8,}/;
//             const passwordLength = password.length;
//             const uppercasepassword = uppercaseRegExp.test(password);
//             const lowercasepassword = lowercaseRegExp.test(password);
//             const digitspassword = digitsRegExp.test(password);
//             const specialCharpassword = specialCharRegExp.test(password);
//             const minLengthpassword = minLengthRegExp.test(password);

//             if (passwordLength === 0) {
//                 return "password is empty";
//             } else if (!uppercasepassword) {
//                 return "At least one Uppercase";
//             } else if (!lowercasepassword) {
//                 return "At least one Lowercase";
//             } else if (!digitspassword) {
//                 return "At least one digit";
//             } else if (!specialCharpassword) {
//                 return "At least one Special Characters";
//             } else if (!minLengthpassword) {
//                 return "At least minumum 8 characters";
//             }

//             return ''
//         }
//     }

//     const submitForm = async (e) => {
//         e.preventDefault()
//         const errorMessage = doValidate()
//         if (errorMessage) {
//             setErrorText(errorMessage)
//             console.log('Validation failed! can not submit form.')
//         } else {
//             setLoder(true);
//             addNewAdmin(formData).then(data => {
//                 if (data.status === "Failed") {
//                     setLoder(false)
//                     setErrorText("User Allready Exists")
//                     window.alert("User Allready Exists")
//                 }
//                 else if (data.status === "Success") {
//                     window.alert("admin register successfully")
//                     setLoder(false)
//                     setErrorText('')
//                     setFormData({
//                         Name: '',
//                         email: '',
//                         contact: '',
//                         password: '',
//                         confirmPassword: ''
//                     })
//                     console.log('Submitting form', formData)
//                 }
//             })
//         }
//     }
//     const Alert = () => {
//         const errorMessage = doValidate()
//         if(errorMessage){
//             Swal.fire(errorMessage)
//         }else{
//             Swal.fire("registration succes")
 
//         }
//     }

//     function updateData(e, propName) {
//         setFormData(data => ({
//             ...data,
//             [propName]: e.target.value
//         }))
//     }

//     return (
//         <>
//             <Navbar />
//             <div className="Home-page">
//                 <div className="Register">
//                     <p className="text-of-the-register-page">
//                         All you needed was a wheel
//                         <br />
//                         in Your hand and four on <br />
//                         the road
//                     </p>
//                 </div>
//                 <div className="register-login-form" id="form">
//                     <form  method="POST" onSubmit={submitForm} className="form-container">
//                         <h6 className="register-heading">Register Your Admin Account</h6>
//                         {/* {errorText && <div className="error">{errorText}</div>} */}
//                         <input onChange={(e) => updateData(e, 'Name')}
//                             value={formData.Name}
//                             type="text"
//                             name="name"
//                             className="register-login-admin"
//                             placeholder="Name"
//                         />
//                         <input onChange={(e) => updateData(e, 'email')}
//                             value={formData.email}
//                             type="email"
//                             name="email"
//                             className="register-login-admin"
//                             placeholder="email"
//                         />
//                         <input onChange={(e) => updateData(e, 'contact')}
//                             value={formData.contact}
//                             type="number"
//                             name="contact"
//                             className="register-login-admin"
//                             placeholder="contact"
//                         />
//                         <input onChange={(e) => updateData(e, 'password')}
//                             value={formData.password}
//                             type="text"
//                             name="password"
//                             className="register-login-admin"
//                             placeholder="password"
//                         />
//                         <input onChange={(e) => updateData(e, 'confirmPassword')}
//                             value={formData.confirmPassword}
//                             type="text"
//                             name="confirm_password"
//                             className="register-login-admin"
//                             placeholder="confirm password"

//                         />
//                         <div className="register-button">
//                             <Link to={'/adminlogin'}>
//                                 <div type="submit" className="signin">Signin</div></Link>
//                             <button type="submit" className="register-btn2" onClick={Alert}>
//                                 Register
//                             </button>
//                         </div>
//                     </form>

//                 </div>
//             </div>
//         </>
//     );

// };
// export default Register;