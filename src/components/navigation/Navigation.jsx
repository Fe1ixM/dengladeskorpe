import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "/logo.png";
import Kurv from "../kurv/Kurv";

import styles from "../navigation/navigation.module.css";
import { useAuthContext } from "../../context/UseAuthContext";

const navLinks = [
  { to: "/", label: "Forside" },
  { to: "/personalet", label: "Personalet" },
  { to: "/kontakt", label: "Kontakt" },
  { to: "/kurv", label: "Kurv" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, logout } = useAuthContext();
  const navigate = useNavigate();

  const closeMenu = () => setIsOpen(false);

  const handleLogout = () => {
    logout();
    closeMenu();
    navigate("/");
  };

  return (
    <nav className={styles.navigation}>
      {/* Logo */}
      <Link to="/" onClick={closeMenu}>
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>

      {/* Burger + Kurv */}
      <div className={styles.navigation__burger}>
        <NavLink to="/kurv" onClick={closeMenu}>
          <Kurv />
        </NavLink>

        <button
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Åbn menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Navigation links */}
      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        {navLinks.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to} onClick={closeMenu}>
              {link.label}
            </NavLink>
          </li>
        ))}

        {/* Login / Logout */}
        {isLoggedIn ? (
          <>
            <li>
              <NavLink to="/backoffice" onClick={closeMenu}>
                Backoffice
              </NavLink>
            </li>

            <li>
              <button className={styles.logout} onClick={handleLogout}>
                Log ud
              </button>
            </li>
          </>
        ) : (
          <li>
            <NavLink to="/login" onClick={closeMenu}>
              Login
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
