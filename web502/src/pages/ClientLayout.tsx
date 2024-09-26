import { Link, Outlet } from "react-router-dom";
import HeaderClient from "./layouts/HeaderClient";

function ClientLayout() {
  return (
    <>
      <HeaderClient/>

      <main className="container">
        {/* phần thay đổi nội dung */}
        <Outlet />
      </main>

      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
}
export default ClientLayout;
