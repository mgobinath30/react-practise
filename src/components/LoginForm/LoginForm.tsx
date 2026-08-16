import LoginHeader from "./LoginHeader";
import classes from "./LoginForm.module.css";
import Input from "./Input";
import { useState } from "react";

export default function LoginForm() {
  const [isNameValid, setisNameValid] = useState<boolean>(false);
  const [isPwdValid, setisPwdValid] = useState<boolean>(false);

  //   let isNameValid = false;
  //   let isPwdValid = false;

  const handleInputValidation = (
    field: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (field === "username") {
      const isNameValid =
        event.target.value !== "" && event.target.value.length >= 3;
      setisNameValid(isNameValid);
    }
    if (field === "password") {
      const isPwdValid =
        event.target.value !== "" &&
        (event.target.value.match(/[A-Za-z0-9]/g) || []).length >= 3;
      setisPwdValid(isPwdValid);
    }
  };
  return (
    <div className={classes.container}>
      <LoginHeader />
      <div
        className={`${classes.loginform} ${isNameValid && isPwdValid ? classes.success : undefined}`}
      >
        <Input
          label="username"
          type="text"
          name="username"
          style={{ color: !isNameValid ? "red" : undefined }}
          onChange={(event) => handleInputValidation("username", event)}
        />
        <Input
          label="password"
          type="password"
          name="password"
          style={{ color: !isPwdValid ? "red" : undefined }}
          onChange={(event) => handleInputValidation("password", event)}
        />
        <button>Login</button>
      </div>
    </div>
  );
}
