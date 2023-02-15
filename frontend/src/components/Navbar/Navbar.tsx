import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.css";

function Navbhar() {
  const navigate = useNavigate();
  let User = localStorage.getItem("name");

  const SignOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container style={{ marginLeft: "30%" }}>
        {/* <Navbar.Brand href="#home" ><LibraryMusicRoundedIcon/>  RhythmCast</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home" style={{ paddingRight: "30px" }}>
              <h5>
                <b>Home</b>
              </h5>
            </Nav.Link>
            <Nav.Link href="/playlist" style={{ paddingRight: "30px" }}>
              <h5>
                <b>Playlist</b>
              </h5>
            </Nav.Link>
            <Nav.Link href="/favourites" style={{ paddingRight: "30px" }}>
              <h5>
                <b>Favourites</b>
              </h5>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
              <NavDropdown
                title={<AccountCircle />}
                id="collasible-nav-dropdown"
                style={{ paddingRight: "100px" }}
              >
                <NavDropdown.Item href="#action/3.1">
                  Hello {User}
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Premium</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Setting</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/" onClick={() => SignOut()}>
                  Sign Out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbhar;
