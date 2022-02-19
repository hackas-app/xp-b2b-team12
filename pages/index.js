import * as React from 'react';
import {
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  TextField,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const LoginContainer = styled(Container)(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  minHeight: '100vh',
  position: 'relative',

  '::before': {
    backgroundColor: theme.palette.primary.main,
    borderBottom: `25px solid ${theme.palette.secondary.main}`,
    content: '" "',
    height: '65%',
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0,
  },
}));

export default function Index() {
  return (
    <LoginContainer maxWidth="xs">
      <Box sx={{ zIndex: 1, display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Typography
          variant="h4"
          component="h1"
          textAlign="center"
          sx={{
            color: 'common.white',
            paddingBottom: '48px',
          }}  
        >
          Acesse o XP Conecta
        </Typography>
        <Card
          variant="elevation"
          elevation={1}
          square
          sx={{
            padding: '18px 36px 36px',
          }}
        >
          <TextField
            fullWidth
            id="login"
            label="Login"
            margin="normal"
            required
            variant="standard"
          /> 
          <TextField
            fullWidth
            id="senha"
            label="Senha"
            margin="normal"
            required
            variant="standard"
          />
          <TextField
            fullWidth
            id="xp-token"
            label="XP Token"
            margin="normal"
            required
            variant="standard"
          />
          <FormControl fullWidth margin="normal">
            <FormControlLabel control={<Checkbox />} label="Lembrar meus dados" />
          </FormControl>
          <Button
            variant="contained"
            disableElevation
            color="secondary"
            sx={{ paddingLeft: '36px', paddingRight: '36px' }}
            size="large"
          >
            Entrar
          </Button>
        </Card>
      </Box>
    </LoginContainer>
  );
}
