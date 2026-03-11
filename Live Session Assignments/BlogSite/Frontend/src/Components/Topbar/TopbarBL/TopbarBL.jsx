import React from "react";
import styles from "./TopbarBL.module.css";
import { BsSearch } from "react-icons/bs";
import { IoMdLogIn } from "react-icons/io";

function TopbarBL() {
  return (
    <div className={styles.topbar}>
      <div className={styles.Container}>
        <div className={styles.MainContainer}>
          <div className={styles.SubContainer}>
            <div className={styles.logo}>
              <span className={styles.phantom}>Phantom</span>
              <span className={styles.blog}>Blog</span>
            </div>

            <div className={styles.navLinks}>
              <div>
                <a className={styles.navlink}>Our Story</a>
                <a className={styles.navlink}>Contact</a>
                <a className={styles.navlink}>Write</a>
              </div>
            </div>

            <div className={styles.authButtons}>
              <a className={styles.loginButton}>
                <IoMdLogIn />
                Login
              </a>
              <button className={styles.signupButton}>GetStarted</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopbarBL;
