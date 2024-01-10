import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import style from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div
      className={style.layout}
      style={{ gridTemplateColumns: "240px 1fr" }}
    >
      <Header ></Header>
      <Sidebar ></Sidebar>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
