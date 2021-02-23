import React from 'react';
import { Box, Container } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { SearchResults } from '../../Components/SearchResults/SearchResults';
import { makeStyles } from '@material-ui/core/styles';
import { getDefaultQuery } from '../../Redux/DefaultQuery/actions';
import { CategorySearch } from '../../Components/CategorySearch';

const useStyles = makeStyles({
  search_container: {
    maxWidth: '90%',
    marginBottom: '10px',
    textAlign: 'left',
    margin: 'auto'
  }
});

export const NewsByCategory = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const defaultNews = useSelector(state => state.defaultQuery.defaultQuery);
  const newsByCategory = useSelector(state => state.newsByCategory.newsByCategory);

  React.useEffect(() => {
    dispatch(getDefaultQuery())
  },[dispatch])

  return (
    <Container>
      <Box>
        {
          newsByCategory.length > 0 &&
          (<Box>
              <Box className={classes.search_container}>
                  <CategorySearch/>
              </Box>
              <SearchResults news = {newsByCategory.slice(0, 18)} />
              <SearchResults news = {newsByCategory.slice(18, 35)} />
              <SearchResults news = {newsByCategory.slice(35, 50)} />
          </Box>)
        }
        {
          newsByCategory.length === 0 &&
          (<Box>
              <Box className={classes.search_container}>
                  <CategorySearch/>
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
