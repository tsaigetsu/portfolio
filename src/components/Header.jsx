import ContactBtn from "./ContactBtn";

export default function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo">
          <h2 className="logo-text">LCC</h2>
        </div>
        <nav className="navigation">
          <a className="nav-btn">HOME</a>
          <a className="nav-btn">PORTFOLIO</a>
          <a className="nav-btn">ABOUT</a>
        </nav>
        <ContactBtn />
      </div>
    </header>
  );
}
