import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Header from './components/header/header';
import Details from "./pages/details";

function App() {
  return (
    <>
      <Router>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/details/:category/:label" element={<Details />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
