import Link from "next/link";
import HeaderStyle from "./header.module.css"// Import the custom CSS file

export default function Header() {
  return (
    <header className="header-container">
      {/* Navigation Links */}
      <nav className="nav-menu">
        <ul className="nav-list">
          <li className="nav-item">
            <Link href="/home" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link href="/About" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link href="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
