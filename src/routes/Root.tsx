import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Navbar } from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false } },
});

export default function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Outlet />
    </QueryClientProvider>
  );
}
