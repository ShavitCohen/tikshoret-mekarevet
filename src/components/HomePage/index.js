import React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from '@material-ui/lab';

import {Paper, Typography} from '@material-ui/core';

import './homePage.css';
const HomePage = () => (
  <div>
    <div className="imageWrapper">
      <h3>מדריך עזר ל לג׳ירפה המתחיל</h3>
      <img src="/images/icons/icon-192x192.png" alt="Baby Giraffe" />
    </div>
    <div>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              המודל
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>1</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className="paper">
              <Typography variant="h6" component="h1">
                התבוננות
              </Typography>
              <Typography>
                מה קרה?, מה נעשה או נאמר? ללא שיפוטיות או ניתוח של המקרה
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">2</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className="paper">
              <Typography variant="h6" component="h1">
                רגש
              </Typography>
              <Typography>
                מה הרגש שעולה בי בעקבות הפעולה שעליה התבוננתי
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
              3
            </TimelineDot>
            <TimelineConnector className="timelineConnector" />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className="paper">
              <Typography variant="h6" component="h1">
                צורך
              </Typography>
              <Typography>איזה צורך קיים בי (מתוך הצורך נובע הרגש)</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary">4</TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className="paper">
              <Typography variant="h6" component="h1">
                בקשה
              </Typography>
              <Typography>
                מהי הבקשה הספציפית מעצמי או מאחרים, שביצועה יעזור לצורך שלי
                להתמלא
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  </div>
);

export default React.memo(HomePage);
