import { Button, Container, Form, InputGroup, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import "./top-bar.scss"
import { useState } from "react";
import TopBarIcons from "./top-bar-icons/top-bar-icons";

const TopBar = () => {

  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    setSearchText(e.target.value)
  }

  const handleSearch = () => {
    // searchText 
  }

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="tbContainer">

          <Link to="/" title="Homepage">
            <img src="/cookery-tech-logo.png" alt="" width={150} />
          </Link>


          <InputGroup >
            <Form.Control value={searchText}
              onChange={handleInputChange}
            >
            </Form.Control>

            <Button disabled={!searchText} onClick={handleSearch}><BiSearchAlt2 size={24} /></Button>

          </InputGroup>

          <TopBarIcons />


        </Container>
      </Navbar>
    </>
  )


};

export default TopBar;