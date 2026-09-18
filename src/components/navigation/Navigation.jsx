import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./navigation.module.css";
import { useAuthContext } from "../../context/useAuthContext";

const navLinks = [
  { to: "/", label: "Forside" },
  { to: "/backoffice", label: "Backoffice" },
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
      <Link to="/" onClick={closeMenu}>
        <span className={styles.logo}>DEN GLADE SKORPE</span>
      </Link>

      <div className={styles.navigation__burger}>
        <span className={styles.cart}>Kurv</span>
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

      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        {navLinks.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to} onClick={closeMenu}>
              {link.label}
            </NavLink>
          </li>
        ))}

        {isLoggedIn ? (
          <li>
            <button className={styles.logout} onClick={handleLogout}>
              Log ud
            </button>
          </li>
        ) : (
          <li>
            <NavLink to="/backoffice" onClick={closeMenu}>
              Login
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
