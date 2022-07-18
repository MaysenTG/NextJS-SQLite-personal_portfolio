// Import Link from NextJS
import Link from "next/link";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        background: "linear-gradient(120deg,#7f70f5,#0ea0ff)",
        color: "#fff",
        padding: 20 + "px",
      }}
    >
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand"> Maysen Greenwood</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link active" id="/">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" href="/projects">
                <a id="/projects" className="nav-link active">
                  Projects
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/cv">
                <a id="/cv" className="nav-link active">
                  CV
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
