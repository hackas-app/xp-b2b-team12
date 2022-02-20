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
} from '@mui/material';

export default function AdvisorModal({ open, onClose }) {
  console.log(open);
  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      onClose={onClose}
      open={Boolean(open)}
      PaperProps={{
        square: true,
        elevation: 2,
      }}
    >
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
        <Button color="secondary" fullWidth disableElevation size="large" variant="contained" sx={{ mt: 2 }}>
          Enviar
        </Button>
      </DialogContent>
    </Dialog>
  );
}