import ContactBtn from "./ContactBtn";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [active, setActive] = useState("HOME");
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRefs = useRef({});
  const navItems = ["HOME", "ABOUT", "PORTFOLIO"];

  useEffect(() => {
    const el = navRefs.current[active];
    if (el) {
      setIndicatorStyle({
        width: `${el.offsetWidth}px`,
        left: `${el.offsetLeft}px`,
      });
    }
  }, [active]);

  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo">
          <a href='../main.jsx' className="logo-text">LCC</a>
        </div>
        <nav className="navigation" style={{ position: "relative" }}>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              ref={(el) => (navRefs.current[item] = el)}
              className={`nav-btn ${active === item ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                
                setActive(item);

                const targetElement = document.getElementById(item.toLowerCase());
                if (targetElement) {
                  targetElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {item}
            </a>
          ))}

          <span className="nav-indicator" style={indicatorStyle} />
        </nav>
        {/* <nav className="navigation">
          <a className="nav-btn">HOME</a>
          <a className="nav-btn">PORTFOLIO</a>
          <a className="nav-btn">ABOUT</a>
        </nav> */}
        <ContactBtn />
      </div>
    </header>
  );
}
