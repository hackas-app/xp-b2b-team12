import * as React from 'react';
import Head from 'next/head';
import {
  Badge,
  Box,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Stack,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import AdvisorCard from '../src/components/advisor_card';
import AdvisorModal from '../src/components/advisor_modal';

import financialAdvisorData from '../src/utils/financial_advisors_data';

const Header = styled('header')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderBottom: `${theme.spacing(3)} solid ${theme.palette.secondary.main}`,
  padding: `100px 0`,
}));

const Image = styled('img')({
  backgroundColor: '#e5e5e5',
  borderRadius: '100%',
  height: 80,
  objectFit: 'contain',
  width: 80,
});

const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

const feedbacks = {
  summary: [
    {
      title: 'Excelente serviço',
      image: '/illustrations/like.png',
      count: 200,
    },
    {
      title: 'Expertise',
      image: '/illustrations/smart.png',
      count: 200,
    },
    {
      title: 'Amigável',
      image: '/illustrations/friendly.png',
      count: 130,
    },
  ],
};

function FeedbackSummary({ image, title, count }) {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Badge color="secondary" badgeContent={count} max={999}>
        <Image src={image} alt="" />
      </Badge>
      <Typography variant="body1" sx={{ mt: 1, fontWeight: 500 }}>
        {title}
      </Typography>
    </Box>
  )
}

export default function XPConectaPage() {
  const [open, setOpen] = React.useState(null);
  const [infoOpen, setInfoOpen] = React.useState(false);
  const [investmentType, setInvestmentType] = React.useState('Renda Variável');
  const [sequence, setSequence] = React.useState([300000, 500000]);

  return (
    <div>
      <Head>
        <title>Escolha seu assessor - XP Conecta</title>
      </Head>
      <Header>
        <Container disableGutters sx={{ pl: 4, pr: 4 }}>
          <img src='/logos/xp-conecta.svg' alt="" />
          <Typography component="h1" variant="h4" sx={{ color: '#fff'}}>Conecte-se com o time de assessores da XP</Typography>
        </Container>
      </Header>
      <Container disableGutters sx={{ pl: 4, pr: 4, pt: '50px', pb: '100px' }}>
        <Typography component="p" variant="h5" sx={{ color: '#000', pb: '50px' }}>Pensando na melhor combinação entre você e seus investimentos, 
            nós da XP disponibilizamos uma equipe completa de assessores para te ajudar a potencializar seus rendimentos.</Typography>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={3}>
            <FormControl variant="standard" fullWidth margin="normal">
              <InputLabel id="tipo-de-investimento-label">Tipo de Investimento</InputLabel>
              <Select
                value={investmentType}
                onChange={(event) => {
                  setInvestmentType(event.target.value);
                }}
                id="tipo-de-investimento"
                label="Tipo de Investimento"
                labelId="tipo-de-investimento-label"
              >
                <MenuItem value="Todos">Todos</MenuItem>
                <MenuItem value="CDB">CDB</MenuItem>
                <MenuItem value="Renda Fixa">Renda Fixa</MenuItem>
                <MenuItem value="Renda Variável">Renda Variável</MenuItem>
                <MenuItem value="FIIs">Fundos Imobiliários</MenuItem>
              </Select>
            </FormControl>
            <Box sx={{ mt: 2 }}>
              <Typography id="sequence-slider" gutterBottom>
                Faixa de Atendimento
              </Typography>
              <Slider
                aria-labelledby="sequence-slider"
                marks
                max={1300000}
                min={300000}
                onChange={(event, value) => setSequence(value)}
                step={100000}
                value={sequence}
                valueLabelDisplay="auto"
                valueLabelFormat={(x) => {
                  const value = formatter.format(x);
                  return x === 1300000 ? `+ ${value}` : value;
                }}
              />
            </Box>
          </Grid>
          <Grid container item xs={12} sm={12} md={9} spacing={2}>
            {financialAdvisorData.map(
              (financialAdvisor, index) => (
                <Grid item xs={12} sm={6} md={3} key={`advisor-card-${index}`}>
                  <AdvisorCard
                    data={financialAdvisor}
                    disabled={
                      investmentType !== 'Todos' 
                      && financialAdvisor.investments.indexOf(investmentType) === -1
                    }
                    onClick={() => setOpen(financialAdvisor)}
                    onInfoClick={() => setInfoOpen(true)}
                  />
                </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
      <AdvisorModal open={open} onClose={() => setOpen(null)} />
      <Dialog 
        fullWidth
        maxWidth="xs"
        onClose={() => setInfoOpen(false)}
        open={infoOpen}
        PaperProps={{
          square: true,
          elevation: 2,
        }}
      >
        <DialogTitle>
          Feedbacks da carteira de clientes
        </DialogTitle>
        <DialogContent>
          <Box
            sx={{
              py: 2,
              mx: '-16px',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',

              '> *': {
                mx: '16px',
              },
            }}
          >
            {feedbacks.summary.map((data, index) =>
              <FeedbackSummary key={index}  {...data} />
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
