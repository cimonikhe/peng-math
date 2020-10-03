import React from 'react';
import {Link} from 'react-router-dom';
import { Navbar,Nav } from 'react-bootstrap';


export default function AppNavbar(props){
    const navbarData = [
        {
            title:'Home',
            link:'/',
            display:true
        },
        {
            title:'Questions',
            link:'/questions',
            display:true
        },
        {
            title:'No link',
            link:'/somewhere',
            display:true
        }
    ];

    function createLinks(){
        let links = [];

        for(let i = 0;i < navbarData.length;i++){
            let data = navbarData[i];
            let link = (
                <Nav.Link key={data.title} as={Link} to={data.link}>
                    {data.title}
                </Nav.Link>
            );
            links.push(link);
        }

        return links;
    }

    const links = createLinks();

    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {links}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}