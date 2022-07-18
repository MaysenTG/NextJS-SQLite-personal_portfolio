import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-muted">© 2022 Maysen Greenwood</p>
        <ul className="nav col-md-4 justify-content-center">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link px-2 text-muted">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/projects">
              <a className="nav-link">Projects</a>
            </Link>
          </li>
        </ul>
        <ul className="nav col-md-4 justify-content-end d-flex">
          <li className="ms-3">
            <Link href="https://github.com/MaysenTG">
              <Image
                width={40}
                height={40}
                src="https://ik.imagekit.io/maysentg/tr:f-png/icons8-github-256.png"
                alt="github logo"
              />
            </Link>
          </li>
          <li className="ms-3">
            <Link href="https://www.linkedin.com/in/maysen-greenwood/">
              <Image
                width={40}
                height={40}
                src="https://ik.imagekit.io/maysentg/tr:f-png/icons8-linkedin-circled-240.png"
                alt="linkedin logo"
              />
            </Link>
          </li>
          <li className="ms-3">
            <Link href="https://www.facebook.com/maysen.greenwood">
              <Image
                width={40}
                height={40}
                src="https://ik.imagekit.io/maysentg/tr:f-png/icons8-facebook-240.png"
                alt="facebook logo"
              />
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}
