import { useEffect, useState } from "react";
import {
  useLocation,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Kanban from "./pages/Kanban";
import Calendar from "./pages/Calendar";
import Employees from "./pages/Employees";
import Login from "./pages/Login";
import Discounts from "./pages/Discounts";
import ErrPage from "./pages/ErrPage";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const locationPath = useLocation();
  const [location, setLocation] = useState<string>("");

  useEffect(() => {
    setLocation(locationPath.pathname);
  }, [locationPath]);

  return (
    <div className="flex h-screen">
      <div
        className={`w-[25%] ${
          location === "/login" || location === "*" ? "hidden" : "block"
        } fixed left-0 top-0 bottom-0 overflow-y-auto`}
      >
        <Sidebar />
      </div>
      <div
        className={`fixed right-0 top-0 bottom-0 overflow-y-auto ${
          location === "/login" || location === "*" ? "w-full" : "w-[75%]"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/login" element={<Login />} />
          <Route path="/discounts" element={<Discounts />} />
          <Route path="*" element={<ErrPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
