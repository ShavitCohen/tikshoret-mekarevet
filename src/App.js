import React, {useState} from 'react';
import AppBar from './components/AppBar';
import Dialog from './components/Dialog';
import HomePage from './components/HomePage';
import feelings from './content/feelings';
import needs from './content/needs';
import './App.css';

const App = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [content, setContent] = useState(null);

  const handleFeelingsButtonClick = () => {
    setContent(feelings);
    setDialogOpen(true);
  };

  const handleNeedsButtonClick = () => {
    setContent(needs);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <AppBar
        onFeelingsButtonClick={handleFeelingsButtonClick}
        onNeedsButtonClick={handleNeedsButtonClick}
      />

      <HomePage />

      {content && (
        <Dialog
          open={dialogOpen}
          onClose={handleDialogClose}
          content={content}
        />
      )}

      <footer className="footer">שביט כהן, 2020</footer>
    </>
  );
};

export default App;
