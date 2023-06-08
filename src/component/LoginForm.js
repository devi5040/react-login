import React from "react";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
function LoginForm() {
  const navigate = useNavigate();
  const [val, setVal] = useState(false);
  const [type, setType] = useState("password");
  const submitHandle = (e) => {
    e.preventDefault();
    navigate("/success");
  };
  const visibleHandler = () => {
    setVal(!val);
    if (!val) {
      setType("text");
    } else {
      setType("password");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form className="flex flex-col" onSubmit={submitHandle}>
        <label className="my-2">Username</label>
        <input
          className="my-2 input"
          type="text"
          name="username"
          placeholder="Enter Username"
          required
        />
        <label className="my-2">Password</label>
        <div className="flex my-2 input">
          <input
            className=""
            type={type}
            id="password"
            placeholder="Enter Password"
            minLength="8"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Length should be more than 8, atleast 1 uppercase,1 lowercase and 1 digit "
            required
          />
          <div className="cursor-pointer " onClick={visibleHandler}>
            {val ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </div>
        </div>

        <input className="my-4 button" type="submit" value="Login" />
      </form>
    </div>
  );
}

export default LoginForm;
