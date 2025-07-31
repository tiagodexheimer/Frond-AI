import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Container,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const menuItems = [
    { label: 'Início', path: '/' },
    { label: 'Personagens', path: '/characters' },
    { label: 'Lore', path: '/lore' },
    { label: 'Contato', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{
          background: 'rgba(13, 17, 23, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(138, 43, 226, 0.2)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ px: { xs: 0, sm: 2 } }}>
            {/* Logo */}
            <Typography
              variant="h4"
              component={Link}
              to="/"
              sx={{
                flexGrow: 1,
                textDecoration: 'none',
                color: 'secondary.main',
                fontFamily: 'Cinzel Decorative',
                fontWeight: 700,
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                textShadow: '0 0 20px rgba(255, 107, 53, 0.5)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  textShadow: '0 0 30px rgba(255, 107, 53, 0.8)',
                  transform: 'scale(1.05)',
                },
              }}
            >
              Dragon Realm
            </Typography>

            {/* Desktop Menu */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 1 }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.path}
                    component={Link}
                    to={item.path}
                    sx={{
                      color: isActivePath(item.path) ? 'secondary.main' : 'text.primary',
                      fontWeight: isActivePath(item.path) ? 600 : 400,
                      fontSize: '1rem',
                      px: 2,
                      py: 1,
                      borderRadius: '8px',
                      position: 'relative',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: 'secondary.main',
                        backgroundColor: 'rgba(138, 43, 226, 0.1)',
                        transform: 'translateY(-2px)',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        width: isActivePath(item.path) ? '80%' : '0%',
                        height: '2px',
                        background: 'linear-gradient(90deg, #8A2BE2, #FF6B35)',
                        transform: 'translateX(-50%)',
                        transition: 'width 0.3s ease',
                      },
                      '&:hover::after': {
                        width: '80%',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="abrir menu"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  color: 'text.primary',
                  '&:hover': {
                    color: 'secondary.main',
                    backgroundColor: 'rgba(138, 43, 226, 0.1)',
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            backgroundColor: 'background.paper',
            borderLeft: '1px solid rgba(138, 43, 226, 0.2)',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'secondary.main',
              fontFamily: 'Cinzel Decorative',
              fontWeight: 600,
            }}
          >
            Menu
          </Typography>
          <IconButton 
            onClick={handleDrawerToggle}
            sx={{
              color: 'text.primary',
              '&:hover': {
                color: 'secondary.main',
                backgroundColor: 'rgba(138, 43, 226, 0.1)',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        
        <List sx={{ px: 2 }}>
          {menuItems.map((item) => (
            <ListItem
              key={item.path}
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                borderRadius: '8px',
                mb: 1,
                color: isActivePath(item.path) ? 'secondary.main' : 'text.primary',
                backgroundColor: isActivePath(item.path) ? 'rgba(138, 43, 226, 0.1)' : 'transparent',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(138, 43, 226, 0.1)',
                  color: 'secondary.main',
                  transform: 'translateX(8px)',
                },
              }}
            >
              <ListItemText 
                primary={item.label}
                sx={{
                  '& .MuiListItemText-primary': {
                    fontWeight: isActivePath(item.path) ? 600 : 400,
                    fontSize: '1.1rem',
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;