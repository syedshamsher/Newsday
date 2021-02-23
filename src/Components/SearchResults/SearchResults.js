import { Card, CardHeader, Container, Divider, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { MediumCard } from '../../Components/Cards/MediumCard/MediumCard';
import { makeStyles } from '@material-ui/core/styles';
import { SmallCard } from '../../Components/Cards/SmallCard/SmallCard';
import { BigCard } from '../../Components/Cards/BigCard/BigCard';
import { ClassicCard } from '../../Components/Cards/ClassicCard/ClassicCard';
import { LongSmallCard } from '../../Components/Cards/LongSmallCard/LongSmallCard';
import styles from './style.module.css';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles({
  xsNews: {
    maxWidth: '100%',
    marginBottom: '10px',
    textAlign: 'left'
  }
});
export const SearchResults = ({news}) => {
  const sourceLoading = useSelector(state => state.newsBySource.isLoading)
  const categoryLoading = useSelector(state => state.newsByCategory.isLoading)
  const [loading, setLoading] = React.useState(false)
  const classes = useStyles();

  React.useEffect(() => {
    setLoading(true)
    setTimeout(() => setLoading(false),3000)
  },[sourceLoading, categoryLoading])

  return (
    <Container >
          <div id={styles.top}>
            <div style={{marginTop:'80px'}} id={styles.first}>
                {
                  news?.filter(item => item.urlToImage !== null).slice(0, 1).map((item, i) => {
                    return(
                        loading ?
                        <Card>
                          <Skeleton variant="rect" animation="wave" id={styles.medium_card_skeleton} width="100%" />
                          <Skeleton height={40} width="80%" />
                          <Skeleton width="40%" /> 
                        </Card> :
                        <MediumCard news={item} key={i} />
                    )
                  })
                }
                {
                  news?.filter(item => item.urlToImage !== null).slice(1, 5).map((item, i) => {
                    return(
                      <div key={i} >
                        {
                            loading ?
                            <Card style={{marginTop:'10px'}} >
                              <CardHeader
                                  avatar={<Skeleton variant="rect" width={70} height={70} />}
                                  title={ <Skeleton width="80%" /> }
                                  subheader={ <Skeleton width="60%" /> }
                              />
                            </Card> :
                            <div>
                            <Divider />
                            <LongSmallCard news={item} />
                            </div>
                        }
                      </div>
                    )
                  })
                }
            </div>
            <div style={{marginTop:'71px'}} id={styles.second}>
                {
                  news?.filter(item => item.urlToImage !== null).slice(5, 7).map((item, i) => {
                    return(
                        loading ?
                        <Card style={{marginTop:'5px', height:'320px'}}>
                          <Skeleton variant="rect" animation="wave" id={styles.classic_card_skeleton} width="100%" />
                          <Skeleton width="80%" height={40} />
                          <Skeleton width="60%" height={30} />
                          <Skeleton width="40%" height={20} /> 
                        </Card> :
                        <ClassicCard news={item} key={i} />
                    )
                  })
                }
                {
                  news?.filter(item => item.urlToImage !== null).slice(0, 1).map((item, i) => {
                    return(
                      <div key={i} >
                        {
                            loading ?
                            <Card style={{marginTop:'10px'}} >
                              <CardHeader
                                  avatar={<Skeleton variant="rect" width={70} height={70} />}
                                  title={ <Skeleton width="80%" /> }
                                  subheader={ <Skeleton width="60%" /> }
                              />
                            </Card> :
                            <div>
                            <Divider />
                            <SmallCard news={item} />
                            </div>
                        }
                      </div>
                    )
                  })
                }
                  <div style={{marginTop:'15px'}}>
                  {
                    news?.filter(item => item.urlToImage !== null).slice(1, 2).map((item, i) => {
                      return(
                          <div key={i} className={classes.xsNews}>
                              <Typography component="p" style={{margin:'10px'}}>
                                  {item.title.substring(0, 45)}...
                              </Typography>
                              <Divider />
                          </div>
                      )
                    })
                  }
                  </div>
            </div>
          </div>
          <div id={styles.bottom} >
                <div id ={styles.bottomfirst}>
                    {
                      news?.filter(item => item.urlToImage !== null).slice(7, 8).map((item, i) => {
                        return(
                            loading ?
                            <Card style={{marginTop:'5px', height:'320px'}}>
                              <Skeleton variant="rect" animation="wave" id={styles.classic_card_skeleton} width="100%" />
                              <Skeleton width="80%" height={40} />
                              <Skeleton width="60%" height={30} />
                              <Skeleton width="40%" height={20} /> 
                            </Card> :
                            <MediumCard news={item} key={i} />
                        )
                      })
                    }
                    {
                      news?.filter(item => item.urlToImage !== null).slice(8, 12).map((item, i) => {
                        return(
                          <div key={i} >
                            {
                            loading ?
                            <Card style={{marginTop:'10px'}} >
                              <CardHeader
                                  avatar={<Skeleton variant="rect" width={70} height={70} />}
                                  title={ <Skeleton width="80%" /> }
                                  subheader={ <Skeleton width="60%" /> }
                              />
                            </Card> :
                            <div>
                              <Divider />
                              <SmallCard news={item} />
                            </div>
                        }
                          </div>
                        )
                      })
                    }
                </div>
                <div id = {styles.bottomsecond}>
                    {
                      news?.filter(item => item.urlToImage !== null).slice(12, 14).map((item, i) => {
                        return(
                            loading ?
                            <Card style={{marginTop:'5px', height:'320px'}}>
                              <Skeleton variant="rect" animation="wave" id={styles.classic_card_skeleton} width="100%" />
                              <Skeleton width="80%" height={40} />
                              <Skeleton width="60%" height={30} />
                              <Skeleton width="40%" height={20} /> 
                            </Card> :
                            <BigCard news={item} key={i} />
                        )
                      })
                    }
                    {
                      news?.filter(item => item.urlToImage !== null).slice(4, 5).map((item, i) => {
                        return(
                          <div key={i} >
                            {
                            loading ?
                            <Card style={{marginTop:'10px'}} >
                              <CardHeader
                                  avatar={<Skeleton variant="rect" width={70} height={70} />}
                                  title={ <Skeleton width="80%" /> }
                                  subheader={ <Skeleton width="60%" /> }
                              />
                            </Card> :
                            <div>
                                <Divider />
                                <SmallCard news={item} />
                            </div>
                        }
                          </div>
                        )
                      })
                    }
                </div>
          </div>
    </Container>
  );
}