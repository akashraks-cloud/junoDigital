import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Stack, 
  Card, 
  CardContent,
  Snackbar,
  Alert
} from '@mui/material';
import { styled } from '@mui/material/styles';

const SectionContainer = styled(Box)(() => ({
  position: 'relative',
  padding: '120px 0',
  background: `
    radial-gradient(circle at 60% 40%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(17, 24, 39, 0.8) 100%)
  `,
  overflow: 'hidden',
}));

const GradientText = styled(Typography)<{ component?: React.ElementType }>(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}));

const ContactCard = styled(Card)(() => ({
  background: 'rgba(17, 24, 39, 0.8)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '24px',
  maxWidth: '600px',
  margin: '0 auto',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    border: '1px solid rgba(16, 185, 129, 0.3)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
  }
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
  color: theme.palette.primary.contrastText,
  fontWeight: 600,
  fontSize: '1.1rem',
  padding: '16px 40px',
  borderRadius: '50px',
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
    transform: 'translateY(-2px)',
    boxShadow: `0 15px 35px ${theme.palette.primary.main}40`,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
    transition: 'left 0.5s',
  },
  '&:hover::before': {
    left: '100%',
  }
}));

const FloatingElement = styled(Box)(({ theme }) => ({
  position: 'absolute',
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}15, ${theme.palette.secondary.main}15)`,
  backdropFilter: 'blur(10px)',
  animation: 'floatGentle 8s ease-in-out infinite',
  '@keyframes floatGentle': {
    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
    '50%': { transform: 'translateY(-15px) rotate(180deg)' },
  },
}));

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <SectionContainer id="contact">
      {/* Floating Elements */}
      <FloatingElement 
        sx={{ 
          width: 100, 
          height: 100, 
          top: '15%', 
          left: '10%',
          animationDelay: '0s'
        }} 
      />
      <FloatingElement 
        sx={{ 
          width: 80, 
          height: 80, 
          bottom: '20%', 
          right: '15%',
          animationDelay: '4s'
        }} 
      />

      <Container maxWidth="lg">
        <Stack spacing={8} alignItems="center">
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Typography
              variant="h2"
              sx={{
                animation: 'fadeInUp 1s ease-out',
                '@keyframes fadeInUp': {
                  from: { opacity: 0, transform: 'translateY(30px)' },
                  to: { opacity: 1, transform: 'translateY(0)' },
                },
              }}
            >
              Contact <GradientText component="span" variant="h2">Us</GradientText>
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{
                maxWidth: '600px',
                fontWeight: 400,
                animation: 'fadeInUp 1s ease-out 0.2s both',
                '@keyframes fadeInUp': {
                  from: { opacity: 0, transform: 'translateY(30px)' },
                  to: { opacity: 1, transform: 'translateY(0)' },
                },
              }}
            >
              Ready to transform your company's digital presence? Let's start the conversation.
            </Typography>
          </Stack>

          <ContactCard
            sx={{
              width: '100%',
              animation: 'fadeInUp 1s ease-out 0.4s both',
              '@keyframes fadeInUp': {
                from: { opacity: 0, transform: 'translateY(30px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            <CardContent sx={{ p: 5 }}>
              <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      '& .MuiInputLabel-root': {
                        color: 'text.secondary',
                        '&.Mui-focused': {
                          color: 'primary.main',
                        }
                      }
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      '& .MuiInputLabel-root': {
                        color: 'text.secondary',
                        '&.Mui-focused': {
                          color: 'primary.main',
                        }
                      }
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Tell us about your company and goals"
                    name="message"
                    multiline
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      '& .MuiInputLabel-root': {
                        color: 'text.secondary',
                        '&.Mui-focused': {
                          color: 'primary.main',
                        }
                      }
                    }}
                  />

                  <SubmitButton type="submit">
                    Send Message
                  </SubmitButton>
                </Stack>
              </form>
            </CardContent>
          </ContactCard>

          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={4}
            textAlign="center"
            sx={{
              animation: 'fadeInUp 1s ease-out 0.6s both',
              '@keyframes fadeInUp': {
                from: { opacity: 0, transform: 'translateY(30px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            <Stack alignItems="center" spacing={1}>
              <Typography variant="h6" color="primary.main" fontWeight={600}>
                Email Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
                hello@junodigital.com
              </Typography>
            </Stack>
            <Stack alignItems="center" spacing={1}>
              <Typography variant="h6" color="primary.main" fontWeight={600}>
                Call Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
                +91 9876543210
              </Typography>
            </Stack>
            <Stack alignItems="center" spacing={1}>
              <Typography variant="h6" color="primary.main" fontWeight={600}>
                Response Time
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Within 24 hours
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>

      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setShowSuccess(false)} 
          severity="success" 
          sx={{ width: '100%' }}
        >
          Thank you for your message! We'll get back to you within 24 hours.
        </Alert>
      </Snackbar>
    </SectionContainer>
  );
};

export default ContactSection;