import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Switch, Box, Container } from '@mui/material';

class MasterLayout extends Component {
  render() {
    const { children, toggleMode } = this.props;

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* AppBar */}
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Quiz App
            </Typography>
            <Switch onChange={toggleMode} />
          </Toolbar>
        </AppBar>

        {/* Main content */}
        <Container component="main" sx={{ flexGrow: 1, mt: 3 }}>
          {children}
        </Container>

        {/* Optional footer */}
        {/* <footer>
          <Typography variant="body2" color="textSecondary" align="center">
            © 2024 Quiz App
          </Typography>
        </footer> */}
      </Box>
    );
  }
}

export default MasterLayout;
