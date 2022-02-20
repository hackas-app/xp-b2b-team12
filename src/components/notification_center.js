import * as React from 'react';
import { Avatar, Card, Stack, Typography, Badge, List, ListItem, ListItemAvatar, ListItemText, Link } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { emEsperaData } from '../../pages/advisor-home';

const NotificationCenterRoot = styled(Card)(({ theme }) => ({
  margin: theme.spacing(2),
  padding: theme.spacing(2),
 
  [theme.breakpoints.up('md')]: {
    height: '100%',
    margin: 0,
    maxHeight: '100vh',
    position: 'sticky',
    top: 0,
    width: '100%',
  },
}));

export default function NotificationCenter() {
  return (
    <NotificationCenterRoot component="aside" elevation={0} square>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Badge
          anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
          }} 
          badgeContent={2} 
          color="warning"
        >
          <NotificationsNoneIcon fontSize="large" />
        </Badge>
        <Typography variant="button">Notificações</Typography>
      </Stack>
      <List sx={{ mt: 3 }}>
        {emEsperaData.map(({ name, image }) => (
          <ListItem
            alignItems="flex-start"
            key={`notifications-${name}`}
            sx={{
              border: (theme) => `1px solid ${alpha(theme.palette.primary.light, 0.2)}`,
              mb: 2,
            }}
          >
            <ListItemAvatar>
              <Avatar alt={name} src={image} />
            </ListItemAvatar>
            <ListItemText
              primary={`${name} compartilhou seus dados`}
              primaryTypographyProps={{
                fontWeight: 500,
              }}
              secondary={<Link href="#" color="#26A6D3">Clique aqui para ver mais</Link>}
              sx={{
                textAlign: 'right',

                '> .MuiListItemText-secondary': {
                  mt: 2,
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </NotificationCenterRoot>
  )
}