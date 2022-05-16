import React from 'react'
import { Pagination } from 'react-bootstrap'

const paging = () => {
  return (
    <Pagination id='paging'>
    <Pagination.First />
    <Pagination.Prev />
    <Pagination.Item>{1}</Pagination.Item>
    <Pagination.Item>{2}</Pagination.Item>
    <Pagination.Item>{3}</Pagination.Item>
    <Pagination.Item>{4}</Pagination.Item>
    <Pagination.Item>{5}</Pagination.Item>
    <Pagination.Next />
    <Pagination.Last />
  </Pagination>
  )
}

export default paging