import React from 'react';
import './App.css';
import Movielist from './components/Movielist';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Quarantine Movies
          </Typography>  
        </Toolbar>
      </AppBar>
      <Movielist/>
    </div>
  );
}

export default App;
