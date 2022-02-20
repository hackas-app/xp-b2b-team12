import * as React from 'react';
import { Avatar, Card, Stack, Typography, Badge, List, ListItem, ListItemAvatar, ListItemText, Link } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

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

const notificationData = [
  {
    avatar: '/profile/joao-silva.png',
    message: <>Planeje a carteira de <b>João Silva</b></>,
    link: '#',
  },
  {
    avatar: '/profile/paola-antunes.png',
    message: <><b>Paola Antunes</b> compartilhou seus dados</>,
    link: '#',
  },
  {
    avatar: '/profile/joao-silva.png',
    message: <><b>João Silva</b> compartilhou seus dados</>,
    link: '#',
  },
];

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
        {notificationData.map(({ message, avatar, link }, index) => (
          <Badge key={`notifications-${index}`} badgeContent=" " color="warning" variant="dot">
            <ListItem
              alignItems="flex-start"
              sx={{
                border: (theme) => `1px solid ${alpha(theme.palette.primary.light, 0.2)}`,
                mb: 2,
              }}
            >
              <ListItemAvatar>
                <Avatar alt="" src={avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={message}
                secondary={<Link href={link} color="#26A6D3">Clique aqui para ver mais</Link>}
                sx={{
                  textAlign: 'right',

                  '> .MuiListItemText-secondary': {
                    mt: 2,
                  },
                }}
              />
            </ListItem>
          </Badge>
        ))}
      </List>
    </NotificationCenterRoot>
  )
}