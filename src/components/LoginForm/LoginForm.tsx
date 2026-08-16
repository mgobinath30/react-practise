import LoginHeader from "./LoginHeader";
import classes from "./LoginForm.module.css";
import Input from "./Input";

export default function LoginForm() {
  let isNameValid = false;
  let isPwdValid = false;

  const handleInputValidation = (
    field: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (field === "username") {
      isNameValid = event.target.value !== "" && event.target.value.length >= 3;
    }
    if (field === "password") {
      isPwdValid =
        event.target.value !== "" &&
        (event.target.value.match(/[A-Za-z0-9]/g) || []).length > 3;
    }
    console.log(isNameValid, isPwdValid);
  };
  return (
    <div className={classes.container}>
      <LoginHeader />
      <div className={classes.loginform}>
        <Input
          label="username"
          type="text"
          name="username"
          style={{ color: isNameValid ? "" : "red" }}
          onChange={(event) => handleInputValidation("username", event)}
        />
        <Input
          label="password"
          type="password"
          name="password"
          style={{ color: isPwdValid ? "" : "red" }}
          onChange={(event) => handleInputValidation("password", event)}
        />
        <button>Login</button>
      </div>
    </div>
  );
}
