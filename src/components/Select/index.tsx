import React from 'react'
import { Select, MenuItem } from '@mui/material'

type SelectProps = {
  value: string
  avatar?: string
}

const StyledSelect: React.FC<SelectProps> = ({ value, avatar }) => {
  return (
    <Select
      value={value}
      size="small"
      variant="filled"
      sx={{
        borderRadius: '3.4rem'
      }}
    >
      <MenuItem value="Hi, Slavi">Hi</MenuItem>
      <MenuItem value="CUDOS Mainnet">
        {import.meta.env.VITE_APP_CHAIN_NAME}
      </MenuItem>
    </Select>
  )
}

export default StyledSelect
