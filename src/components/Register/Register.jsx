import React from "react";
import "./reg_style.css";

const Register = () => {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Redirect back to the main page after form submission
    history.push("/");
  };

  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>Nourish Net Registration</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="reg_style.css" />
      </head>
      <body>
        <div className="container">
          <h1 className="form-title">Register Today!</h1>
          <form id="registrationForm" method="POST">
            <div className="main-user-info">
              <div className="user-input-box">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter Full Name"
                />
              </div>
              <div className="user-input-box">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter Username"
                />
              </div>
              <div className="user-input-box">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                />
              </div>
              <div className="user-input-box">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter Phone Number"
                />
              </div>
              <div className="user-input-box">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                />
              </div>
              <div className="user-input-box">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <div className="cat-details-box">
              <span className="cat-title">Category</span>
              <div className="cat-category">
                <input type="radio" name="category" id="student" />
                <label htmlFor="student">Student</label>
                <input type="radio" name="category" id="college" />
                <label htmlFor="college">College</label>
                <input type="radio" name="category" id="organization" />
                <label htmlFor="organization">Organization</label>
              </div>
            </div>
            <div className="form-submit-btn">
              <input type="submit" value="Finish" />
            </div>
          </form>
        </div>
      </body>
    </html>
  );
};

export default Register;
