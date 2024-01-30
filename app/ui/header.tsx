import Link from "next/link";
import Image from "next/image";

import { Catamaran } from "next/font/google";
import clsx from "clsx";

const catamaran = Catamaran({ subsets: ["latin"] });

export default function Header() {
  return (
    <header className={clsx("header-section", catamaran.className)}>
      <div className="container d-flex align-center">
        <Image src="/logo.png" height={35} width={172} alt="logo" />
        <ul className="navbar-nav">
          <li className="nav-menu-wrapper">
            <Link className="d-flex align-center" href="#">
              Home{" "}
              <Image
                src="/down-arrow.png"
                width={12}
                height={12}
                style={{ marginLeft: "8px" }}
                alt="arrow-down"
              />{" "}
            </Link>
            <ul className="drop-menu">
              <li className="nav-link">
                <Link href="#">Home 1</Link>
              </li>
              <li className="nav-link">
                <Link href="#">Home 2</Link>
              </li>
            </ul>
          </li>
          <li className="nav-menu-wrapper">
            <Link href="#">About Us</Link>
          </li>
          <li className="nav-menu-wrapper">
            <Link className="d-flex align-center" href="#">
              Services{" "}
              <Image
                src="/down-arrow.png"
                width={12}
                height={12}
                style={{ marginLeft: "8px" }}
                alt="arrow-down"
              />{" "}
            </Link>
            <ul className="drop-menu">
              <li className="nav-link">
                <Link href="#">Services 1</Link>
              </li>
              <li className="nav-link">
                <Link href="#">Services 2</Link>
              </li>
            </ul>
          </li>
          <li className="nav-menu-wrapper">
            <Link className="d-flex align-center" href="#">
              Portfolia{" "}
              <Image
                src="/down-arrow.png"
                width={12}
                height={12}
                style={{ marginLeft: "8px" }}
                alt="arrow-down"
              />{" "}
            </Link>
            <ul className="drop-menu">
              <li className="nav-link">
                <Link href="#">Portfolia 1</Link>
              </li>
              <li className="nav-link">
                <Link href="#">Portfolia 2</Link>
              </li>
            </ul>
          </li>
          <li className="nav-menu-wrapper">
            <Link className="d-flex align-center" href="#">
              Page{" "}
              <Image
                src="/down-arrow.png"
                width={12}
                height={12}
                style={{ marginLeft: "8px" }}
                alt="arrow-down"
              />{" "}
            </Link>
            <ul className="drop-menu">
              <li className="nav-link">
                <Link href="#">Page 1</Link>
              </li>
              <li className="nav-link">
                <Link href="#">Page 2</Link>
              </li>
            </ul>
          </li>
          <li className="nav-menu-wrapper">
            <Link className="d-flex align-center" href="#">
              Blog{" "}
              <Image
                src="/down-arrow.png"
                width={12}
                height={12}
                style={{ marginLeft: "8px" }}
                alt="arrow-down"
              />{" "}
            </Link>
            <ul className="drop-menu">
              <li className="nav-link">
                <Link href="#">Blog 1</Link>
              </li>
              <li className="nav-link">
                <Link href="#">Blog 2</Link>
              </li>
            </ul>
          </li>
          <li className="nav-menu-wrapper">
            <Link href="#">Contact</Link>
          </li>
        </ul>
        <Link className="btn header-btn" href="#">
          Get It Started
        </Link>
      </div>
    </header>
  );
}
