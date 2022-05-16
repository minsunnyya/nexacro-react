import React from 'react';
import styled from 'styled-components';
import BtnNav from './BtnNav';
import { Navbar, Button } from 'react-bootstrap';
// import oc from 'open-color';

const Wrapper = styled.div`
    /* 레이아웃 */
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 100%;
    top: 0px;
    z-index: 5;
    /* 색상 */
    background:gray;
    color: white;
    border-bottom: 1px solid ;
    box-shadow: 0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.20);
    /* 폰트 */
    font-size: 2.5rem;
`;


const Navstyle = styled.div`
  
  display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    position: fixed;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 60px;
    width: 100%;
    top: 0px;
    z-index: 500;
    color: white;
    border-bottom: 1px solid #dddddd;
    font-size: 2.5rem;
    background-color: white;

`;

const Navbtn = styled.div`
  font-style: italic;
  color:white;
`;


const Main = () => (
  <Navbar className='navstyle'>
  <BtnNav className='navbtn' id='navbtn'/>
  <Navstyle><img className='logo_img' src="./img/logo.PNG"/>
  <Navbtn><Button id='btn' variant="info">등록</Button>{' '}</Navbtn>
  </Navstyle>
  </Navbar>
 
);

export default Main;