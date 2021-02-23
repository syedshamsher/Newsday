import { Container, Box } from '@material-ui/core';
import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { getTopStories } from '../../Redux/TopStories/actions';
// import styles from './style.module.css'
import { getTopStoriesFromIndia } from '../../Redux/TopStoriesFromIndia/actions';
import { SearchResults } from '../../Components/SearchResults/SearchResults';

export const LatestNews = () => {
  const topStories = useSelector(state => state.topStories.topStories);
  const topStoriesFromIndia = useSelector(state => state.topStoriesFromIndia.topStoriesFromIndia);
  const dispatch = useDispatch();

  console.log( topStoriesFromIndia )
  React.useEffect(() => {
    dispatch(getTopStories())
    dispatch(getTopStoriesFromIndia())
  },[dispatch])

  return (
    <Container>
      <Box>
        {
          topStories && topStoriesFromIndia &&
          (<Box>
              <SearchResults news = {topStories.slice(0, 18)} />
              <SearchResults news = {topStoriesFromIndia.slice(0, 18)} />
          </Box>)
        }
      </Box>
    </Container>
  );
}