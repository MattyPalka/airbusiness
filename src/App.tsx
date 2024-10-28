import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "./components/navbar/navbar";
import { Outlet } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Root />
    </QueryClientProvider>
  );
}

const Root = () => {
  return (
    <div className="p-4">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
