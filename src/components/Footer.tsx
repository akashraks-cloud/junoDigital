import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterContainer = styled(Box)(({ theme }) => ({
  background: `
    linear-gradient(135deg, rgba(17, 24, 39, 0.9) 0%, rgba(0, 0, 0, 0.95) 100%)
  `,
  backdropFilter: 'blur(20px)',
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  padding: theme.spacing(6, 0),
  marginTop: theme.spacing(10),
}));

const LogoText = styled(Typography)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontWeight: 700,
  fontSize: '1.5rem',
  fontFamily: '"Space Grotesk", sans-serif',
}));

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <LogoText>Juno</LogoText>
            <Typography variant="body2" color="text.secondary">
              Digital Services Pvt Ltd
            </Typography>
          </Stack>

          <Typography 
            variant="body2" 
            color="text.secondary"
            textAlign={{ xs: 'center', md: 'right' }}
          >
            © 2024 Juno - Digital Services Pvt Ltd. All Rights Reserved.
          </Typography>
        </Stack>
      </Container>
    </FooterContainer>
  );
};

export default Footer;