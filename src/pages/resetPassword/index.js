import React, { useRef, useState } from "react";
import PublicHeader from "../../components/PublicHeader";
import Footer from "../../components/Footer";
import styles from "./ResetPage.module.css";
import { useAuth } from "../../contexts/AuthContext";

const ResetPage = () => {
  const emailRef = useRef();
  const [error, setError ] = useState('')


  const { resetPassword } = useAuth();
  
  function handleSubmit(e) {
	  e.preventDefault();
	  try{
		resetPassword(emailRef.current.value)
	  } catch {

	  }
	  
  }

  return (
    <div className={styles.resetpage}>
      <PublicHeader />
      <div className={styles.form_wrapper}>
        <h3>Forgot Password?</h3>
        <p>Reset password in two quick steps</p>
        <form onSubmit={(e) =>handleSubmit(e)}>
          <input
            type="email"
            name="resetmail"
            id="resetmail"
            placeholder="Email or phone"
            ref={emailRef}
			className={styles.input}
          />
          <input type="submit" value="Reset Password" className={styles.reset_btn}/>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ResetPage;
