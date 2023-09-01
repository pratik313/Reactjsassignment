import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavScrollExample({SetSearchText}) {
  return (
    <Navbar expand="lg" className="bg-info ">
      <Container fluid>
        <Navbar.Brand className="text-white">Dream Cars</Navbar.Brand>
        <i className="fa-solid fa-car bg-info"></i>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-5 my-lg-0 text-white px-5 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="text-black">Home</Nav.Link>
            <Nav.Link className="text-black">About</Nav.Link>
            <Nav.Link className="text-black">Contact us</Nav.Link>
            <NavDropdown
              className="text-white"
              title="List"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">Super cars</NavDropdown.Item>
              <NavDropdown.Item href="#action4">vintage cars</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">wish list <i className="fa-solid fa-cart-shopping"></i></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex text-white">
            {/* <div className="d-flex  me-4 align py-2"> */}
              <i className=" alert-dark fa-solid fa-user">
            <a href="#">LOG IN</a>
            </i>
            {/* </div> */}
            <Form.Control
              type="search"
              placeholder="Search your dream car "
              className="me-2 "
              aria-label="Search"
              onChange={(e)=> SetSearchText(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <i className="fa-solid fa-cart-plus px-4 "></i>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
