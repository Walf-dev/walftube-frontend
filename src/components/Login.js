import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { StyledAuth } from "./Signup";
import useInput from "../hooks/useInput";
import { login } from "../reducers/user";

const Login = ({ setAuth }) => {
  const dispatch = useDispatch();

  const email = useInput("nobody@fully.com");
  const password = useInput("12345678");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.value.trim() || !password.value.trim()) {
      return toast.error("Please, fill in all the fields");
    }

    const payload = {
      email: email.value,
      password: password.value,
    };

    const clearForm = () => {
      email.setValue("");
      password.setValue("");
    };

    dispatch(login({ payload, clearForm }));
  };

  return (
    <StyledAuth>
      <h2>Login To Your Account</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email.value}
          onChange={email.onChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password.value}
          onChange={password.onChange}
        />
        <div className="action input-group">
          <span  onClick={() => setAuth("SIGNUP")}>
            You don't have an account? <span className="pointer">Sign Up</span>  
          </span>
          <button>Login</button>
        </div>
      </form>
    </StyledAuth>
  );
};

export default Login;
