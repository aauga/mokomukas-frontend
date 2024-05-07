import { Navbar } from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useAuthenticatedUser } from "../api/sessions/api";

export default function Root() {
  const { data: user } = useAuthenticatedUser();

  return (
    <UserContext.Provider value={{ user }}>
      <Navbar />
      <Outlet />
    </UserContext.Provider>
  );
}
