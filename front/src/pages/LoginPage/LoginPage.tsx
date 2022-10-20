import { FC, FormEvent } from "react";

const LoginPage: FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("event", e);

    console.log("target", e.target);
    console.log("curr Target", e.currentTarget);
    const data = new FormData(e.currentTarget);
    console.log("data", Object.fromEntries(data.entries()));
  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
