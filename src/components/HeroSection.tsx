import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroContainer = styled(Box)(() => ({
  minHeight: '100vh',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  background: `
    radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.15) 0%, transparent 50%),
    linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(17, 24, 39, 0.8) 100%)
  `,
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url("https://images.unsplash.com/photo-1659079631735-2228a7ce943e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw2fHxsYXB0b3AlMjBjaGFydHMlMjBhbmFseXRpY3MlMjB3b3Jrc3BhY2UlMjBidXNpbmVzc3xlbnwwfDB8fGJsdWV8MTc1NTI1OTgxOXww&ixlib=rb-4.1.0&q=85")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.1,
    zIndex: -1,
  }
}));

const FloatingElement = styled(Box)(({ theme }) => ({
  position: 'absolute',
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
  backdropFilter: 'blur(10px)',
  animation: 'float 6s ease-in-out infinite',
  '@keyframes float': {
    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
    '50%': { transform: 'translateY(-20px) rotate(180deg)' },
  },
}));

const GradientText = styled(Typography)<{ component?: React.ElementType }>(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}));

const GlassButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
  backdropFilter: 'blur(20px)',
  border: 'none',
  color: theme.palette.primary.contrastText,
  fontWeight: 700,
  fontSize: '1.1rem',
  padding: '16px 40px',
  '&:hover': {
    background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
    transform: 'translateY(-3px) scale(1.02)',
    boxShadow: `0 15px 35px ${theme.palette.primary.main}40`,
  }
}));

const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      {/* Floating Elements */}
      <FloatingElement 
        sx={{ 
          width: 80, 
          height: 80, 
          top: '20%', 
          left: '10%',
          animationDelay: '0s'
        }} 
      />
      <FloatingElement 
        sx={{ 
          width: 60, 
          height: 60, 
          top: '60%', 
          right: '15%',
          animationDelay: '2s'
        }} 
      />
      <FloatingElement 
        sx={{ 
          width: 100, 
          height: 100, 
          bottom: '20%', 
          left: '20%',
          animationDelay: '4s'
        }} 
      />

      <Container maxWidth="lg">
        <Stack 
          spacing={6} 
          alignItems="center" 
          textAlign="center"
          sx={{ py: 15 }}
        >
          <Typography
            variant="body2"
            sx={{
              background: 'rgba(16, 185, 129, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '70px',
              px: 3,
              py: 2,
              color: 'primary.main',
              fontWeight: 500,
              animation: 'fadeInUp 1s ease-out 0.2s both',
              '@keyframes fadeInUp': {
                from: { opacity: 0, transform: 'translateY(30px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >

            ✨ Helping Companies Grow Their Business
          </Typography>

          <Typography
            variant="h1"
            sx={{
              maxWidth: '900px',
              animation: 'fadeInUp 1s ease-out 0.4s both',
              '@keyframes fadeInUp': {
                from: { opacity: 0, transform: 'translateY(30px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            Ready to take your{' '}
            <GradientText component="span" variant="h1">
              company's online presence
            </GradientText>{' '}
            to the next level?
          </Typography>


          <GlassButton
            size="large"
            href="#contact"
            sx={{
              animation: 'fadeInUp 1s ease-out 0.8s both',
              '@keyframes fadeInUp': {
                from: { opacity: 0, transform: 'translateY(30px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            Get Started Today
          </GlassButton>
        </Stack>
      </Container>
    </HeroContainer>
  );
};

export default HeroSection;