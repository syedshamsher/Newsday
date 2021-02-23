import React from 'react';
import { Box, Container } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { SearchBox } from '../../Components/SearchBox/SearchBox';
import { SearchResults } from '../../Components/SearchResults/SearchResults';
import { makeStyles } from '@material-ui/core/styles';
import { getDefaultQuery } from '../../Redux/DefaultQuery/actions';

const useStyles = makeStyles({
  search_container: {
    maxWidth: '90%',
    marginBottom: '10px',
    textAlign: 'left',
    margin: 'auto'
  }
});

export const NewsBySource = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const defaultNews = useSelector(state => state.defaultQuery.defaultQuery);
  const newsBySource = useSelector(state => state.newsBySource.newsBySource);

  React.useEffect(() => {
    dispatch(getDefaultQuery())
  },[dispatch])

  return (
    <Container>
      <Box>
        {
          newsBySource.length > 0 &&
          (<Box>
              <Box className={classes.search_container}>
                  <SearchBox/>
              </Box>
              <SearchResults news = {newsBySource.slice(0, 18)} />
              <SearchResults news = {newsBySource.slice(18, 35)} />
              <SearchResults news = {newsBySource.slice(35, 50)} />
          </Box>)
        }
        {
          newsBySource.length === 0 &&
          (<Box>
              <Box className={classes.search_container}>
                  <SearchBox/>
              </Box>
              <SearchResults news = {defaultNews.slice(0, 18)} />
              <SearchResults news = {defaultNews.slice(18, 35)} />
              <SearchResults news = {defaultNews.slice(35, 50)} />
          </Box>)
        }
      </Box>
    </Container>
  )
}
