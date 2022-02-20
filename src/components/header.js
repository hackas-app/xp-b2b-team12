import * as React from 'react';
import { Avatar, Box, Chip, Typography, useTheme } from '@mui/material';

export default function Header({ name }) {
  const theme = useTheme();
  return (
    <Box
      component="header"
      sx={{
        backgroundColor: theme.palette.primary.main,
        display: 'flex',
        height: 72,
        justifyContent: 'space-between',
        mb: 4,
        px: 2,
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
          alignItems: 'center',
          mx: `-${theme.spacing(1)}`,

          '> *': {
            mx: 1,
          },
        }}
      >
        <Chip label="Área do Assessor" color="info" />
        <Typography color={theme.palette.tertiary.main} variant="subtitle2">
          {name}
        </Typography>
        {name && (
          <Avatar
            sx={{ bgcolor: theme.palette.info.light }}
            alt={`${name} avatar`}
          >
            {name.slice(0, 2)}
          </Avatar>
        )}
      </Box>
    </Box>
  );
}
