import * as React from 'react';
import { Button, Box, Card, CardMedia, Chip, Typography } from '@mui/material';

export default function AdvisorCard({ data, disabled = false }) {
  const { name, email, image, investments = [] } = data;

  return (
    <Card
      elevation={1}
      square
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        opacity: disabled ? 0.25 : 1,
        p: 1,
      }}
      variant="elevation"
    >
      <CardMedia
        component="img"
        image={image}
        alt={name}
        height={80}
        sx={{ mb: 1 }}
      />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
      }}>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2">{email}</Typography>
        <Box 
          sx={{
            mt: 1,
            ml: '-2px',
            mr: '-2px',
            mb: '4px',

            '> *': {
              ml: '2px',
              mr: '2px',
              mb: '4px'
            },
          }}
        >
          {investments.map(
            (investment) => <Chip color="secondary" key={`${name}-${investment}`} label={investment} />
          )}
        </Box>
      </Box>
      <Box 
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          mt: 2,
        }}
      >
        <Button disabled={disabled} variant="contained" disableElevation size="small">
          Conectar
        </Button>
      </Box>
    </Card>
  );
}