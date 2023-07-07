import React from 'react';
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';
import './header.css';
import HomeIcon from '@mui/icons-material/Home';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import profile from '../Images/profile.png';

export default function Header() {
  return (
    <>
      <Navbar
        className="shadow-sm py-3 dashboard__navbar"
        expand="lg"
        style={{ background: '#ECF7FF' }}
      >
        <Container fluid>
          <Navbar.Brand to="">
            <img src="/assets/nesto-logo.png" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="" active>
                <HomeIcon className="navIcon" />
                <span className="mx-2">Home</span>
              </Nav.Link>

              <Nav.Link href="">
                <Diversity2Icon className="navIcon" />
                <span className="mx-2">Clients</span>
              </Nav.Link>

              <Nav.Link href="">
                <CurrencyRupeeRoundedIcon className="navIcon" />
                <span className="mx-2">Brokerage</span>
              </Nav.Link>
            </Nav>
            <Nav.Link href="" className="navSideIcon">
              <VisibilityOffRoundedIcon style={{ color: '#278FD9' }} />
            </Nav.Link>
            <Nav.Link href="" className="navSideIcon">
              <AccountBalanceWalletRoundedIcon style={{ color: '#278FD9' }} />
            </Nav.Link>
            <Nav.Link href="" className="navSideIcon">
              <CircleNotificationsRoundedIcon style={{ color: '#278FD9' }} />
            </Nav.Link>

            <Nav.Link to="" className="p-0 me-2 profile-img ">
              <img
                className="h-100 profile-img navSideIcon"
                src={profile}
                rounded
                roundedCircle
                alt="profile img"
              />
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
