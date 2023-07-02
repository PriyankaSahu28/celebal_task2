import React, { useState } from 'react';
//import * as FaIcons from 'react-icons/fa';
 import { FaHome, FaTasks, FaCalendar, FaUser, FaEnvelope } from 'react-icons/fa';
 import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const defaultTheme = createTheme();
function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


const handleSubmit = (e) => {
  console.log(formData);


  console.log(formData.name);
  console.log(formData.email);

  alert(`Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);


    // e.preventDefault();
    // // const data = new FormData(e.currentTarget);
    // alert({
    //   email: formData.email,
    //   password: formData.name,
    // });
   // alert(`Thank you ${formData.name} for your message`);
  };

  const handleSidebarClick = (icon) => {
    console.log(`Clicked on ${icon} icon`);
  };

  return (
    <div className="Grid">
      <header>
        <h1>Celebal 1st Task</h1>
      </header>
      <div className="container">
        <aside>
          <ul>
            <li onClick={() => handleSidebarClick('home')}>
              <FaHome />
              <span>Home</span>
            </li>
            <li onClick={() => handleSidebarClick('tasks')}>
              <FaTasks />
              <span>Tasks</span>
            </li>
            <li onClick={() => handleSidebarClick('calendar')}>
              <FaCalendar />
              <span>Calendar</span>
            </li>
            <li onClick={() => handleSidebarClick('user')}>
              <FaUser />
              <span>User</span>
            </li>
            <li onClick={() => handleSidebarClick('contact')}>
              <FaEnvelope />
              <span>Contact</span>
            </li>
          </ul>
        </aside>
        <main>
        <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              value= {formData.name}
              onChange={handleInputChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email Address"
              type="email"
              onChange={handleInputChange}
              id="email"
              autoComplete="email"
            />
             <TextField
              margin="normal"
              required
              fullWidth
              name="message"
              label="Message"
              onChange={handleInputChange}
              type="message"
              id="message"
              autoComplete="message"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>

          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
        </main>
      </div>
      <footer>
        <p>© 2023 Celebal 1st Task. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Form;



//////
//  event.preventDefault();
//    const data = new FormData(event.currentTarget);
//     alert({
//       email: data.get('email'),
//       password: data.get('password'),
//     });