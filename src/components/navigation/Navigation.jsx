import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import styles from "../navigation/navigation.module.css";

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
    <nav className="navigation">
      <Link to="/" onClick={closeMenu}>
        <img className="logo" src={logo} alt="logo" />
      </Link>

      <div className="navigation__burger">
        <NavLink to="/kurv" onClick={closeMenu}>
          <Kurv />
        </NavLink>

        {/* Hamburger menu goes here */}
      </div>
    </nav>
  );
};
