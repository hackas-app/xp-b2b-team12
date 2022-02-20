import * as React from 'react';
import { Container, Grid, Typography, useTheme, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import useSWR from 'swr';
import Header from '../src/components/header';

import PieChart from '../src/components/pie_chart';

const PageBg = styled('div')(({ theme }) => ({
  borderTop: `10px solid ${theme.palette.secondary.main}`,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  height: '100%',
  minHeight: '100vh',
}));

const CardDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
}));

export default function AdvisorHomePage() {
  const theme = useTheme();
  const userName = 'João Silva';

  const [bankAData, setBankAData] = React.useState([]);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR('/api/get_user_bank_investment', fetcher);

  React.useEffect(() => {
    if (data && data.data) {
      const { data: investments } = data;
      const { cdb, cra, cri, lca, lci, stocks } = investments;

      console.log(Object.keys(cdb).length);

      setBankAData([
        { x: 'CDB', y: Object.keys(cdb)?.length },
        { x: 'CRA', y: Object.keys(cra)?.length },
        { x: 'CRI', y: Object.keys(cri)?.length },
        { x: 'LCA', y: Object.keys(lca)?.length },
        { x: 'LCI', y: Object.keys(lci)?.length },
        { x: 'AÇÕES', y: Object.keys(stocks)?.length },
      ]);
    }
  }, [data]);

  const bankBData = [
    // { x: 'CDB', y: Object.keys(cdb)?.length },
    // { x: 'CRA', y: Object.keys(cra)?.length },
    // { x: 'CRI', y: Object.keys(cri)?.length },
    // { x: 'LCA', y: Object.keys(lca)?.length },
    // { x: 'LCI', y: Object.keys(lci)?.length },
    // { x: 'AÇÕES', y: Object.keys(stocks)?.length },
  ];
  const bankAName = 'Banco C';
  const bankBName = 'XP Investimentos';
  const bankAEarnings = '10.45';
  const bankBEarnings = '20.03';
  const bankALogo = '/logos/nu-invest-logo.svg';
  const bankBLogo = '/logos/nu-invest-logo.svg';

  return (
    <PageBg>
      <Header name={userName} />
      <CardDiv>
        <Stack>
          <Typography variant="h3" component="h1" gutterBottom>
            Visão de investimentos de {userName}
          </Typography>
          <PieChart
            data={bankAData}
            name={bankAName}
            earning={bankAEarnings}
            theme={theme}
          />
        </Stack>
      </CardDiv>
    </PageBg>
  );
}
