import Link from "next/link";
import "../styles/Navbar.module.css";

const Layout = (props) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/tic-tac-toe">Tic Tac Toe</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Layout;
