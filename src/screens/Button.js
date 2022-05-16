import styled from '@emotion/styled';
import React from 'react'
import { InputGroup,FormControl  } from 'react-bootstrap'
import { FaSistrix } from "react-icons/fa";


const BtnStyle = styled.div`
    
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


const Button = () => {
  return (
    <>
  
 <div id="inputgrp">
  
  <InputGroup size="lg">
    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
    <InputGroup.Text id="inputGroup-sizing-lg"><FaSistrix /></InputGroup.Text>
  </InputGroup>
  <hr id='hr'/>
  </div>
</>
  )
}

export default Button