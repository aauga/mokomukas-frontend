import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CatTypesPage } from "./pages/CatTypes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CatTypesPage />
    </QueryClientProvider>
  );
}

export default App;
