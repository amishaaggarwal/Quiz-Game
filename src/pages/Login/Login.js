import React, { useState } from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Stack, TextField, InputAdornment } from "@mui/material";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import { setLoggedIn } from "Redux/login-redux/loginActions";

function Login() {
  const dispatch = useDispatch();
  const [formVal, setFormVal] = useState();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormVal(e.target.value);
  };
  const handleLogin = () => {
    dispatch(setLoggedIn(formVal));
    navigate("/kbc");
  };
  return (
    <form className="login-form" onSubmit={handleLogin}>
      <Stack direction="column" spacing={2} className="login-form-inner">
        <TextField
          id="input-with-icon-textfield"
          label="Username"
          onChange={(e) => handleChange(e)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="filled"
        />
        <Button variant="contained" color="secondary" type="submit">
          Lets Play!
        </Button>
      </Stack>
    </form>
  );
}

export default Login;
