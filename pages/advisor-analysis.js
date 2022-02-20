import * as React from 'react';
import {
  Container,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Header from '../src/components/header';

import PieChart from '../src/components/pie_chart';

const PageBg = styled('div')(({ theme }) => ({
  borderTop: `10px solid ${theme.palette.secondary.main}`,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  height: '100%',
  minHeight: '100vh',
}));

export default function AdvisorHomePage() {
  const theme = useTheme();
  const userName = "Paola";

  const bankAData = [{x: "Renda Variável", y: 1}, {x: "Ações", y: 4}, {x: "FIIs", y: 10}]
  const bankBData = [{x: "Renda Variável", y: 1}, {x: "Ações", y: 4}, {x: "FIIs", y: 10}]
  const bankAName = "NuInvest";
  const bankBName = "XP Investimentos";
  const bankAEarnings = "10.45";
  const bankBEarnings = "20.03";
  const bankALogo = '../../public/logos/nu-invest-logo.svg';
  const bankBLogo = "../../public/logos/nu-invest-logo.svg";
 
  return (
    <PageBg>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={9}>
          <Header name={userName} />
          <Container disableGutters sx={{
            px: 2,
            pb: 6,
          }}>
            <Typography variant="h3" component="h1" gutterBottom>
              Rendimentos de {userName}
            </Typography>
          </Container>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item >
          <PieChart data={bankAData} logo={bankALogo} name={bankAName} earning={bankAEarnings} theme={theme} />
        </Grid>
        <Grid item >
          <PieChart data={bankBData} logo={bankBLogo} name={bankBName} earning={bankBEarnings} theme={theme} />
        </Grid>
      </Grid>
    </PageBg>
  );
}
