import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "./VORTEX_RP_6.png"
import dlogo from "./discord-logo.png"
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
    // const navigate = useNavigate()
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Router>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="https://www.patreon.com/VORTEX_Rp" className={activeLink === 'donate' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('donate')}>Donate</Nav.Link>
                            <Nav.Link href="/applications" className={activeLink === 'applications' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('applications')}>Applications</Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="https://discord.gg/vortexroleplay"><img src={dlogo} alt="" /></a>
                                {/* <a href="#"><img src={navIcon2} alt="" /></a>
                                <a href="#"><img src={navIcon3} alt="" /></a>  */}
                            </div>
                            {/* <Link>
                                <button onClick="fivem://connect/194.156.89.3:30100" className="vvd"><span>Connect</span></button>
                            </Link> */}

                            <Link to="fivem://connect/194.156.89.3:30100">
                                <button>Connect</button>
                            </Link>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    )
}