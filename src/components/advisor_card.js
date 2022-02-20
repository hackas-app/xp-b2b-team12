import * as React from 'react';
import { Button, IconButton, Box, Card, CardMedia, Chip, Typography } from '@mui/material';
import ProfileInfo from '@mui/icons-material/InfoOutlined';

export default function AdvisorCard({ data, disabled = false, onClick }) {
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
          justifyContent: 'space-between',
          mt: 2,
        }}
      >
        <IconButton aria-label="veja mais detalhes" disabled={disabled} size="small" color="info">
          <ProfileInfo />
        </IconButton>
        <Button
          disabled={disabled}
          disableElevation
          onClick={onClick}
          size="small"
          variant="contained"
        >
          Conectar
        </Button>
      </Box>
    </Card>
  );
}