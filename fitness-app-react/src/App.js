import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Header from './components/header/header';
import Details from "./pages/details";
import Login from "./pages/login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/authSlice";
import Exercises from "./pages/exercises";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('authToken');
    if(user && user !== "" && token && token !== ""){
      dispatch(addUser({
        user: user,
        accessToken: token,
      }));
    }
  }, [])

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
            <Route path="/exercises/:categoryKey/:categoryValue" element={<Exercises />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
