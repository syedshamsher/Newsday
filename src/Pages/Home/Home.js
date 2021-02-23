import { Box, Container } from '@material-ui/core';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { SearchResults } from '../../Components/SearchResults/SearchResults';
import { getDefaultQuery } from '../../Redux/DefaultQuery/actions';

export const Home = () => {
  const defaultNews = useSelector(state => state.defaultQuery.defaultQuery);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getDefaultQuery())
  },[dispatch])

  return (
    <Container>
      <Box>
        {
          defaultNews &&
          (<Box>
              <SearchResults news = {defaultNews.slice(0, 18)} />
              <SearchResults news = {defaultNews.slice(18, 35)} />
              <SearchResults news = {defaultNews.slice(35, 50)} />
          </Box>)
        }
      </Box>

    </Container>
  );
}