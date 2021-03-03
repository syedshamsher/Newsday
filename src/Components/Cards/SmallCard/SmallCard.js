import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import styles from './style.module.css'
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      textAlign: 'left',
      height: '100px',
      width: '100%',
      borderRadius: '0px'
    },
    cover: {
      width: '100px',
    },
    source: {
      fontSize: '12px',
    }
  }));
  
export const SmallCard = ({news}) => {
    const classes = useStyles();
  
    return (
    <React.Fragment>
      <a href={news.url}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.cover}
            image={news.urlToImage}
            title={news.title}
          />
          <div className={classes.details}>
            <CardContent id={styles.content}>
              <Typography id={styles.title}>
                  {news.title}...
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" className={classes.source}>
                {news.source.name}
              </Typography>
            </CardContent>
          </div>
        </Card>
      </a>

    </React.Fragment>
    );
}
