import { FETCH_NEWS_BY_SOURCE_REQUEST, 
         FETCH_NEWS_BY_SOURCE_SUCCESS, 
         FETCH_NEWS_BY_SOURCE_FAILURE 
} from './actionTypes'
import axios from 'axios';

export const newsBySourceRequest = () => ({
    type: FETCH_NEWS_BY_SOURCE_REQUEST

})

export const newsBySourceSuccess = (payload) => ({
    type: FETCH_NEWS_BY_SOURCE_SUCCESS,
    payload
})

export const newsBySourceFailure = (payload) => ({
    type: FETCH_NEWS_BY_SOURCE_FAILURE,
})

export const getArticlesFromSources = (sources) => (dispatch) => {
    const key = process.env.REACT_APP_API_KEY
    let sourceValues = [];
    sources.forEach((source) => {
      sourceValues.push(source.value);
    });
    const sourceListStr = sourceValues.join(',');
    dispatch(newsBySourceRequest())
  
    axios.get(`https://newsapi.org/v2/everything?sources=${sourceListStr}&apiKey=${key}&pageSize=51`)
          .then((res) => {
            dispatch(newsBySourceSuccess(res.data.articles))
          })
          .catch((errorCode) => {
            dispatch(newsBySourceFailure(errorCode))
          })
  };