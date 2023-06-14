import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "../component/style/userregister.css"
import '../Styles/Userlogin.css';
const Userlogin = () => {
  const [formData, setFormData] = useState({
    Email: '',
    Password: ''
  })
  const [errorText, setErrorText] = useState('');
  function doValidate() {
    const { Email, Password } = formData
    if (!Email) {
      return 'Email can not be blank'
    }
    if (!Password) {
      return 'Password can not be blank'
    }
  }

  function updateData(e, propName) {
    setFormData(data => ({
      ...data,
      [propName]: e.target.value
    }))
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
        Email: '',
        Password: ''
      })
      console.log('Submitting form', formData)
    }
  }


  return (
    <div className="user-login-form" id="form">
      <form action="" method="POST" onSubmit={submitForm}>
      {errorText && <div className="error">{errorText}</div>}
        <h6 className="user-login-heading">Sign in Your Acount</h6>
        <input onChange={(e) => updateData(e, 'Email')}
                            value={formData.Email}
          type="email"
          name="email"
          className="user-login-admin"
          placeholder="Email"
        />
        <input onChange={(e) => updateData(e, 'Password')}
                            value={formData.Password}
          type="password"
          name="password"
          className="user-login-admin"
          placeholder="password"
        />

        <div className="admin-login-page">
          <div className="user-forget-password"><a href=".">Forget password?</a></div>
          {/* <Link to={'/orderpage'}> */}
            <button type="submit" className="user-login-page-btn">
              Sign in
            </button>
          {/* </Link> */}
        </div>
        <Link to={'/register'}>
          <div class="user-link-create-account">Create Account</div>
        </Link>
      </form>
    </div>
  );
};
export default Userlogin;
