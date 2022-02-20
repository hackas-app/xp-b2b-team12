import * as React from 'react';
import Head from 'next/head';
import {
  Box,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import AdvisorCard from '../src/components/advisor_card';
import AdvisorModal from '../src/components/advisor_modal';

const Header = styled('header')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderBottom: `${theme.spacing(3)} solid ${theme.palette.secondary.main}`,
  padding: `100px 0`,
}));

const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

const financialAdvisorData = [
  {
    email: 'lilianeb@xp.com',
    image: '/profile/liliane_bittencourt.png',
    investments: ['CNPI', 'Renda Variável'],
    name: 'Liliane Bittencourt',
  },
  {
    email: 'fcastanhari@xp.com',
    image: '/profile/fabricio_castanhari.png',
    investments: ['CNPI', 'Renda Variável'],
    name: 'Fabrício Castanhari',
  },
  {
    email: 'manssour@xp.com',
    image: '/profile/matheus_manssour.png',
    investments: ['CNPI', 'Renda Variável', 'CDB'],
    name: 'Matheus Manssour',
  },
  {
    email: 'lucas.m.ribeiro@xp.com',
    image: '/profile/lucas_ribeiro.png',
    investments: ['Ações B3', 'Renda Fixa'],
    name: 'Lucas Ribeiro',
  },
  {
    email: 'carol.aguiar@xp.com',
    image: '/profile/carol-aguiar.png',
    investments: ['Criptomoedas'],
    name: 'Carol Aguiar',
  },
  {
    email: 'hanna.souza@xp.com',
    image: '/profile/hanna_souza.png',
    investments: ['CRA', 'CRI', 'LCA', 'LCI', 'FIIs'],
    name: 'Hanna Souza',
  },
];

export default function XPConectaPage() {
  const [open, setOpen] = React.useState(null);
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
      <Container disableGutters sx={{ pl: 4, pr: 4, pt: '100px', pb: '100px' }}>
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
                  />
                </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
      <AdvisorModal open={open} onClose={() => setOpen(null)} />
    </div>
  );
}
