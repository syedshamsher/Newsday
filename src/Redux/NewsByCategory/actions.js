import { FETCH_NEWS_BY_CATEGORY_REQUEST, 
         FETCH_NEWS_BY_CATEGORY_SUCCESS, 
         FETCH_NEWS_BY_CATEGORY_FAILURE 
} from './actionTypes'
import axios from 'axios';

export const newsByCategoryRequest = () => ({
    type: FETCH_NEWS_BY_CATEGORY_REQUEST

})

export const newsByCategorySuccess = (payload) => ({
    type: FETCH_NEWS_BY_CATEGORY_SUCCESS,
    payload
})

export const newsByCategoryFailure = (payload) => ({
    type: FETCH_NEWS_BY_CATEGORY_FAILURE,
})

export const getArticlesFromCategory = (category) => (dispatch) => {
    const key = process.env.REACT_APP_API_KEY
    dispatch(newsByCategoryRequest())

    axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${key}&pageSize=51`)
          .then((res) => {
            dispatch(newsByCategorySuccess(res.data.articles))
          })
          .catch((errorCode) => {
            dispatch(newsByCategoryFailure(errorCode))
          })
  };