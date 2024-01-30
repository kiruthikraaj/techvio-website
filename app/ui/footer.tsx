import clsx from "clsx";
import { Catamaran } from "next/font/google";

const catamaran = Catamaran({ subsets: ["latin"] });

export default function Footer() {
  return (
    <div className="footer-section">
      <div className="container d-flex align-center">
        <p> © 2024 Techvio - All Rights Reserved.</p>
        <div className={clsx("wrapper", catamaran.className)}>
          <a>Terms & Conditions</a>|<a>Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}
