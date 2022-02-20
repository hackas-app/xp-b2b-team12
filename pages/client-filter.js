import * as React from 'react';
import { styled } from '@mui/material/styles';

const Header = styled('header')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  borderTop: `${theme.spacing(1)} solid ${theme.palette.secondary.main}`,
  padding: `${theme.spacing(2)} ${theme.spacing(4)}`
}));

const PageBg = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: '100%',
  minHeight: '100vh',
}));

export default function ClientFilterIndex() {
  return (
    <PageBg>
      <Header>
        oi
      </Header>
    </PageBg>
  );
}