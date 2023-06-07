import { Toaster } from "react-hot-toast";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Main layout</h2>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/users/add">Add User</Link>
      </nav>

      <main>
        <Outlet></Outlet>
      </main>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Home;
