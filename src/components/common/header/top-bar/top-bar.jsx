import { Button, Col, Container, InputGroup, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import "./top-bar.scss"
import { Component, useState } from "react";

const TopBar = () => {

  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    setSearchText(e.target.value)
  }

  const handleSearch = () => {
    // earchText 
  }

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="tbContainer">

          <Link to="/" title="Homepage">
            <img src="/cookery-tech-logo.png" alt="" width={150} />
          </Link>

          <InputGroup className="inputGroup">
            <input type="search"
              name=""
              id=""
              value={searchText}
              onChange={handleInputChange} />
            <button className="searchButton" disabled={!searchText} onClick={handleSearch} >
              <BiSearchAlt2
                className="searchIcon"
                size={20}

              />
            </button>
          </InputGroup>

          <span className="topBarIcons">
            <AiOutlineHeart size={30} />
            <HiOutlineShoppingBag size={30} />
          </span>

        </Container>
      </Navbar>
    </>
  )


};

export default TopBar;