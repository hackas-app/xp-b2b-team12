import * as React from 'react';
import Head from 'next/head';
import {
  Box,
  Container,
  Grid,
  Card,
  CardMedia,
  Typography,
  Link
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
