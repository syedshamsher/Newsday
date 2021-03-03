import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import {  NavLink, useHistory } from 'react-router-dom';
import styles from './style.module.css'
import { useDispatch } from 'react-redux';
import { getNewsByQuery } from '../../Redux/NewsByQuery/actions';

const useStyles = makeStyles(() => ({
  appBar: {
      maxHeight: '40px',
      backgroundColor: 'black',
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
  },
  toolbar: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  homeIcon: {
      color: 'white',
  },

}));

export function Navbar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [query, setQuery] = React.useState("")

  const queryHandler = (e) => {
      dispatch(getNewsByQuery(query))
      history.push('./query')

  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <NavLink to='/' >
                <HomeIcon className={classes.homeIcon} />
          </NavLink>
          <NavLink className={styles.nav} to='/latest' activeStyle={{padding: "0 12px 0 12px", backgroundColor: "#ffffff", color: "black"}}>
                Latest News
          </NavLink>
          <NavLink className={styles.nav} to='/by-source' activeStyle={{padding: "0 12px 0 12px", backgroundColor: "#ffffff", color: "black"}}>
                News By Source
          </NavLink>
          <NavLink className={styles.nav} to='/by-category' activeStyle={{padding: "0 12px 0 12px", backgroundColor: "#ffffff", color: "black"}}>
                News By Category
          </NavLink>
          <input id={styles.input} type="text" name="query" value={query} onChange={(e) => setQuery(e.target.value)}  />
          <button onClick={queryHandler}>SEARCH</button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
