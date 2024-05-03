// App.js
import React from 'react';
import ToolbarComponent from './components/toolbar/Toolbar';
import SideNav from './components/side-nav-bar/SideNav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListView from './components/list-view/ListView';
import { Container, Grid } from '@mui/material';

function App() {
  return (
    <Router>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ToolbarComponent />
          </Grid>
          <Grid item xs={3}>
            <SideNav />
          </Grid>
          <Grid item xs={12}>
            <Routes>
              <Route path='/' />
              <Route path='/listView' element={<ListView />} />
            </Routes>
          </Grid>
        </Grid>
      </Container>
    </Router>
  );
}

export default App;
