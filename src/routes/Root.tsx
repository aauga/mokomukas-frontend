import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Navbar } from "../components/common/Navbar";
import { Outlet } from "react-router-dom";

const queryClient = new QueryClient();

export default function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar userLoggedIn={true} />
      <Outlet />
    </QueryClientProvider>
  );
}
