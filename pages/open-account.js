import * as React from 'react';
import Head from 'next/head';
import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import IosShareIcon from '@mui/icons-material/IosShare';

const Header = styled('header')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderBottom: `${theme.spacing(3)} solid ${theme.palette.secondary.main}`,
  padding: `100px 0`,

  img: {
    maxWidth: '120px',
    paddingBottom: theme.spacing(2),
  },
}));


export default function OpenAccountPage() {
  return (
    <div>
      <Head>
        <title>Abra sua conta XP - XP Conecta</title>
      </Head>
      <Header>
        <Container disableGutters sx={{ m: 0, pl: 4, pr: 4 }}>
          <Typography component="h1" variant="h4" sx={{ color: '#fff'}}>
            Abra sua conta XP
          </Typography>
          <Typography component="h2" variant="h5" sx={{ color: '#fff'}}>
            Obrigado por considerar a XP para gerir seus investimentos.
          </Typography>
        </Container>
      </Header>
      <Box
        sx={{
          p: 4,
        }}
      >
        <Button
          color="secondary"
          disableElevation
          endIcon={<IosShareIcon />}
          href="https://cadastro.xpi.com.br/cadastro"
          size="large"
          variant="contained"
        >
          Abra sua conta agora
        </Button>
      </Box>
    </div>
  )
}