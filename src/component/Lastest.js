import React from 'react'
import { Container, Row, Col } from 'react-bootstrap' 
import styled from "styled-components";

const StyledHeader = styled.header`
  color: white;
  background-color: black;
  font-size: 20px;
  width: 300px;
  text-align: center;
`;

const Lastest = () => {
  return (
    <Container>
    <Row>
      <StyledHeader>Posts</StyledHeader>
    </Row>
  </Container>
  )
}

export default Lastest