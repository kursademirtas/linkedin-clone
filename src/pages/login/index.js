import React, { useState, useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Alert } from "@material-ui/lab";
import Logo from "../../components/Logo";
import styles from "./LoginPage.module.css";
import Footer from "../../components/Footer";

const Login = () => {
  const history = useHistory();
  const { currentUser } = useAuth();

  if (currentUser) history.push("/feed");

  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/feed");
    } catch {
      setError("Failed to login");
    }
    setLoading(false);
  }

  return (
    <div className={styles.login_container}>
      <div>
        <Logo />
        <div className={styles.form_container}>
          {error && <Alert severity="error">{error}</Alert>}
          <div>
            <h2 className={styles.login_title}>Sign in</h2>
            <p className={styles.login_text}>
              Stay updated on your professsional world
            </p>
          </div>

          <form className={styles.form_elements} onSubmit={handleSubmit}>
            <input
              className={styles.login_input}
              placeholder="Email or Phone"
              type="email"
              ref={emailRef}
              required
            />
            <input
              className={styles.login_input}
              placeholder="Password"
              type="password"
              ref={passwordRef}
              required
            />
            <Link to='/resetpassword' className={styles.btn_primary}>Forgot password?</Link>
            <input className={styles.btn_login} type="submit" value="Sign in" />
          </form>
        </div>

        <div className={styles.wrapper}>
          <p className={styles.login_text}>New to Linkedin?</p>
          <Link to='/signup' disabled={loading} className={styles.btn_primary}>
            Join Now
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
