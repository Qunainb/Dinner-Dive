import hamburgerIcon from "../assets/charm_menu-hamburger.svg";

export default function Header() {
  return (
    <header className="header-container">
      <nav className="navbar">
        <ul id="left-side">
          <li>
            <img src={hamburgerIcon} alt="hamburger icon" />
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">A-Z</a>
          </li>
        </ul>
        <p id="title">Dinner Dive</p>
        <ul id="right-side">
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">EN</a>
          </li>
        </ul>
      </nav>
      <section className="main-text">
        <h1>Made by Italians. Enjoyed by Everyone.</h1>
      </section>
    </header>
  );
}
