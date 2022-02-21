import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  Container,
  Typography,
  useTheme,
  Switch,
  FormControl,
  FormControlLabel,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  Divider,
  Button,
  Stack,
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
  paddingBottom: 16,
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

const StyledSelect = styled(Select)(({ theme }) => ({
  background: theme.palette.secondary.main,
}));

const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  color: theme.palette.tertiary.main,
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

  const selectOptions = [
    '1 mês',
    '2 meses',
    '3 meses',
    '4 meses',
    '5 meses',
    '6 meses',
    '7 meses',
    '8 meses',
    '9 meses',
    '10 meses',
    '11 meses',
    '12 meses',
  ];

  const [dueDate, setDueDate] = React.useState(selectOptions[1]);

  return (
    <div>
      <StyledDiv>
        <Head>
          <title>Acessor - XP Conecta</title>
        </Head>
        <Header name={userName} />
        <AdvisorContainer disableGutters>
          <Subheader>
            <Typography color={theme.palette.tertiary.main} variant="h6">
              Através do Open Finance
            </Typography>
            <Typography color={theme.palette.tertiary.main} variant="h4">
              Selecione as categorias que sejam úteis para analisar os ativos
              para compor a carteira deste cliente
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
        <Stack
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'right',
          }}
          direction="row"
          spacing={2}
          sx={{
            my: 2,
            pl: 4,
            pr: 4,
            width: '100%',
          }}
        >
          <Button
            style={{ display: 'flex', alignSelf: 'flex-end' }}
            variant="contained"
            disableElevation
            color="secondary"
            href={`/advisor-home?userName=${userName}`}
          >
            Enviar Requisição
          </Button>
        </Stack>
      </StyledDiv>
    </div>
  );
}

export default AdvisorPage;
