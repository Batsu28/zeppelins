import "../style/header.css";
import Logo from "./icons/Logo";
import Logo2 from "./icons/Logo2";

const links = [
  "PORTFOLIO",
  "BLOG",
  "CV",
  "store",
  "freelance",
  "about me",
  "contact",
];

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="Header">
          <div className="logo">
            <Logo /> <Logo2 />
          </div>
          <ul>
            {links.map((link) => (
              <li>
                <a href="#">{link.toUpperCase()}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
