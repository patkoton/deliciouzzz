import React from 'react'
import styled from 'styled-components'
import { TbError404 } from 'react-icons/tb'

const NotFound = () => {
  return (
    <Not>
      <TError></TError>
      <h1>Page not found</h1>
    </Not>
  )
}

const Not = styled.div`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-align: center;
`;

const TError = styled(TbError404)`
  font-size: 100px;
`;
export default NotFound
