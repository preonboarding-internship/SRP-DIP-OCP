import { useState } from "react";
import { useAuth } from "../context/AuthContext";

// React
// React
// UI rendering
// state management

function Auth() {
  const [userInputs, setUserInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userInputs;

  const saveUserInputs = ({ target }) => {
    const { name, value } = target;

    setUserInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const {
    signin: signinService,
    signup: signupService,
    logout: logOutService,
  } = useAuth();

  const signin = () => {
    signinService(email, password);
  };
  const signup = () => {
    signupService(email, password);
  };
  const logout = () => {
    logOutService();
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <label>
          email
          <input value={email} name="email" onChange={saveUserInputs} />
        </label>
      </div>
      <div>
        <label>
          password
          <input value={password} name="password" onChange={saveUserInputs} />
        </label>
      </div>
      <button onClick={signin}>signin</button>
      <button onClick={signup}>signup</button>
      <button onClick={logout}>logout</button>
    </form>
  );
}

export default Auth;
