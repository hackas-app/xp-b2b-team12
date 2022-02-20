import * as React from 'react';
import {
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Header from '../src/components/header';
import { RadialChart } from 'react-vis';

import PieChart from '../src/components/pie_chart';

const PageBg = styled('div')(({ theme }) => ({
  borderTop: `10px solid ${theme.palette.secondary.main}`,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  height: '100%',
  minHeight: '100vh',
}));


export default function AdvisorHomePage() {
  const userName = "Paola";

  const bankAData = [{angle: 5, label: 'Renda Fixa'}, {angle: 1, label: 'Ações'}, {angle: 1, label: 'FIIs'}]
  const bankBData = [{angle: 1, label: 'Renda Fixa'}, {angle: 5, label: 'Ações'}, {angle: 2, label: 'FIIs'}]
  const bankAName = "NuInvest";
  const bankBName = "XP Investimentos";
  const bankAEarnings = "10.45% a.a";
  const bankBEarnings = "20.03% a.a";
 
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
          <Typography variant="h6" component="h1">
              {bankAName}
            </Typography>
          <RadialChart data={bankAData} showLabels width={300} height={300} />
           <Typography variant="h6" component="h1">
              {bankAEarnings}
            </Typography>
        </Grid>
        <Grid item >
          <Typography variant="h6" component="h1">
              {bankBName}
            </Typography>
          <PieChart data={bankBData} />
          <Typography variant="h6" component="h1">
              {bankBEarnings}
            </Typography>
        </Grid>
      </Grid>
    </PageBg>
  );
}
