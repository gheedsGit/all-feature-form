import React, { forwardRef } from "react";
import TextField from '@mui/material/TextField';

const Input = ({ref, props}) => {
  return (
    <TextField variant="outlined" margin="normal" inputRef={ref} fullWidthl/>
  )
}

export default Input