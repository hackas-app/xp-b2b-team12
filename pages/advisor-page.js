import * as React from 'react';
import Head from 'next/head';
import { Container } from '@mui/material';
import { useRouter } from 'next/router';
import Header from '../src/components/header';

function AdvisorPage() {
  const router = useRouter();
  const { userName } = router.query;

  return (
    <div>
      <Head>
        <title>Acessor - XP Conecta</title>
      </Head>
      <Header name={userName} />
      <Container disableGutters sx={{ pl: 4, pr: 4, pt: '100px', pb: '100px' }}>
        AdivisorPage, in progress
      </Container>
    </div>
  );
}

export default AdvisorPage;
