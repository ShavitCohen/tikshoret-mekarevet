import React from 'react';

import {
  Slide,
  Typography,
  IconButton,
  Toolbar,
  AppBar,
  Divider,
  List,
  ListItem,
  ListItemText,
  Dialog,
  AccordionDetails,
  AccordionSummary,
  Accordion,
  Grid,
} from '@material-ui/core';

import {
  Close as CloseIcon,
  ExpandMore as ExpandMoreIcon,
} from '@material-ui/icons';

import './dialog.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({open, onClose, content}) {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={'title'}>
            {content.title}
          </Typography>
        </Toolbar>
      </AppBar>
      {content.items.map((section, i) => (
        <Accordion key={`item_${i}`}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={'accordionHeadding'}>
              {section.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={3}>
              {section.items.map((feelingGroup, i) => (
                <Grid item xs={6}>
                  <List key={`list_${i}`}>
                    <ListItem>
                      <strong>
                        <ListItemText primary={feelingGroup.title} />
                      </strong>
                    </ListItem>
                    <Divider />
                    {feelingGroup.items.map((feeling, i) => (
                      <ListItem key={`feeling_${i}`}>
                        <div>
                          <ListItemText primary={feeling} />
                        </div>
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      ))}
      <AppBar color="primary" className="dialog-footer">
        תודה{' '}
        <a
          href="https://az.ravpage.co.il/michaelfinkel?fbclid=IwAR0DO3CHhk8zZXYRqnFmy-3ru5Ypo0dkuQwNMlYgIMZEpTPd99lkbvR64vM"
          target="_blank"
          rel="noopener noreferrer"
        >
          למיכאל פינקל
        </a>{' '}
        על הארגון והסיווג
      </AppBar>
    </Dialog>
  );
}
