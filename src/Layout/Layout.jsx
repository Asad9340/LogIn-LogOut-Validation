import { Outlet } from "react-router-dom"
import NavigationBar from "../Pages/Shared/NavigationBar/NavigationBar"
import Footer from "../Pages/Shared/Footer/Footer"

function Layout() {
  return (
    <div className=" max-w-5xl mx-auto">
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout