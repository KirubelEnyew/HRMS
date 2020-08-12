import React,{Component} from 'react';
import {Navbar, Nav, NavLink} from 'react-bootstrap';
class Navigation extends Component{
    render(){
        return(
            <div>
                <Navbar bg='light' expand='lg'> {/*Expand determines when to expand the components of the Navbar that are included in the Navbar.Collapse body */}
                {/* Navbar logo / Brand */}
                <Navbar.Brand>HRMS</Navbar.Brand>
                
                <Navbar.Toggle /> {/*To enable the expand and collapsing button*/}
                {/*i see*/}
                <Navbar.Collapse>

                    <Nav className='mx-auto'>
                        <NavLink >About</NavLink>
                        <NavLink >Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
            );
    }
}
export default Navigation;