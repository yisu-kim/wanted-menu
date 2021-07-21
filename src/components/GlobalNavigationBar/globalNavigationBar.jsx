import React, { useEffect, useState } from "react";
import DropdownNavigation from "../DropdownNavigation/dropdownNavigation";
import styles from "./globalNavigationBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";

function GlobalNavigationBar(props) {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <div className={styles.header} onMouseLeave={() => setIsShown(false)}>
      {width < breakpoint ? (
        <nav className={styles.mobileNav}>
          <div className={styles.mobileTitle}>
            <a href="/">
              <img src="/logo_wanted.png" alt="wanted" />
            </a>
          </div>
          <div className={styles.mobileMenu}>
            <ul>
              <li>
                <a href="#">홈</a>
              </li>
              <li>
                <a href="#">탐색</a>
              </li>
              <li>
                <a href="#">커리어 성장</a>
              </li>
            </ul>
            <aside>
              <ul>
                <li>
                  <button>
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </li>
                <li>
                  <button>
                    <FontAwesomeIcon icon={faBars} />
                  </button>
                </li>
              </ul>
            </aside>
          </div>
        </nav>
      ) : (
        <nav className={styles.nav}>
          <div className={styles.title}>
            <a href="/">
              <img src="/logo_wanted.png" alt="wanted" />
            </a>
          </div>
          <ul className={styles.menu}>
            <li onMouseEnter={() => setIsShown(true)}>
              <a href="#">탐색</a>
            </li>
            <li onMouseEnter={() => setIsShown(false)}>
              <a href="#">커리어 성장</a>
            </li>
            <li onMouseEnter={() => setIsShown(false)}>
              <a href="#">직군별 연봉</a>
            </li>
            <li onMouseEnter={() => setIsShown(false)}>
              <a href="#">이력서</a>
            </li>
            <li onMouseEnter={() => setIsShown(false)}>
              <a href="#">매치업</a>
            </li>
            <li onMouseEnter={() => setIsShown(false)}>
              <a href="#">프리랜서</a>
            </li>
          </ul>
          {isShown && (
            <div className={styles.dropdownNav}>
              <DropdownNavigation />
            </div>
          )}
          <aside>
            <ul>
              <li>
                <button>
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </li>
              <li>
                <button>회원가입/로그인</button>
              </li>
            </ul>
          </aside>
        </nav>
      )}
    </div>
  );
}

export default GlobalNavigationBar;
