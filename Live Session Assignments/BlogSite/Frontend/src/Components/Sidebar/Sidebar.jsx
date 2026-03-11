import React from "react";
import styles from "./Sidebar.module.css";
import { IoHome } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { FaPenFancy } from "react-icons/fa";
import { FiEdit3, FiFileText, FiSettings } from "react-icons/fi";

function Sidebar() {
  return (
    <>
      <div className={styles.sidebarContainer}>
        <div className={styles.sidebar}>
          <div className={styles.mainContainer}>
            <div className={styles.iconContainer}>
              <div className={styles.icon}>
                <IoHome size={40} />
              </div>
              <span className={styles.sidebarTextItem}>Home</span>
            </div>

            <div className={styles.iconContainer}>
              <div className={styles.icon}>
                <MdOutlineExplore size={40} />
              </div>
              <span className={styles.sidebarTextItem}>Explore</span>
            </div>

            <div className={styles.iconContainer}>
              <div className={styles.icon}>
                <MdOutlineLibraryBooks size={40} />
              </div>
              <span className={styles.sidebarTextItem}>Library</span>
            </div>

            <div className={styles.iconContainer}>
              <div className={styles.icon}>
                <FaPenFancy size={40} />
              </div>
              <span className={styles.sidebarTextItem}>My Blogs</span>
            </div>

            <div className={styles.iconContainer}>
              <div className={styles.icon}>
                <FiEdit3 size={40} />
              </div>
              <span className={styles.sidebarTextItem}>Write</span>
            </div>

            <div className={styles.iconContainer}>
              <div className={styles.icon}>
                <FiFileText size={40} />
              </div>
              <span className={styles.sidebarTextItem}>Drafts</span>
            </div>

            <div className={styles.iconContainer}>
              <div className={styles.icon}>
                <FiSettings size={40} />
              </div>
              <span className={styles.sidebarTextItem}>Settings</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
