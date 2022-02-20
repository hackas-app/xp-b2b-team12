import * as React from 'react';
import { VictoryPie } from 'victory';
import { Box, Card, CardMedia, Chip, Typography } from '@mui/material';

export default function PieChart({data, name, logo, earning, theme}) {
  const colorPalette = [
    "#ffc70c",
    "#f2c661",
    "#e0c695",
    "#c6c6c6",
    "#89898c",
    "#505155",
    "#1e1f24"
  ];

  return (
    <Card
      elevation={1}
      square
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        p: 1,
        backgroundColor: theme.palette.primary.main,
      }}
      variant="elevation"
    >
      <CardMedia
        component="img"
        image={logo}
        height={80}
        sx={{ mb: 1}}
      />
        <Typography 
          variant="h5"
          component="h1"
          sx={{ color: theme.palette.tertiary.main }}>
          {name}
        </Typography>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}>
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
          </Box>
        </Box>
      <Box 
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 2,
        }}
      >
        <VictoryPie 
          data={data}
          colorScale={colorPalette}
          style={{
            data: {
              fillOpacity: 0.9, stroke: theme.palette.primary.main, strokeWidth: 3
            },
            labels: {
              fontSize: 16, fill: "white"
            }
          }}
          labelRadius={({ innerRadius }) => innerRadius + 100 }
        />
        <Typography 
          variant="h5"
          component="h1"
          sx={{ color: theme.palette.tertiary.main }}>
          Rentabilidade de {earning}% a.a.
        </Typography>
      </Box>
    </Card>



  )
}
