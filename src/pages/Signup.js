import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { signup } from "../firebase/auth";

function Signup() {
  const [isLoading, setLoading] = useState(false);
  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    try {
      signup(data);
      reset();
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const formClassName = `ui form ${isLoading ? "loading" : ""}`;
  const { register, handleSubmit, reset } = useForm();
  return (
    <div className="login-container">
      <div className="ui card login-card">
        <div className="content">
          <form className={formClassName} onSubmit={handleSubmit(onSubmit)}>
            <div className="two fields">
              <div className="field">
                <label>
                  First Name
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    ref={register}
                  />
                </label>
              </div>
              <div className="field">
                <label>
                  Last Name
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    ref={register}
                  />
                </label>
              </div>
            </div>
            <div className="field">
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  ref={register}
                />
              </label>
            </div>
            <div className="field">
              <label>
                Password
                <input type="password" name="password" placeholder="Password" />
              </label>
            </div>
            <button className="ui primary button login" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;

/*
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.ui.card.login-card {
  width: 450px;
}

.login.button {
  float: right;
}

.ui.form input[type=text],
.ui.form input[type=password],
.ui.form select {
  margin-top: 10px;
}
*/
