import * as React from 'react';
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import IosShareIcon from '@mui/icons-material/IosShare';
import { useRouter } from 'next/router';
import Header from '../src/components/header';
import NotificationCenter from '../src/components/notification_center';

const PageBg = styled('div')(({ theme }) => ({
  borderTop: `10px solid ${theme.palette.secondary.main}`,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  height: '100%',
  minHeight: '100vh',
}));

const newInvestors = {
  semana: 10,
  mes: 15,
  tudo: 30,
};

export const emEsperaData = [
  {
    name: 'João Silva',
    image: '/profile/joao-silva.png',
  },
  {
    name: 'Paola Antunes',
    image: '/profile/paola-antunes.png',
  },
];

export default function AdvisorHomePage() {
  const [toggleState, setToggleState] = React.useState('semana');

  const router = useRouter();
  const { userName } = router.query;

  return (
    <PageBg>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={9}>
          <Header name={userName} />
          <Container
            disableGutters
            sx={{
              px: 2,
              pb: 6,
            }}
          >
            <Typography variant="h3" component="h1" gutterBottom>
              Bem-vindo(a) {userName}
            </Typography>
            <Grid container spacing={2} sx={{ mt: 3, mb: 5 }}>
              <Grid item xs={12} sm={12} md={6}>
                <Card
                  square
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    justifyContent: 'center',
                    p: 2,
                  }}
                >
                  <Typography
                    variant="h1"
                    component="span"
                    sx={{
                      color: 'info.main',
                    }}
                  >
                    + {newInvestors[toggleState]}
                  </Typography>
                  <Typography variant="h6" component="span">
                    investidores
                  </Typography>
                  <ToggleButtonGroup
                    color="secondary"
                    exclusive
                    onChange={(event, newToggleState) => {
                      if (newToggleState) {
                        setToggleState(newToggleState);
                      }
                    }}
                    value={toggleState}
                    size="small"
                    sx={{
                      mt: 2,

                      '> .MuiToggleButton-root.Mui-selected': {
                        color: 'primary.light',
                      },
                    }}
                  >
                    <ToggleButton value="semana">Semana</ToggleButton>
                    <ToggleButton value="mes">Mês</ToggleButton>
                    <ToggleButton value="tudo">Tudo</ToggleButton>
                  </ToggleButtonGroup>
                </Card>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Card
                  square
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    justifyContent: 'center',
                    p: 2,
                  }}
                >
                  <Typography
                    variant="h1"
                    component="span"
                    sx={{
                      color: 'warning.main',
                    }}
                  >
                    2
                  </Typography>
                  <Typography variant="h6" component="span">
                    em espera
                  </Typography>
                </Card>
              </Grid>
            </Grid>
            <Typography variant="h3" component="h2">
              Em espera
            </Typography>
            <Typography variant="h5" paragraph>
              Clientes em processo de convergência para a XP
            </Typography>
            <Grid container spacing={2} sx={{ mt: 3, mb: 5 }}>
              {emEsperaData.map(({ name, image }) => (
                <Grid key={name} item xs={12} sm={6} md={4}>
                  <Card square>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height={180}
                        image={image}
                        alt=""
                      />
                      <CardContent>
                        <Typography variant="h5">{name}</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Typography variant="h3" component="h2">
              Minhas Conexões
            </Typography>
            <Typography variant="h5" paragraph>
              Investidores conquistados por meio do XP Conecta
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              endIcon={<IosShareIcon />}
              href="https://hub.xpi.com.br"
            >
              Abra no XP Hub
            </Button>
          </Container>
        </Grid>
        <Grid item xs={12} sm={12} md={3} sx={{ position: 'relative' }}>
          <NotificationCenter />
        </Grid>
      </Grid>
    </PageBg>
  );
}
