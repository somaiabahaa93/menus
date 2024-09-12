import React, { useState } from 'react'
import { Navbar ,Container,Row,Form,Button,Nav} from 'react-bootstrap'
const NavBar = ({search}) => {
    const [searchValue,setSearchValue]=useState('')

    const onSearch=(e)=>{
e.preventDefault()
if(searchValue!=='')
{
    search(searchValue)
    setSearchValue('')

}
    }
    const getValue=(e)=>{
setSearchValue(e.target.value)  
  }
  return (
    <Navbar bg="dark" expand="lg" variant='dark'>
    <Container >
      <Navbar.Brand href="#"><div style={{color:"#b45b35"}}> Wigo Restaurant</div></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="text"
            placeholder="Search"
            className="mx-2"
            aria-label="Search"
            onChange={getValue}
            value={searchValue}
          />
          <button onClick={onSearch} className='btn btn-warning'>search</button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar
