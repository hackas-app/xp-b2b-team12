import * as React from 'react';
import Head from 'next/head';
import {
  Box,
  Container,
  Grid,
  Card,
  CardMedia,
  Typography,
  Link,
  Image
} from '@mui/material';

import { styled } from '@mui/material/styles';

const Header = styled('header')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderBottom: `${theme.spacing(3)} solid ${theme.palette.secondary.main}`,
  padding: `100px 0`,
}));

export default function XPConectaPage() {
  return (
    <div>
      <Head>
        <title>XP Investimentos - Comece a investir</title>
      </Head>
      <Header>
        <Container disableGutters sx={{ pl: 4, pr: 4 }}>
          <Typography component="h1" variant="h1" sx={{ color: '#fff'}}>Comece a investir</Typography>
        </Container>
      </Header>
      <Container disableGutters sx={{ pl: 4, pr: 4, pt: '50px', pb: '100px' }}>
        <Grid container spacing={2} columns={18} sx={{ pb: '100px' }}>
          <Grid item xs={6}>
            <Card elevation="none" sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              alignItems: 'center',
              p: 1,
            }}>
              <CardMedia
                component="img"
                image="assets/icon-welcome.png"
                alt={"Welcome"}
                sx={{ height: 160, width: 160, mb: 5 }}
              />
              <Box>
                <Typography  sx={{ mb: 3, fontWeight: 'bold' }} component="h1" variant="h5">Pioneiros em assesso</Typography>
                <Typography component="p" variant="5">
                  Com a Assessoria XP, ajudamos as pessoas nas decisões relacionadas aos seus investimentos, sempre de acordo com seus objetivos e perfil.
                </Typography>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card elevation="none" sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              alignItems: 'center',
              p: 1,
            }}>
              <CardMedia
                component="img"
                image="assets/icon-advice.png"
                alt={"Advice"}
                sx={{ height: 160, width: 160, mb: 5 }}
              />
              <Box>
                <Typography sx={{ mb: 3, fontWeight: 'bold' }} component="h1" variant="h5">Desafiamos padrões</Typography>
                <Typography component="p" variant="5">
                  Nosso time de tecnologia antecipa tendências do mercado, para tornar a experiência de investir mais simples e acessível para todas as pessoas.
                </Typography>
              </Box>
            </Card>            
          </Grid>

          <Grid item xs={6}>
            <Card elevation="none" sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              alignItems: 'center',
              p: 1,
            }}>
              <CardMedia
                component="img"
                image="assets/icon-centralized.png"
                alt={"Centralized"}
                sx={{ height: 160, width: 160, mb: 5 }}
              />
              <Box>
                <Typography sx={{ mb: 3, fontWeight: 'bold' }} component="h1" variant="h5">Tudo em um lugar</Typography>
                <Typography component="p" variant="5">
                  Serviços financeiros a favor dos seus investimentos. Tudo em um só lugar, para quem investe não depender mais dos bancos convencionais.
                </Typography>
              </Box>
            </Card>            
          </Grid>
        </Grid>
        
        
        <Grid container spacing={2} columns={16}>
          <Grid item xs={6}>
            <Link
              style={{ textDecoration: 'none' }}
              href="/xp-conecta"
            >
          <Card
            elevation={1}
            square
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '350px',
              width: '350px',
              p: 2,
            }}
            variant="elevation"
          >
            <CardMedia
              component="img"
              image="/logos/xp-conecta-dark.svg"
              alt={"XP Conecta Logo"}
              sx={{ marginY: 5 }}
            />
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              marginY: 5,
            }}>
              <Typography align="center" component="p" variant="18">Encontre um assessor credenciado XP que combina com os seus investimentos</Typography>
            </Box>
          </Card>
          </Link>
          </Grid>


          <Grid item xs={6}>
          <Card
            elevation={1}
            square
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '350px',
              width: '350px',
              p: 2,
            }}
            variant="elevation"
          >
            <CardMedia
              component="img"
              image="/logos/open-finance-xp.svg"
              alt={"XP Conecta Logo"}
              sx={{ mb: 5 }}
            />
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              marginY: 5,
            }}>
              <Typography align="center" component="p" variant="18">O  XP Conecta faz parte do sistema de Open Finance XP</Typography>
            </Box>
          </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
