
import './App.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./fonts/Inter-Light.ttf";
import Home from './pages/Home';
import Search from './pages/Search';

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  });


  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path = "/" element = {<Home/>} />
            <Route path = "/search/:id" element = {<Search />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
