import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./layouts/Home";
import Header from "./components/header";
function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-black min-h-screen w-full">
        <Header />
        <Home />
      </div>
    </QueryClientProvider>
  )
}

export default App
