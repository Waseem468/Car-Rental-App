
import React, { useState } from 'react'
import '../Styles/Register.css'


function Signup() {

    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Contact: '',
        Password: '',
        confirmPassword: ''
    })
    const [errorText, setErrorText] = useState('');
    const [output, setOutput] = useState('');

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

    return <div className='login-form'>
        <h5 className="login-form-h3">Register Your Account</h5>
        <form action="" method="POST" onSubmit={submitForm}>
            {errorText && <div className="error">{errorText}</div>}
            <div className="field-container">
                <input
                    type="text"
                    placeholder="Enter your name"
                    onChange={(e) => updateData(e, 'Name')}
                    value={formData.Name}
                />
            </div>
            <div className="field-container">

                <input
                    type="text"
                    placeholder="Email"
                    onChange={(e) => updateData(e, 'Email')}
                    value={formData.Email}
                />
            </div>
            <div className="field-container">

                <input
                    type="Number"
                    placeholder="Contact"
                    onChange={(e) => updateData(e, 'Contact')}
                    value={formData.Contact}
                />
            </div>
            <div className="field-container">
                <input
                    type="text"
                    placeholder="Password"
                    onChange={(e) => updateData(e, 'Password')}
                    value={formData.Password}
                />
            </div>
            <div className="field-container">

                <input
                    type="text"
                    placeholder="Confirm Password"
                    onChange={(e) => updateData(e, 'confirmPassword')}
                    value={formData.confirmPassword}
                />
            </div>
            <div id="form-footer">
                <button type="submit" onClick={() => {
                    setOutput(formData.Name)
                }} >Submit</button>
            </div>
            <p className='output'>hello:{output}</p>
        </form>
    </div>
}

export default Signup;
