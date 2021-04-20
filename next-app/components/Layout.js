import Navbar from "./Navbar";
import "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <mai>{children}</mai>
    </div>
  );
};

export default Layout;
