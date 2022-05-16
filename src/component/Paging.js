import React from 'react'
// import styled from 'styled-component'
import { Pagination } from 'react-bootstrap';

const Paging = () => {
  return (
    <Pagination>
    <Pagination.First />
    <Pagination.Prev />
    <Pagination.Item>{1}</Pagination.Item>
    <Pagination.Item>{2}</Pagination.Item>
    <Pagination.Item>{3}</Pagination.Item>
    <Pagination.Item>{4}</Pagination.Item>
    <Pagination.Item>{5}</Pagination.Item>
    {/* <Pagination.Ellipsis /> */}
  
   
    {/* <Pagination.Item>{11}</Pagination.Item>
    <Pagination.Item active>{12}</Pagination.Item>
    <Pagination.Item>{13}</Pagination.Item>
    <Pagination.Item disabled>{14}</Pagination.Item> */}
  
    {/* <Pagination.Ellipsis />
    <Pagination.Item>{20}</Pagination.Item> */}
    <Pagination.Next />
    <Pagination.Last />
  </Pagination>
  )
}

export default Paging