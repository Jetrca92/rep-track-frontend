import { Button, Navbar, Nav } from "react-bootstrap"
import { routes } from "../../constants/routesConstants"
import { FC, useState } from "react"

const NavigationBar: FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu)

  return (
    <>
      <header>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href={routes.HOME} className="mx-3">
            <img 
              src="/images/logo.png" 
              alt="Rep Track" 
              width={50} 
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMobileMenu} />
            <Navbar.Collapse id="basic-navbar-nav" className={showMobileMenu ? 'show mx-3' : ''}>
              <Nav className="mr-auto">
                <Nav.Link href={routes.TRACK} >+ Track</Nav.Link>
                <Nav.Link href="#">Charts</Nav.Link>
                <Nav.Link href="#">Leaderboard</Nav.Link>
              </Nav>
              <Nav className="ml-auto">
                <Nav.Item className="mx-3">
                  <Button variant="primary"><strong>Register</strong></Button>
                </Nav.Item>
                <Nav.Item className="mx-3">
                  <Button variant="light">Signin</Button>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      </header>
    </>
  )
}

export default NavigationBar
