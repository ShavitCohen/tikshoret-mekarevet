import React from 'react';
import {Toolbar, Typography, Button, AppBar} from '@material-ui/core';

import './appBar.css';

const AppBarComponent = ({onFeelingsButtonClick, onNeedsButtonClick}) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className="text">
          תקשורת מקרבת
        </Typography>
        <div>
          <Button onClick={onFeelingsButtonClick} color="inherit">
            רגשות
          </Button>
          <Button onClick={onNeedsButtonClick} color="inherit">
            צרכים
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
