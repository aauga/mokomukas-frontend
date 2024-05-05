import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CatTypesPage } from "./pages/CatTypes";
import { Navbar } from "./components/common/Navbar";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar userLoggedIn={true} />
      <CatTypesPage />
    </QueryClientProvider>
  );
}

export default App;
