import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import { logo} from "../utlis/constants.js"
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <Stack direction="row" p={2}
      sx={
      {
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }
    }>

      <Link
        to="/"
        style={{
          display: "flex",
          alignItems:"ceneter"
        }}
      >
        <img src={ logo} alt="logo" height={45} />
      </Link>

      <SearchBar />
      
    </Stack>
  )
}

export default Navbar