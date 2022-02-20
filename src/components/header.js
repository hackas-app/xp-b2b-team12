import * as React from 'react';
import { Avatar, Box, Chip, Typography, useTheme } from '@mui/material';

export default function Header({ name }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        display: 'flex',
        justifyContent: 'space-between',
        height: 72,
      }}
    >
      <Box
        sx={{
          flex: 3 / 4,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img width={117} height={29} src="/logos/xp-conecta.svg" alt="" />
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flex: 1 / 4,
        }}
      >
        <Chip label="Área do Assessor" color="info" />
        <Typography color={theme.palette.tertiary.main} variant="subtitle2">
          {name}
        </Typography>
        <Avatar
          sx={{ bgcolor: theme.palette.info.light }}
          alt={`${name} avatar`}
        >
          {name?.slice(0, 2)}
        </Avatar>
      </Box>
    </Box>
  );
}
