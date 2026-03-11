import React from "react";
import styles from "./TopbarAL.module.css";
import { BsSearch } from "react-icons/bs";
import { FaBell } from "react-icons/fa6";
import { TfiWrite } from "react-icons/tfi";

function TopbarAL() {
  return (
    <div className={styles.topbar}>
      <div className={styles.Container}>
        <div className={styles.MainContainer}>
          <div className={styles.logo}>
            <span className={styles.phantom}>Phantom</span>
            <span className={styles.blog}>Blog</span>
          </div>

          <div className={styles.searchContainer}>
            <BsSearch className={styles.searchIcon} />
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        <div className={styles.contactUs}>Contact Us</div>
        <div className={styles.write}>
          <TfiWrite size={24} /> <span className={styles.writeText}>Write</span>
        </div>
        <div>
          <FaBell size={30} className={styles.bell} />
        </div>
        <div>
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className={styles.profile}
          />
        </div>
      </div>
    </div>
  );
}

export default TopbarAL;
