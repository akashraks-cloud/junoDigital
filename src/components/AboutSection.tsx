import React from 'react';
import { Box, Container, Typography, Stack, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

const SectionContainer = styled(Box)(() => ({
  position: 'relative',
  padding: '120px 0',
  background: `
    radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
    linear-gradient(180deg, rgba(17, 24, 39, 0.8) 0%, rgba(0, 0, 0, 0.9) 100%)
  `,
  overflow: 'hidden',
}));

const GradientText = styled(Typography)<{ component?: React.ElementType }>(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: '24px',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
    zIndex: 1,
  },
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  '&:hover': {
    '& img': {
      transform: 'scale(1.05)',
    }
  }
}));

const FloatingCard = styled(Box)(({ theme }) => ({
  position: 'absolute',
  background: 'rgba(0, 0, 0, 0.8)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '16px',
  padding: theme.spacing(3),
  zIndex: 2,
  animation: 'float 6s ease-in-out infinite',
  '@keyframes float': {
    '0%, 100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-10px)' },
  },
}));

const AboutSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <SectionContainer id="about">
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={8}
          alignItems="center"
        >
          <Box
            sx={{
              flex: 1,
              position: 'relative',
              animation: 'fadeInLeft 1s ease-out',
              '@keyframes fadeInLeft': {
                from: { opacity: 0, transform: 'translateX(-50px)' },
                to: { opacity: 1, transform: 'translateX(0)' },
              },
            }}
          >
            <ImageContainer sx={{ height: { xs: 300, md: 500 } }}>
              <img
                src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw3fHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZSUyMHByb2Zlc3Npb25hbHMlMjBtZWV0aW5nfGVufDB8MHx8fDE3NTUyNTk4MTl8MA&ixlib=rb-4.1.0&q=85"
                alt="Professional team collaboration, modern office environment, digital marketing professionals working - Campaign Creators on Unsplash"
                style={{ width: '100%', height: '100%' }}
              />
              
              {!isMobile && (
                <>
                  <FloatingCard
                    sx={{
                      top: 20,
                      right: 20,
                      animationDelay: '0s'
                    }}
                  >
                    <Typography variant="h6" color="primary.main" fontWeight={600}>
                      500+
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Organizations Served
                    </Typography>
                  </FloatingCard>

                  <FloatingCard
                    sx={{
                      bottom: 20,
                      left: 20,
                      animationDelay: '2s'
                    }}
                  >
                    <Typography variant="h6" color="secondary.main" fontWeight={600}>
                      98%
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Client Satisfaction
                    </Typography>
                  </FloatingCard>
                </>
              )}
            </ImageContainer>
          </Box>

          <Stack
            spacing={4}
            sx={{
              flex: 1,
              animation: 'fadeInRight 1s ease-out 0.3s both',
              '@keyframes fadeInRight': {
                from: { opacity: 0, transform: 'translateX(50px)' },
                to: { opacity: 1, transform: 'translateX(0)' },
              },
            }}
          >
            <Typography variant="h2">
              Who are <GradientText component="span" variant="h2">we?</GradientText>
            </Typography>

            <Typography
              variant="h5"
              color="text.secondary"
              sx={{
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              Juno - Digital Services Pvt Ltd was born from a passion for helping businesses thrive in the digital age.
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
              }}
            >
              Our team of experts brings years of experience in digital marketing, a commitment to innovation, and a client-first approach to every project we undertake. We specialize in helping companies build their online presence and connect with customers across all digital platforms.
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
              }}
            >
              We believe in building partnerships, not just client lists. Our success is measured by your success. Let's build the future of your brand, together.
            </Typography>

            <Stack direction="row" spacing={4} sx={{ pt: 2 }}>
              <Stack alignItems="center">
                <Typography variant="h4" color="primary.main" fontWeight={700}>
                  5+
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign="center">
                  Years of Experience
                </Typography>
              </Stack>
              <Stack alignItems="center">
                <Typography variant="h4" color="secondary.main" fontWeight={700}>
                  50+
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign="center">
                  Expert Team Members
                </Typography>
              </Stack>
              <Stack alignItems="center">
                <Typography variant="h4" color="primary.main" fontWeight={700}>
                  24/7
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign="center">
                  Customer Support
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </SectionContainer>
  );
};

export default AboutSection;