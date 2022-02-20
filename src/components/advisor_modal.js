import * as React from 'react';
import {
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  TextField,
  Typography,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function AdvisorModal({ open, onClose }) {
  const [contactSuccess, setContactSuccess] = React.useState(false);

  const isOpen = Boolean(open);

  const handleClose = () => {
    console.log('oi');
  
    setContactSuccess(false);

    if (onClose) {
      onClose();
    }
  }

  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      onClose={handleClose}
      open={isOpen}
      PaperProps={{
        square: true,
        elevation: 2,
      }}
    >
      {isOpen && !contactSuccess && (
        <>
          <DialogTitle sx={{ px: 4, pt: 6, pb: 0 }}>
            Contate {open?.name}
          </DialogTitle>
          <DialogContent sx={{ px: 4, py: 6 }}>
            <TextField
              fullWidth
              id="full-name"
              label="Nome completo"
              margin="dense"
              required
              variant="standard"
            /> 
            <TextField
              fullWidth
              id="email"
              label="E-mail"
              margin="dense"
              required
              variant="standard"
            />
            <TextField
              fullWidth
              id="phone"
              label="Telefone celular"
              margin="dense"
              required
              variant="standard"
            />
            <FormControl fullWidth sx={{ mt: 2 }}>
              <FormControlLabel control={<Checkbox />} label="Eu concordo em compartilhar os dados acima com um assessor credenciado XP." />
            </FormControl>
            <FormControl fullWidth>
              <FormControlLabel control={<Checkbox />} label="Eu concordo ser contatado(a) via WhatsApp." />
            </FormControl>
            <Button
              color="secondary"
              disableElevation
              fullWidth
              size="large"
              sx={{ mt: 2 }}
              variant="contained"
              onClick={() => setContactSuccess(true)}
            >
              Enviar
            </Button>
          </DialogContent>
        </>
      )}
      {isOpen && contactSuccess && (
        <DialogContent sx={{ px: 4, py: 6, textAlign: 'center' }}>
          <CheckCircleOutlineIcon color="success" sx={{ width: '120px', height: '120px', mb: 2 }} />
          <Typography variant="h4" component="p" gutterBottom>
            Enviado!
          </Typography>
          <Typography variant="h5" component="p">
            {open?.name} entrará em contato com você em breve!
          </Typography>
          <Button
            color="secondary"
            disableElevation
            fullWidth
            size="large"
            sx={{ mt: 3 }}
            variant="contained"
            onClick={handleClose}
          >
            OK
          </Button>
        </DialogContent>
      )}
    </Dialog>
  );
}