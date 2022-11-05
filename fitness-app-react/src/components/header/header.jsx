import { Navbar, Container, Offcanvas, Form, Nav, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../../redux/authSlice";
import {auth, signOut} from "../../firebase/firebase";

const Header = () => {

  const user = useSelector(state => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAuth = () => {
    if(user && user !== ""){
      signOut(auth)
      .then(res => {
        console.log(res);
        dispatch(removeUser());
      })
      .catch(error => console.log(error))
    }
    else {
      navigate("/login");
    }
  }

    return(
        <Navbar bg="light" expand="md" className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Fitness Assistent App</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`} style={{color: 'black'}}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="/" style={{color: 'black'}} className="nav-link">Home</Link>
                  <button className="custom-link-button nav-link" onClick={handleAuth}>{(user && user !== "") ? "Logout" : "Login"}</button>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-primary">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    )
}

export default Header;

