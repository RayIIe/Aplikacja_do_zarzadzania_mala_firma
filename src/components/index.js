import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavBarComponent';
import Footer from "./FooterComponent";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to='/Home' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/About' activeStyle>
                        About
                    </NavLink>
                    <NavLink to='/Schedule' activeStyle>
                        Schedule
                    </NavLink>
                    <NavLink to='/Problems' activeStyle>
                        Problems
                    </NavLink>
                    <NavLink to='/Contact' activeStyle>
                        Contact
                    </NavLink>
                    {/*<NavLink to='/sign-up' activeStyle>
                        Sign Up
                    </NavLink>*/}
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export {Navbar, Footer};