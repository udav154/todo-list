import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import stylejs from './styles'


const AddModal = ({ handleCloseAdd, openAdd }) => {


  return (
    <div>
      <Modal
        open={openAdd}
        onClose={handleCloseAdd}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={stylejs.modal_box}>
          <Typography sx={stylejs.title} id="modal-modal-title" variant="h6" component="h2">
            Добавить Элемент
          </Typography>
          <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Название"
              name="text"
              autoFocus
            />
             <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={stylejs.button}
            >
                Добавить
            </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default AddModal