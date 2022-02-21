import React from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import { signup } from "../reducers/user";

export const StyledAuth = styled.div`
  width: 385px;
  padding: 3rem 1.5rem;
  background: ${(props) => props.theme.grey};
  border-radius: 4px;
  margin: 8% auto;

  h2 {
    margin-bottom: 1.3rem;
  }

  .input-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .input-group input:last-child {
    margin-left: 0.7rem;
  }

  input {
    overflow: hidden;
    border-radius: 3px;
    width: 100%;
    padding: 0.6rem 1.2rem;
    background: ${(props) => props.theme.black};
    border: 1px solid ${(props) => props.theme.black};
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme.primaryColor};
  }

.pointer {
  color: ${(props) => props.theme.red2};
}
  .action {
    margin-top: 1rem;
  }

  button {
    padding: 0.4rem 1rem;
    background: ${(props) => props.theme.red};
    color: ${(props) => props.theme.white};
    border: 1px solid ${(props) => props.theme.red};
    border-radius: 3px;
    text-transform: uppercase;
    letter-spacing: 1.1px;
  }

  span {
    letter-spacing: 0.8px;
    color: ${(props) => props.theme.secondaryColor};
  }

  @media screen and (max-width: 430px) {
    margin: 20% auto;
    width: 90%;
  }
`;

const Signup = ({ setAuth }) => {
  const dispatch = useDispatch();

  const firstname = useInput("");
  const lastname = useInput("");
  const username = useInput("");
  const email = useInput("");
  const password1 = useInput("");
  const password2 = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if ( //trim() remove the blanks at the start and end of string
      !firstname.value.trim() ||
      !lastname.value.trim() ||
      !username.value.trim() ||
      !email.value.trim() ||
      !password1.value.trim() ||
      !password2.value.trim()
    ) {
      return toast.error("Please fill in all the fields");
    }

    if (password1.value !== password2.value) {
      return toast.error("Sorry, password doesn't match");
    }

    if (username.value.length <= 3) {
      return toast.error("User name should be at least four characters. Choose a longer user name");
    }

    const regex = /^[a-z0-9\x20]+$/i;
    if (!regex.exec(username.value)) {
      return toast.error("Choose a better username");
    }

    const payload = {
      username: username.value,
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
      password: password1.value,
    };

    const clearForm = () => {
      username.setValue("");
      firstname.setValue("");
      lastname.setValue("");
      email.setValue("");
      password1.setValue("");
      password2.setValue("");
    };

    dispatch(signup({ payload, clearForm }));
  };

  return (
    <StyledAuth>
      <h2>Create Your Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            placeholder="First name"
            value={firstname.value}
            onChange={firstname.onChange}
          />
          <input
            type="text"
            placeholder="Last name"
            value={lastname.value}
            onChange={lastname.onChange}
          />
        </div>
        <input
          type="text"
          placeholder="Username"
          value={username.value}
          onChange={username.onChange}
        />
        <input
          type="email"
          placeholder="Email"
          value={email.value}
          onChange={email.onChange}
        />
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password1.value}
            onChange={password1.onChange}
          />
          <input
            type="password"
            placeholder="Confirm password"
            value={password2.value}
            onChange={password2.onChange}
          />
        </div>
        <div className="action input-group">
          <span className="pointer" onClick={() => setAuth("LOGIN")}>
          <span className="pointer" onClick={() => setAuth("SIGNUP")}>
            I already have an account  
          </span>
          </span>
          <button>Sign Up</button>
        </div>
      </form>
    </StyledAuth>
  );
};

export default Signup;
