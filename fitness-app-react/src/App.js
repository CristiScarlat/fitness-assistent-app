import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Header from './components/header/header';

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
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
