import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      textAlign: 'left',
      height: '100px',
      width: '100%',
      borderRadius: '0px'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        width: '200px',
    },
    cover: {
      width: '100px',
    },
    title: {
        fontSize: '12px',
    }
  }));
  
export const LargeCard = ({news}) => {
    const classes = useStyles();
  
    return (
    <div>
      <a href={news.url}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.cover}
            image={news.urlToImage}
            title={news.title}
          />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography  className={classes.title}>
                {news.title.substring(0, 80)}...
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {news.source.name}
              </Typography>
            </CardContent>
          </div>
        </Card>
      </a>
    </div>
    );
}
