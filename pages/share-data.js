import * as React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Checkbox,
  Container,
  FormControl as MuiFormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel as MuiFormLabel,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Select,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import slugify from 'slugify';

const Header = styled('header')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderBottom: `${theme.spacing(3)} solid ${theme.palette.secondary.main}`,
  padding: `100px 0`,

  img: {
    maxWidth: '120px',
    paddingBottom: theme.spacing(2),
  },
}));

const FormLabel = styled(MuiFormLabel)(({ theme }) => ({
  color: '#000',
  fontWeight: 500,
  marginBottom: theme.spacing(2),
}));

const FormControl = styled(MuiFormControl)(({ theme }) => ({
  margin: `${theme.spacing(2)} ${theme.spacing(4)}`,
}));

const dataFieldsList = [
  {
    subheader: 'Dados Cadastrais',
    fields: [
      'Dados Cadastrais',
      'Informações complementares',
    ],
  },
  {
    subheader: 'Dados da Conta',
    fields: [
      'Saldo',
      'Limites',
      'Extratos',
    ],
  },
  {
    subheader: 'Dados Cartões de Crédito',
    fields: [
      'Limite',
      'Transações',
      'Faturas',
    ],
  },
  {
    subheader: 'Dados Operações de Crédito',
    fields: [
      'Contratos de Crédito',
    ],
  },
  {
    subheader: 'Dados de Investimentos',
    fields: [
      'Minhas carteiras de investimento',
    ],
  }
];

const steps = [
  'Selecione os dados para trazer à XP',
  'Selecione de onde virá esses dados',
  'Tudo certo!',
];

export default function ShareDataPage() {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [selected, setSelected] = React.useState(false);

  const [state, setState] = React.useState(() => {
    const initialState = dataFieldsList.reduce((acc, { fields }) => {
      const initFieldsObj = {};
      fields.forEach((field) => {
        initFieldsObj[slugify(field)] = true;
      });
      return {
        ...acc,
        ...initFieldsObj,
      }
    }, {
      'share-period': 12,
    });

    return initialState;
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const renderCheckboxList = ({ subheader, fields }) => (
    <FormControl component="fieldset" variant="standard" fullWidth>
      <FormLabel component="legend">{subheader}</FormLabel>
      <FormGroup>
        {fields.map((label) => {
          const name = slugify(label);
          const checked = state[name] ?? false;

          return (
            <FormControlLabel
              control={<Checkbox checked={checked} onChange={handleChange} name={name} />}
              label={label}
              key={label}
            />
          );
        })}
      </FormGroup>
      <FormHelperText sx={{ mt: 1 }}>
        <Link href="#" color="#26A6D3">Mais detalhes</Link>
      </FormHelperText>
    </FormControl>
  )

  return (
    <div>
      <Head>
        <title>Selecione os dados que você quer compartilhar - XP Conecta</title>
      </Head>
      <Header>
        <Container disableGutters sx={{ m: 0, pl: 4, pr: 4 }}>
          <img src='/logos/xp-conecta.svg' alt="" />
          <Typography component="h1" variant="h4" sx={{ color: '#fff'}}>
            Selecione os dados que você quer compartilhar
          </Typography>
        </Container>
      </Header>
      <Grid container spacing={5} sx={{ minHeight: 'calc(100vh - 280px)' }}>
        <Grid item container xs={12} sm={12} md={6}>
          <Grid item xs={12}>
            <Box sx={{ my: 2, pl: 4, pr: 4, width: '100%' }}>
              <Stepper activeStep={currentStep} alternativeLabel>
                {steps.map((label, index) => {
                  const stepProps = {};
                  if (index === 2 && currentStep === 2) {
                    stepProps.completed = true;
                  }
                  return (
                    <Step key={index} {...stepProps}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  )
                })}
              </Stepper>
            </Box>
          </Grid>
          {currentStep === 0 && (
            <>
              <Grid item xs={12} sm={12} md={6}>
                {renderCheckboxList(dataFieldsList[0])}
                {renderCheckboxList(dataFieldsList[1])}
                {renderCheckboxList(dataFieldsList[2])}
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
              {renderCheckboxList(dataFieldsList[3])}
              {renderCheckboxList(dataFieldsList[4])}
                <FormControl component="fieldset" variant="standard">
                  <FormLabel component="legend">Por quanto tempo?</FormLabel>
                  <InputLabel id="share-period-label">Período de compartilhamento</InputLabel>
                  <Select
                    value={state['share-period']}
                    onChange={(event) => {
                      setState({
                        ...state,
                        ['share-period']: event.target.value,
                      });
                    }}
                    id="share-period"
                    label="Prazo de compartilhamento"
                    labelId="share-period-label"
                  >
                    <MenuItem value={1}>1 mês</MenuItem>
                    <MenuItem value={2}>2 meses</MenuItem>
                    <MenuItem value={3}>3 meses</MenuItem>
                    <MenuItem value={4}>4 meses</MenuItem>
                    <MenuItem value={5}>5 meses</MenuItem>
                    <MenuItem value={6}>6 meses</MenuItem>
                    <MenuItem value={7}>7 meses</MenuItem>
                    <MenuItem value={8}>8 meses</MenuItem>
                    <MenuItem value={9}>9 meses</MenuItem>
                    <MenuItem value={10}>10 meses</MenuItem>
                    <MenuItem value={11}>11 meses</MenuItem>
                    <MenuItem value={12}>12 meses</MenuItem>
                  </Select>
                  <FormHelperText sx={{ mt: 1 }}>
                    <Link href="#" color="#26A6D3">Termos e contratos</Link>
                  </FormHelperText>
                  <Typography variant="subtitle1">
                    Ao confirmar você aceita os termos e condições de compartilhamento dos seus dados.
                  </Typography>
                </FormControl>
              </Grid>
            </>
          )}
          {currentStep === 1 && (
            <Grid container item spacing={4} xs={12} sx={{ px: 4 }} >
              {['Banco A', 'Banco B', 'Banco C'].map((title, index) => (
                <Grid item xs={12} sm={12} md={6} key={index}>
                  <Card sx={{
                      backgroundColor: (theme) => selected && index === 2 && theme.palette.info.main 
                    }}>
                    <CardActionArea onClick={() => setSelected(!selected)}>
                      <CardContent>
                        <Typography variant="h5" component="p">
                          {title}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
          {currentStep === 2 && (
            <Box sx={{ px: 4, py: 6, textAlign: 'center', width: '100%' }}>
              <CheckCircleOutlineIcon color="success" sx={{ width: '120px', height: '120px', mb: 2 }} />
              <Typography variant="h5" component="p" gutterBottom>
                Tudo certo!
              </Typography>
              <Typography variant="body2" component="p">
                Aproveite as facilidades da XP Investimentos
              </Typography>
            </Box>
          )}
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{ my: 2, pl: 4, pr: 4, width: '100%' }}
          >
            <Button fullWidth variant="outlined" onClick={() => setCurrentStep(currentStep - 1)} disabled={currentStep !== 1}>
              Voltar
            </Button>
            <Button
              color="secondary"
              disabled={currentStep === 2}
              disableElevation
              fullWidth
              onClick={() => setCurrentStep(currentStep + 1)}
              variant="contained"
            >
              {currentStep === 0 ? 'Continuar' : 'Compartilhar Dados'}
            </Button>
          </Stack>  
        </Grid>
        <Grid
          item
          xs={0}
          sm={0}
          md={6}
          sx={{
            display: {
              xs: 'none',
              sm: 'none',
              md: 'inherit'
            },
          }}
        >
          <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image src="/images/share-data-image.png" layout="fill" alt="" objectFit="cover" />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}