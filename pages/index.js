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
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from '../src/Link';

const LoginBackground = styled('div')(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  minHeight: '100vh',
  position: 'relative',
  width: '100%',

  '::before': {
    backgroundColor: theme.palette.primary.main,
    borderBottom: `25px solid ${theme.palette.secondary.main}`,
    content: '" "',
    height: '65%',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
}));

const LoginContainer = styled(Container)({
  alignItems: 'center',
  display: 'flex',
});

const VideoWrapper = styled('div')({
  height: 'calc(65% - 25px)',
  left: 0,
  overflow: 'hidden',
  position: 'absolute',
  top: 0,
  width: '100%',
  opacity: 0.3,

  video: {
    position: 'absolute',
    left: '-600px',
    top: '-220px',
    width: 'calc(100% + 600px)',
  },
});

export default function Index() {
  const theme = useTheme();
  const [userName, setUserName] = React.useState();
  const [password, setPassword] = React.useState();
  const [xpCode, setXpCode] = React.useState();

  return (
    <LoginBackground>
      <VideoWrapper>
        <video aria-hidden autoPlay muted loop preload="auto">
          <source
            src="/videos/pexels-tima-miroshnichenko-7579959_1.mp4"
            type="video/mp4"
          />
        </video>
      </VideoWrapper>
      <LoginContainer maxWidth="xs">
        <Box
          sx={{
            pt: 2,
            pb: 2,
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <img src="/logos/xp-conecta.png" alt="" />
          <Typography
            variant="h4"
            component="h1"
            textAlign="center"
            sx={{
              color: theme.palette.common.white,
              paddingBottom: '48px',
            }}
          >
            Acesse sua conta
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
              id="user name"
              label="Nome de usuário"
              margin="dense"
              required
              variant="standard"
              onChange={(event) => setUserName(event.target.value)}
            />
            <TextField
              fullWidth
              id="senha"
              label="Senha"
              margin="dense"
              required
              variant="standard"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <TextField
              fullWidth
              id="xp-token"
              label="XP Token"
              margin="dense"
              required
              variant="standard"
              onChange={(event) => setXpCode(event.target.value)}
            />
            <FormControl fullWidth sx={{ mt: 1 }}>
              <FormControlLabel
                control={<Checkbox />}
                label="Lembrar meus dados"
              />
            </FormControl>
            <Link
              style={{ textDecoration: 'none' }}
              href={{
                pathname: '/advisor-home/',
                query: {
                  userName,
                },
              }}
            >
              <Button
                color="secondary"
                disableElevation
                fullWidth
                size="large"
                sx={{ mb: 2, mt: 2 }}
                variant="contained"
                disabled={!userName || !password || !xpCode}
              >
                Entrar
              </Button>
            </Link>
            <Link
              variant="body2"
              href="/forgot-password"
              sx={{ textDecorationColor: theme.palette.secondary.main }}
            >
              Esqueceu a senha?
            </Link>
          </Card>
        </Box>
      </LoginContainer>
    </LoginBackground>
  );
}
