import * as React from 'react';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import Box from '@mui/material/Box';
import {
  Container,
  Typography,
  useTheme,
  Switch,
  FormControl,
  FormControlLabel,
  Grid,
  Divider,
} from '@mui/material';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../src/components/header';

const AdvisorContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  height: '100%',
  minHeight: '100vh',
  flexDirection: 'column',
  width: '100%',
}));

const StyledDiv = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

const Subheader = styled('div')(({ theme }) => ({
  padding: 20,
  marginBottom: 40,
}));

const StyledToggle = styled(Switch)(({ theme }) => ({
  color: theme.palette.success.main,
  '& .MuiSwitch-track': {
    backgroundColor: theme.palette.tertiary.main,
  },
}));

const StyledTopic = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  paddingTop: 16,
  alignSelf: 'center',
}));

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  color: theme.palette.tertiary.main,
  alignSelf: 'center',
  paddingLeft: '20px',
  '> .MuiFormControlLabel-label': {
    width: '200px',
  },
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  justifyContent: 'center',
}));

const StyledControlDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  '&.MuiDivider-root': {
    '&::before': {
      borderLeftColor: theme.palette.secondary.main,
    },
    '&::after': {
      borderLeftColor: theme.palette.secondary.main,
    },
  },
}));

const StyledMiddleDivider = styled(Divider)(({ theme }) => ({
  marginBottom: 20,
  marginTop: 20,
  background: theme.palette.secondary.main,
}));

function AdvisorPage() {
  const router = useRouter();
  const theme = useTheme();
  const { userName } = router.query;

  const generalFormDataA = [
    'Dados Cadastrais',
    'Dados da Conta',
    'Dados Cartões de Crédito',
    'Dados de Operação de crédito',
    { title: 'Portifólios de interesse' },
    'Fundos imobiliários',
    'Ações',
    'CDB',
    'Fundos de Investimento',
    'Tesouro Direto',
    'ETFs',
    'Commodities',
    'Previdência Privada',
  ];

  const generalFormDataB = [
    { title: 'Renda Fixa ou Variável' },
    'Renda Fixa',
    'Renda Variável',
    { title: 'Setores Econômicos' },
    'Energia',
    'Financeiro',
    'Saneamento',
    'TI',
    'Educação',
    'Sustentabilidade',
  ];

  return (
    <StyledDiv>
      <Head>
        <title>Acessor - XP Conecta</title>
      </Head>
      <Header name={userName} />
      <AdvisorContainer disableGutters>
        {/* <Image
          src="/background/advisor_request.png"
          alt="General Business Image"
          width={700}
          height={800}
        /> */}
        <Subheader>
          <Typography color={theme.palette.tertiary.main} variant="h6">
            Através do Open Finance
          </Typography>
          <Typography color={theme.palette.tertiary.main} variant="h4">
            Selecione as categorias que sejam úteis para analisar os ativos para
            compor a carteira deste cliente
          </Typography>
        </Subheader>
        <Grid container spacing={2}>
          <StyledGrid item xs={2} sm={4} md={4}>
            <StyledControlDiv>
              {generalFormDataA.map((value, index) => {
                console.log('index', index);
                if (typeof value == 'object') {
                  return (
                    <StyledTopic>
                      <StyledMiddleDivider
                        color="secondary"
                        orientation="horizontal"
                        variant="middle"
                      />
                      <StyledTopic>{value.title}</StyledTopic>
                    </StyledTopic>
                  );
                } else {
                  return (
                    <FormControl fullWidth sx={{ mt: 2 }}>
                      <StyledFormControlLabel
                        control={<StyledToggle color="secondary" />}
                        label={`${value}`}
                        labelPlacement="start"
                      />
                    </FormControl>
                  );
                }
              })}
            </StyledControlDiv>
          </StyledGrid>
          <Grid item xs={2}>
            <StyledDivider color="secondary" orientation="vertical">
              {' '}
            </StyledDivider>
          </Grid>
          <StyledGrid item xs={2} sm={4} md={4}>
            <StyledControlDiv>
              {generalFormDataB.map((value, index) => {
                console.log('index', index);
                if (typeof value == 'object') {
                  return (
                    <StyledTopic>
                      <StyledMiddleDivider
                        color="secondary"
                        orientation="horizontal"
                        variant="middle"
                      />
                      <StyledTopic>{value.title}</StyledTopic>
                    </StyledTopic>
                  );
                } else {
                  return (
                    <FormControl fullWidth sx={{ mt: 2 }}>
                      <StyledFormControlLabel
                        control={<StyledToggle color="secondary" />}
                        label={`${value}`}
                        labelPlacement="start"
                      />
                    </FormControl>
                  );
                }
              })}
            </StyledControlDiv>
          </StyledGrid>
        </Grid>
      </AdvisorContainer>
    </StyledDiv>
  );
}

export default AdvisorPage;
