import React from 'react'
import {  Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import styles from './style.module.css';

const useStyles = makeStyles({
    root: {
      width: '100%',
      borderRadius:'0px',
      marginTop:'10px',
      textAlign:'left',
      height: '365px'
    },
    media: {
      height: 140,
    },
    heading: {
        fontWeight: 'bold'
    }
  });

export const BigCard = ({news}) => {
    const classes = useStyles();
    return (
        <div>
            <a href={news.url} >
                <Card className={classes.root} id={styles.card}>
                    <CardActionArea id={styles.cardAction}>
                        <CardMedia
                            className={classes.media}
                            id={styles.media}
                            image={news.urlToImage}
                            title={news.title}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h3" id={styles.title}>
                            {news.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p"  id={styles.description}>
                            {news.description.substring(0, 160)}.....
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p"  id={styles.source_name}>
                            {news.source.name}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </a>
        </div>
    )
}
