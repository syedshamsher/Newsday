import React from 'react'
import { useHistory } from 'react-router-dom';
import { Box, Container } from '@material-ui/core';
import { SearchResults } from '../../Components/SearchResults/SearchResults';
import { useSelector } from 'react-redux';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    arrow: {
        fontSize: '50px',
        color: 'black',
        fontWeight: '900',
        marginLeft:'2%'
    }
  });
  
export const Query = () => {
    const history = useHistory();
    const classes = useStyles();
    const newsByQuery = useSelector(state => state.newsByQuery.newsByQuery);

    const goBack = () => {
        history.goBack()
    }
    return (
        <Container>
        <div onClick={goBack} style={{marginTop: '5%', marginBottom: '-5%',display: 'flex', justifyContent: 'flex-start'}}>
            <ArrowBackIcon className={classes.arrow} />
        </div>
            <Box>
                {
                newsByQuery && 
                (<Box>
                    <SearchResults news = {newsByQuery.slice(0, 18)} />
                    <SearchResults news = {newsByQuery.slice(18, 35)} />
                    <SearchResults news = {newsByQuery.slice(35, 50)} />
                </Box>)
                }
            </Box>
        </Container>

    )
}
