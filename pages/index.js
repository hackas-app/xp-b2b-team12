import * as React from 'react';
import { Box, Card, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const LoginContainer = styled(Container)(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  minHeight: '100vh',
  position: 'relative',

  '::before': {
    backgroundColor: theme.palette.primary.main,
    borderBottom: `25px solid ${theme.palette.secondary.main}`,
    content: '" "',
    height: '65%',
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0,
  },
}));

export default function Index() {
  return (
    <LoginContainer maxWidth="xs">
      <Box sx={{ zIndex: 1, display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          textAlign="center"
          sx={{
            color: 'common.white'
          }}  
        >
          Acessa sua conta XP
        </Typography>
        <Card variant="outlined">
          <div>Hello</div>
          <h2>Hello</h2>
        </Card>
      </Box>
    </LoginContainer>
  );
}
