import React from 'react'
import { Button,Offcanvas, Container, Row, Col  } from 'react-bootstrap'
import { useState } from 'react';
import { FaBars } from "react-icons/fa";
import styled from 'styled-components';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { IoIosClose } from "react-icons/io";




     const Text = styled.div`
    
    left: 0px;
    top: 196px;
    width: 480px;
    height: 60px;
    direction: ltr;
    background: #ffffff;
    color: #000000;
    cursor: pointer;
    font: bold 20px "맑은 고딕","Arial";
    border: 0px none;
  
 `;

const Logo_header = styled.div`
    
    border-bottom: 1px solid #b1b1b1;
    padding: 0px;

`;

const Header = styled.div`
    
    padding: 0px;

`;

// const BorderTop= styled.div `

// border-top:1px solid #e3dede;

// `;




const BtnNav = () => {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <>
   
        <Button className='navbtn' id='navbtn' variant="outline-secondary" onClick={handleShow}>
          <FaBars />
        </Button>
  
        <Offcanvas show={show} onHide={handleClose} className='show_div' id='show_div'>
        <Logo_header><Header><Offcanvas.Header className='header_nav' id='header_nav'>
        <Button className='closebtn' id='closebtn' variant="outline-secondary" onClick={handleClose}>
          <IoIosClose />
        </Button>
            <Offcanvas.Title className='logo_center'>
                {/* <img src='logo.PNG'></img> */}
                <img className='logo_img' src="./img/logo.PNG"/>
                    
            </Offcanvas.Title>
          </Offcanvas.Header></Header></Logo_header>
          <Offcanvas.Body>
          <Container fluid>
          <Text>
  <Row>
    
    <Col>Home</Col>
  </Row>
  <br />
  <Row>
    <Col>Insight</Col>
  </Row>
  <br />
  <Row>
    <Col>TechTip</Col>
  </Row>
  <br />
  <Row>
    <Col>Learn</Col>
  </Row>
  <br />
  <Row>
    <Col>Community</Col>
   
  </Row>
  <hr id='darkHr' />
 
  <Row id='dark'>
    <Col>다크 모드로 보기<BootstrapSwitchButton id='btntoggle' checked={true} onstyle="primary" /></Col>
   
  </Row>
 
  </Text>
</Container>
          </Offcanvas.Body>
        </Offcanvas>
       
      </>
  )
}

export default BtnNav;