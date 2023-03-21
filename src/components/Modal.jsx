import React, { useState } from 'react'
import { useState } from 'react'
import {Dialog,DialogTitle,IconButton} from '@mui/material'
import { Close } from '@mui/icons-material'


function Modal() {

const {modal,setModal} = useState()
const handleClose=() =>{
    setModal({...modal,isOpen:false})
}


  return (
    <Dialog open ={modal.isOpen} onClose={handleClose}>
        <DialogTitle>
            {modal.title}
            <IconButton
             aria-label='Close'
             onClick={handleClose}
             sx={{
                position: 'absolute',
                top:8,
                right:8,
                color:(theme) => theme.palette.grey[500]
             } }
            >
             <Close/>    
            </IconButton>
        </DialogTitle>

    </Dialog>
  )
}

export default Modal