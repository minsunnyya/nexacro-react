import React from 'react'
import styled from 'styled-components';
import { Card, Button, Container,Row, Col, Badge} from 'react-bootstrap'
import { FaEye, FaRegCommentDots, FaRegHeart,FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

// const Wrapper = styled.div`
    
//     /* 색상 */
  
//     color: gray;
//     border-bottom: 1px solid ;
    
//     /* 폰트 */
//     font-size: 15px;
// `;

// const Box = styled.div`
    
//     position: relative;
//     display: flex;
//     flex-direction: column;
//     min-width: 0;
//     word-wrap: break-word;
//     background-color: #fff;
//     background-clip: border-box;
//     border: 0px;
//     border-radius: 0.25rem;
// `;

// const Font = styled.div`
// color



// `



const Contents = () => {
  return (
    
    <Container id="container_margin" className=''>
  {/* <Row>
    <Col className='post'><b>Lastest Posts</b></Col>
  </Row> */}

    <Card className='card_div' id="card_div">
    
    <Card.Body className='cardbody' id='cardbody'>
    
  <Card.Title id='cardtitle'>Special title treatment</Card.Title>
     
      <Card.Text id='cardtext'>
      <Link id="link" to="/Detail">With supporting text below as a natural lead-in to additional content.</Link>
      </Card.Text>
      
      <Badge pill bg="info">
    #Info
  </Badge>{' '}
  <Badge pill bg="info">
    #질문있어요
  </Badge>{' '}
    </Card.Body>
    
    <br />
    <div>
    <footer className="footer">
       
    <Row className='text' id='text'>
    <Col><FaUserAlt className='man'/><b id='name'>라맨</b></Col>
    <Col id='year'>  ·&nbsp; 2022.04.28 &nbsp;| </Col>
    <Col id='like'><FaEye id='FaEye'/>12 &nbsp;<FaRegCommentDots id='FaRegCommentDots'/>2 &nbsp;<FaRegHeart id='FaRegHeart'/>0</Col>
  </Row>
      </footer>
      </div>
      </Card>
  
  </Container>
 
  )
}

export default Contents